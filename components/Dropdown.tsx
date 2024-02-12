import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from "@nextui-org/react";
import { IconLogout2 } from "@tabler/icons-react";
import Link from "next/link";
import { FC } from "react";

interface DropdownProps {
  user:
  | {
    image: string | undefined;
    name: string;
    email: string;

  }
  | undefined;
}

export const UserDropdown: FC<DropdownProps> = ({ user }) => {
  return (
    <>
      {" "}
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            src={user?.image}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-bold">{user?.name}</p>
          </DropdownItem>
          <DropdownItem key="analytics">Analytics</DropdownItem>
          <DropdownItem key="logout" color="danger">
            <Link
              className="text-red-500 flex gap-2"
              href={"/api/auth/signout"}
            >
              Log Out
              <IconLogout2 />
            </Link>{" "}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};
