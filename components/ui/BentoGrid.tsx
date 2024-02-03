import { cn } from "@/utils/cn";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {

    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-2  gap-8 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    link
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    link?: string | undefined;
}) => {
    const ref = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
    });
    const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.7, 0.9]);
    return (
        <Link href={link ? link : "#"}>
            <motion.div
                style={{
                    rotateX: rotate,
                    scale,
                    boxShadow:
                        "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
                }}
            >

                <div
                    ref={ref}
                    className={cn(
                        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
                        className
                    )}
                >
                    {header}
                    <div className="group-hover/bento:translate-x-2 transition duration-200">
                        {icon}
                        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                            {title}
                        </div>
                        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                            {description}
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};
