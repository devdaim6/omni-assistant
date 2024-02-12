import { useSidebarStore } from '@/utils/store';
import { IconMessage2 } from '@tabler/icons-react';
import Link from 'next/link';
import { FC } from 'react';

interface ChatLinksProps {
    link: string;
    chatName: string
}

const ChatLinks: FC<ChatLinksProps> = ({ link, chatName }) => {
    const { toggleSidebar } = useSidebarStore()
    return <>
        <nav className="grid items-start px-4 text-sm font-medium overflow-x-hidden overflow-y-hidden">
            <Link
                prefetch
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href={link}
                onClick={toggleSidebar}
            >
                <IconMessage2 className="h-4 w-4" />
                {chatName}
            </Link>

        </nav>
    </>
}

export default ChatLinks