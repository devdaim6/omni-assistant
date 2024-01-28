import { BgSparkles } from "@/components/ui/BgSparkles";
import { FC } from "react";
const page: FC = () => {
  return (
    <>
      <BgSparkles className="min-h-screen">
        <div className="text-white">
          <div className="container mx-auto p-8">
            <h1 className="text-2xl font-semibold mb-4">
              About Omni Assistant
            </h1>

            <p className="mb-4">
              Welcome to Omni Assistant, your go-to web application designed to
              enhance productivity and simplify daily tasks. Omni Assistant is
              built with React, powered by the flexibility of Tailwind CSS for a
              delightful user experience.
            </p>

            <p className="mb-8">
              Your go-to web application for efficient organization and task
              management.
            </p>

            <section>
              <h2 className="text-xl font-semibold mb-4">Key Features</h2>
              <ul className="list-disc pl-6 mb-6">
                <li className="mb-2 text-sm">
                  <span className="font-bold">ChatMeh:</span> Experience a
                  conversational AI assistant that remembers previous
                  interactions and generates responses based on context. This
                  feature allows for natural and engaging conversations.
                </li>
                <li className="mb-2 text-sm">
                  <span className="font-bold">Quick Chat:</span> Engage in quick
                  and efficient exchanges with the AI without the need for
                  context storage. Ideal for swift responses to simple queries.
                </li>
                <li className="mb-2 text-sm">
                  <span className="font-bold">PDF Talks:</span> Upload PDF
                  documents and engage in discussions about their content.
                  Explore topics, share insights, and discuss anything related
                  to the uploaded PDFs.
                </li>
                <li className="mb-2 text-sm">
                  <span className="font-bold">Recipe Generator:</span> Unleash
                  your inner chef with two recipe generation variants:
                  <ul className="list-disc pl-6">
                    <li className="mb-2">
                      Text-based variant: Generate recipes using only text
                      input, catering to specific dietary preferences and
                      ingredients.
                    </li>
                    <li className="mb-2">
                      Image-based variant: Capture the essence of a food-related
                      image and derive a recipe based on its visual content.
                    </li>
                  </ul>
                </li>
                <li className="mb-2 text-sm">
                  <span className="font-bold">Fun Zone:</span> Challenge your
                  perception and analytical skills with a variety of
                  image-related tasks:
                  <ul className="list-disc pl-6">
                    <li className="mb-2">
                      Object counting: Determine the number of objects in a
                      given image.
                    </li>
                    <li className="mb-2">
                      Item identification: Recognize and list the items present
                      in an image.
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            <h2 className="text-xl font-semibold mb-4">Contributing</h2>
            <p className="mb-4">
              Omni Assistant is an open-source project, and we welcome
              contributions from the community. Whether you're reporting bugs,
              suggesting new features, or contributing code, your involvement is
              highly valued. Refer to our Contribution Guidelines for details on
              how to get started.
            </p>

            <h2 className="text-xl font-semibold mb-4">Code of Conduct</h2>
            <p className="mb-4">
              To maintain a positive and inclusive environment, we follow a Code
              of Conduct. All contributors are expected to adhere to these
              guidelines. Read our Code of Conduct for more information.
            </p>

            <h2 className="text-xl font-semibold mb-4">Get Started</h2>
            <p className="mb-4">
              Before you dive into contributing, make sure to check out the
              README.md file for an overview of Omni Assistant. It provides key
              information about features, technologies used, and instructions
              for setting up the development environment.
            </p>

            <p className="mb-8 text-xl font-semibold">
              Thank you for being a part of Omni Assistant! Happy Coding!
            </p>
          </div>
        </div>
      </BgSparkles>
    </>
  );
};

export default page;
