import { create } from "zustand";

interface Conversation {
  id: string;
  messages: Message[];
  link: string;
  chatName: string;
  createdAt: Date;
  participants: ConversationToUser[];
}

interface ConversationToUser {
  conversationId: string;
  userId: string;
}

interface Message {
  id: string;
  content: string;
  createdAt: Date;
  conversationId: string;
  senderId: string;
}
interface SidebarStore {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}
interface ConversationStore {
  conversations: Conversation[];
  addConversation: (newConversation: Conversation) => void;
}
interface MessageStore {
  messages: Message[];
  addMessage: (newMessage: Message) => void;
}

const useConversationStore = create<ConversationStore>((set) => ({
  conversations: [],
  addConversation: (newConversation) =>
    set((state) => ({
      conversations: [...state.conversations, newConversation],
    })),
}));

const useMessageStore = create<MessageStore>((set) => ({
  messages: [],
  addMessage: (newMessage) =>
    set((state) => ({
      messages: [...state.messages, newMessage],
    })),
}));

const useSidebarStore = create<SidebarStore>((set) => ({
  isSidebarOpen: false,
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));

export { useConversationStore, useMessageStore, useSidebarStore };
