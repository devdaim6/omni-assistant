import { prisma } from "@/lib/prisma";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";

const authOptions: NextAuthOptions = {
  providers: [
    /* The `CredentialsProvider` is a provider for NextAuth that allows users to authenticate using
   their email and password credentials. */
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials) {
          return null; // Credentials are missing
        }
        const { email, password }: { email: string; password: string } =
          credentials || {};

        const isUser = await prisma.user.findFirst({
          where: { email: email, provider: "credentials" } as { email: string },
        });

        if (!isUser) return null;

        if (!isUser.password) return null;

        const passwordMatches = await bcrypt.compare(password, isUser.password);

        if (!passwordMatches) return null;

        return isUser;
      },
    }),

    /* The `GithubProvider` is a provider for NextAuth that allows users to authenticate using their
   GitHub account. */
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name ?? profile.name,
          email: profile.email,
          image: profile.avatar_url,
        };
      },
    }),

    /* The `GoogleProvider` is a provider for NextAuth that allows users to authenticate using their
   Google account. */
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
  ],
  session: {
    maxAge: 24 * 60 * 60,
  },
  callbacks: {
    async signIn({
      user,
      account,
      profile,
      email,
      credentials,
    }): Promise<string | boolean> {
      {
        if (!account) return false;

        if (account.provider === "google" || account.provider === "github") {
          if (!profile) return true;

          const existingUser = await prisma.user.findFirst({
            where: { email: profile.email, provider: account.provider },
          });

          if (!existingUser) {
            await prisma.user.create({
              data: {
                email: profile.email,
                name: profile.name,
                provider: account.provider,
                image:
                  account.provider === "google"
                    ? ((profile as any).picture as string)
                    : ((profile as any).avatar_url as string),
              },
            });
          }
          return true;
        }
        return true;
      }
    },
    async session({ session, token }) {
      return { ...session, token };
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
