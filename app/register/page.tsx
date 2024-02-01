import { BgSparkles } from "@/components/ui/BgSparkles";
import { FC } from "react";

const page: FC = ({}) => {
  return (
    <>
      {" "}
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
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-300 dark:text-gray-500"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-2 border border-gray-300 bg-gray-600 rounded-md focus:outline-none     dark:text-gray-200"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="username"
                  className="text-sm font-medium text-gray-300 dark:text-gray-500"
                >
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Enter your Username"
                  className="w-full p-2 border border-gray-300 bg-gray-600 rounded-md focus:outline-none     dark:text-gray-200"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-300 dark:text-gray-500"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2 border border-gray-300 bg-gray-600 rounded-md focus:outline-none     dark:text-gray-200"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-300 dark:text-gray-500"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your Password"
                  className="w-full p-2 border border-gray-300 bg-gray-600 rounded-md focus:outline-none     dark:text-gray-200"
                />
              </div>{" "}
            </div>
            <div className="space-y-2 w-full">
              <label
                htmlFor="image"
                className="text-sm font-medium text-gray-300 dark:text-gray-500"
              >
                Profile
              </label>
              <input
                id="image"
                type="file"
                className="w-full p-2 border border-gray-300 bg-gray-600 rounded-md focus:outline-none     dark:text-gray-200"
              />
            </div>
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

export default page;
