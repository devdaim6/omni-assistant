import { BgSparkles } from "@/components/ui/BgSparkles";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { FC } from "react";
const page: FC = () => {
  const sendContact = async (form: FormData) => {
    "use server";
    let { name, email, message, subject } = Object.fromEntries(form);
    if (!email || !message) {
      console.log("Email and Message Are required");
      return;
    }
    try {
      await prisma.contact.create({
        data: {
          name: name.toString(),
          email: email.toString(),
          message: message.toString(),
          subject: subject.toString(),
        },
      });
      return NextResponse.rewrite("/contact");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <BgSparkles className="min-h-screen">
        <div className="max-w-2xl mx-auto p-4  rounded-md shadow-md z-10">
          <div className="mb-6">
            <h2 className="text-xl lg:text-3xl font-bold text-gray-200 dark:text-gray-700">
              Contact our Omni Assistant Team
            </h2>
            <p className="text-gray-500 dark:text-gray-400 pt-2 text-sm">
              Fill out the form below, and we&apos;ll get back to you as soon as
              possible.
            </p>
          </div>
          <form action={sendContact} id="form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-300 dark:text-gray-500"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-2 border border-gray-300 bg-gray-600 rounded-md focus:outline-none     dark:text-gray-200"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-300 dark:text-gray-500"
                >
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2 border border-gray-300 bg-gray-600 rounded-md focus:outline-none     dark:text-gray-200"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="text-sm font-medium text-gray-300 dark:text-gray-500"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Enter the subject"
                className="w-full p-2 border border-gray-300 bg-gray-600 rounded-md focus:outline-none     dark:text-gray-200"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-300 dark:text-gray-500"
              >
                Message <span className="text-red-600">*</span>
              </label>
              <textarea
                id="message"
                required
                name="message"
                rows={4}
                placeholder="Enter your message"
                className="w-full p-2 border border-gray-300 bg-gray-600 rounded-md focus:outline-none     dark:text-gray-200"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-4 bg-black/80 text-white border-gray-900 border hover:text-gray-500  rounded-lg "
            >
              Send Message
            </button>
          </form>
        </div>
      </BgSparkles>
    </>
  );
};

export default page;
