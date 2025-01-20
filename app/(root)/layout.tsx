import { PawsBackground } from "@/components/shared/PawsBackground";
import Header from "@/components/shared/Header";
import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <div>
            <Header />
            <section className="max-w-[1200px] mx-auto pt-10">
                <PawsBackground />
                {children}
            </section>
        </div>

    );
}
