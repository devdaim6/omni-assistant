import { FC } from "react";
import { HoverEffect } from "../ui/HoverEffect ";
import { services } from "@/utils/services";

const Services: FC = () => {
  return (
    <div className="text-white">
      <div className="flex flex-row">
        <HoverEffect items={services} />
      </div>
    </div>
  );
};

export default Services;
