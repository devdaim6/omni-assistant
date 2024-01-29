import { IconBrandGithub, IconBrandTwitter } from "@tabler/icons-react";
import { FC } from "react";

const Footer: FC = ({}) => {
  return (
    <>
      <footer className="footer footer-center p-4 text-white rounded-t-none rounded-lg">
        <aside>
          <div className="flex justify-between text-sm">
            <p className="flex gap-x-4">
              <a
                href="/privacy-policy"
                className="text-white/50 hover:underline hover:text-white/20 cursor-pointer"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-services"
                className="text-white/50 hover:underline hover:text-white/20 cursor-pointer"
              >
                Terms of Services
              </a>
            </p>
            <p className="hidden lg:flex gap-x-1">
              © 2024 - All right reserved by
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://devdaim.netlify.app"
                className="text-white/50 hover:underline hover:text-white/20"
              >
                DevDaim
              </a>
            </p>
            <p className="flex gap-x-4 ">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/devdaim6"
                className="hover:text-white/20"
              >
                <IconBrandGithub />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://x.com/dev_daim"
                className="hover:text-white/20"
              >
                <IconBrandTwitter />
              </a>
            </p>
          </div>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
