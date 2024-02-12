import { cn } from '@/utils/cn';
import { useMessageStore, useSidebarStore } from '@/utils/store';
import { IconSend2 } from '@tabler/icons-react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { FC } from 'react';
import Input from '../ui/Input';

interface User {
  sub?: string;
  id?: string;
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}

const ChatMeh: FC = () => {
  const { data: session } = useSession();
  const { messages } = useMessageStore();
  const { isSidebarOpen } = useSidebarStore();

  return (
    <>
      <div className="flex flex-col h-[100vh]">
        <div className="flex-1 overflow-y-auto ">
          <div className="flex flex-col text-center">
            <div className="w-full max-w-screen mx-auto">
              <div className={cn({ 'hidden': isSidebarOpen }, "py-4 px-2 space-y-4 h-[85vh] overflow-y-auto")}>
                {!messages ? <p>No Messages Found</p> : messages?.map((message, index) => {
                  const isCurrentUser = message?.senderId === (session?.user as User)?.sub;
                  const hasSubProperty = (session?.user as User)?.sub !== undefined;
                  const hasNextMessageFromSameUser =
                    messages[index + 1]?.senderId === messages[index].senderId;
                  const imageSrc = isCurrentUser ? (hasSubProperty ? (session?.user as User)?.image : '') : '';
                  const positionClass = isCurrentUser ? 'flex-row-reverse' : 'flex-row';
                  return (
                    <div
                      key={index}
                      className={cn('flex', {
                        [positionClass]: true,
                      })}
                    >
                      <Image
                        alt="User"
                        referrerPolicy="no-referrer"
                        src={imageSrc || ''}
                        width={10}
                        height={10}
                        className={cn('rounded-full w-12 h-12 mt-auto border border-1', {
                          'mr-2': !isCurrentUser,
                          'ml-2': isCurrentUser,
                          'invisible': hasNextMessageFromSameUser,
                        })}
                      />
                      <div
                        className={cn('text-left rounded-lg p-4 text-sm max-w-[75%] text-gray-300 bg-gray-600 ', {
                          'rounded-br-none ': !hasNextMessageFromSameUser && isCurrentUser,
                          'rounded-bl-none': !hasNextMessageFromSameUser && !isCurrentUser,
                          'bg-indigo-600 text-white': message.senderId === (session?.user as User)?.sub,
                          'order-1 items-end': isCurrentUser,
                          'order-2 items-start': !isCurrentUser,

                        })}
                      >
                        {message.content}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bottom-0 p-2">
        <form className="flex flex-row space-y-4 sm:space-x-4 w-full">
          <div className="flex-1">
            <Input type="text" className="rounded-full p-3 border-0 w-full" placeholder="Type a message..." />
          </div>
          <button className="rounded-full pb-2 text-white cursor-pointer" type="submit">
            <IconSend2 />
          </button>
        </form>
      </div>
    </>
  );
};

export default ChatMeh;
