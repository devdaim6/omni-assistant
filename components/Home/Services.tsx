"use client";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import funzone from "@/public/Assets/funzone.jpg";
import recipe from "@/public/Assets/recipe.jpg";
import { cn } from "@/utils/cn";
import {
    IconBoxAlignRightFilled,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";
export function Grid() {
    return (
        <>
            <div className="flex justify-center my-4 py-4">

                <h1 className="lg:text-5xl text-xl font-semibold text-black dark:text-white">
                    Unleash the power of <br />
                    <p className="lg:text-5xl text-xl  text-center md:text-[6rem] font-bold mt-1 leading-none">
                        Omni Assistant
                    </p>
                </h1>
            </div>
            <BentoGrid className="max-w-4xl min-h-[80rem] lg:min-h-[50rem] max-h-[100rem] mx-auto md:auto-rows-[20rem] ">

                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        link={item.link}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={cn("[&>p:text-lg]", item.className)}
                        icon={item.icon}
                    />
                ))}
            </BentoGrid>
        </>
    );
}
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);


const Chatmeh = () => {
    const { data: session } = useSession()

    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };
    const variantsSecond = {
        initial: {
            x: 0,
        },
        animate: {
            x: -10,
            rotate: -5,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            <motion.div
                variants={variants}
                className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
            >
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" ><Image src={session?.user?.image || ""} alt="user" width={100} height={100} className="w-full h-full rounded-full" /></div>
                <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
            </motion.div>
            <motion.div
                variants={variantsSecond}
                className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
            >
                <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" ><Image src={"https://plus.unsplash.com/premium_photo-1682124816633-55501e1d4da7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHVzZXJzJTIwcm9ib3R8ZW58MHx8MHx8fDA%3D"} alt="Omni" width={100} height={100} className="w-full h-full rounded-full" /></div>
            </motion.div>
            <motion.div
                variants={variants}
                className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
            >
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" ><Image src={session?.user?.image || ""} alt="user" width={100} height={100} className="w-full h-full rounded-full" /></div>
                <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
            </motion.div>
        </motion.div>
    );
};
const GazePDF = () => {
    const variants = {
        initial: {
            width: 0,
        },
        animate: {
            width: "100%",
            transition: {
                duration: 0.2,
            },
        },
        hover: {
            width: ["0%", "100%"],
            transition: {
                duration: 2,
            },
        },
    };
    const arr = new Array(6).fill(0);
    return (
        <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            {arr.map((_, i) => (
                <motion.div
                    key={"skelenton-two" + i}
                    variants={variants}
                    style={{
                        maxWidth: Math.random() * (100 - 40) + 40 + "%",
                    }}
                    className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
                ></motion.div>
            ))}
        </motion.div>
    );
};
const RecipeGenerator = () => {
    const variantZoom = {
        initial: {
            scale: 1,
        },
        animate: {
            scale: 1.08,
            transition: {
                duration: 0.2,
            },
        },
    };
    return (
        <motion.div
            initial="initial"
            variants={variantZoom}
            whileHover="animate"

            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"

        >

            <motion.div className="h-full w-full rounded-lg"> <Image src={recipe} alt="recipe" className='rounded-xl h-[12rem] w-full' /></motion.div>
        </motion.div>
    );
};

const Funzone = () => {
    const variantZoom = {
        initial: {
            scale: 1,
        },
        animate: {
            scale: 1.08,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <motion.div
            variants={variantZoom}
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            <motion.div className="h-full w-full rounded-lg"> <Image src={funzone} alt="funzone" className='rounded-xl h-[12rem] w-full' /></motion.div>




        </motion.div>
    );
};
const items = [
    {
        title: "ChatMeh - AI Content Generation",
        description: (
            <span className="text-sm">
                Conversational AI: Recall interactions. Quick Chat: Swift, context-free exchanges.
            </span>
        ),
        link: "/chatmeh",
        header: <Chatmeh />,
        className: "md:col-span-1",
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    }, {
        title: "Recipe Generator",
        link: "/recipe-generator",
        description: (
            <span className="text-sm">
                Create recipes from text or images, catering to preferences and capturing visual essence.
            </span>
        ),
        header: <RecipeGenerator />,
        className: "md:col-span-1",
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    }, {
        title: "FunZone",
        description: (
            <span className="text-sm">
                Challenge perception with engaging image tasks in Fun Zone—object counting and item identification.
            </span>
        ),
        link: '/fun-zone',
        header: <Funzone />,
        className: "md:col-span-1",
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "GazePDF: Elevate PDF insight instantly!",
        link: "/pdf-talks",
        description: (
            <span className="text-sm">
                Upload PDFs, discuss content, explore topics, and share insights.
            </span>
        ),
        header: <GazePDF />,
        className: "md:col-span-1",
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },




];
