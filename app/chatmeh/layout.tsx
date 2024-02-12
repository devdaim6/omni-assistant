import Sidebar from "@/components/Chat/Sidebar";


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="flex mt-4">
            <div className="lg:w-70">
                <Sidebar />
            </div>
            <div className="flex-1">
                {children}
            </div>
        </section>
    );
}
