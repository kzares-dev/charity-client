import { PawsBackground } from "@/components/atoms/PawsBackground";
import { ReactNode } from "react";

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <>
            <PawsBackground />
            {children}
        </>
    );
}
