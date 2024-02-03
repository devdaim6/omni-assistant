"use client";
import { BgSparkles } from "@/components/ui/BgSparkles";
import { FC } from "react";
import { toast } from "sonner";
import Input from "./Form/Input";

const RegisterForm: FC = ({ }) => {
  const registerUser = async (e: any) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const { name, email, username, password, image }: any =
      Object.fromEntries(form);

    if (!email || !password || !name || !username) {
      toast.error("All fields are mandatory");
    }

    try {
      const registerPromise = async () =>
        fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            username,
            password,
            image,
          }),
        }).then((response) => response.json());

      toast.promise(registerPromise, {
        loading: "Registering...",
        success: (data) => `${data?.message}. ${data?.description}`,
        error: "Error registering user",
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <BgSparkles className="min-h-screen">
        <div className="max-w-screen  p-4  rounded-md shadow-md z-10">
          <div className="mb-6">
            <h2 className="text-xl lg:text-3xl font-bold text-gray-200 dark:text-gray-700">
              Registration Form
            </h2>
            <p className="text-gray-500 dark:text-gray-400 pt-2 text-sm">
              Please take a moment to complete the registration form below. Your
              information is crucial for us to provide you with the best
              possible service. Thank you for your cooperation.
            </p>
          </div>
          <form onSubmit={registerUser} name="form" id="form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Input
                name="name"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
              <Input
                name="username"
                id="username"
                type="text"
                placeholder="Enter your Username"
              />
              <Input
                name="email"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
              <Input
                name="password"
                id="password"
                type="password"
                placeholder="Enter your Password"
              />
            </div>
            <Input
              name="image"
              id="image"
              type="file"
              placeholder="Upload Your Image"
            />
            <button
              type="submit"
              className="w-full py-2 mt-8 bg-black/80 text-white border-gray-900 border hover:text-gray-500  rounded-lg "
            >
              Register
            </button>
          </form>
        </div>
      </BgSparkles>
    </>
  );
};

export default RegisterForm;
