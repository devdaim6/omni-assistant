import Footer from "@/components/Home/Footer";
import Home from "@/components/Home/Home";
import Services from "@/components/Home/Services";
import { FC } from "react";
const page: FC = () => {
  return (
    <>
      <Home />;
      <Services />
      <Footer />
    </>
  );
};

export default page;
