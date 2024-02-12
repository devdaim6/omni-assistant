"use client";
import { NavItems } from "@/components/ui/NavItems";
import { useSidebarStore } from "@/utils/store";
import { Button } from "@nextui-org/react";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
export function Nav() {
  const pathname = usePathname()
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  const { toggleSidebar } = useSidebarStore();
  return (
    <div className="relative  w-full">
      {pathname === "/chatmeh" && <Button
        type="button"
        variant="light"
        className="lg:hidden  top-5 text-xs text-white focus:outline-none"
        onClick={toggleSidebar}
      >
        ☰
      </Button>}
      <NavItems navItems={navItems} />
    </div>
  );
}
