"use client"
import { useConversationStore, useSidebarStore } from '@/utils/store'
import { IconMessage2Plus } from '@tabler/icons-react'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { FC, useCallback, useEffect } from 'react'
import Button from '../ui/Button'
import ChatLinks from './ChatLinks'



const Sidebar: FC = ({ }) => {
    const { isSidebarOpen, toggleSidebar } = useSidebarStore();
    const { data: session, status } = useSession();

    const conversations = useConversationStore((state) => state.conversations);
    const addConversation = useConversationStore((state) => state.addConversation);
    const fetchConversations = useCallback(async () => {
        try {
            if (session?.user?.sub) {
                const { data } = await axios.get(`/api/chatmeh/conversations/${session.user.sub}`);

                console.log(data);
            }
        } catch (error) {
            console.error('Error fetching conversations:', error);
        }
    }, [status])



    useEffect(() => {
        fetchConversations();
    }, [fetchConversations])
    return (
        (<>

            <aside className={`transition-all duration-300 ease-in-out sm:w-64 max-h-[100vh] overflow-y-auto lg:w-72 lg:border-r lg:border-slate-700 `}>
                <div className="flex flex-col w-full max-w-sm  min-h-screen ">

                    <div className={`items-center h-14 px-4 gap-2 ${isSidebarOpen ? 'flex' : 'hidden'} lg:flex`}>
                        <div className="flex gap-2 items-center">
                            <img
                                alt="user"
                                className="rounded-full border border-1"
                                height="32"
                                src={session?.user?.image || ""}
                                style={{
                                    aspectRatio: "32/32",
                                    objectFit: "cover",
                                }}
                                width="32"
                            />
                            <div className="flex flex-col leading-none">
                                <span className="text-sm font-semibold text-white">{session?.user?.name}</span>
                                <span className="text-xs text-gray-500 dark:text-gray-400">{session?.user?.email}</span>
                            </div>
                        </div>
                        <Button type='button' className="text-xs" size='sm' variant="bordered" >
                            <IconMessage2Plus className="w-4 h-4" color='white' />
                        </Button>
                    </div>

                    <section className={`flex-1 overflow-y-hidden  flex-col gap-4 overflow-x-hidden py-2 ${isSidebarOpen ? 'flex ' : 'hidden'} lg:flex `}>

                        {conversations && conversations?.map((chat) => (
                            <ChatLinks key={chat?.id} link={chat?.link} chatName={chat?.chatName} />
                        ))}
                    </section>
                </div>
            </aside>
        </>
        )
    )
}

export default Sidebar