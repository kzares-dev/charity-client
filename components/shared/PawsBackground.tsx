import { LucidePawPrint, PawPrint, PawPrintIcon } from "lucide-react";

export function PawsBackground() {
    return <div className="-z-10 bg-gray-50 fixed inset-0">
        <LucidePawPrint className="absolute top-1/4 left-[10%] opacity-40" size={40} />
        <LucidePawPrint className="absolute top-[4vh] right-[10%] opacity-40" size={40} />

        <LucidePawPrint className="absolute top-1/2 left-1/2 opacity-20" size={40} />
        <LucidePawPrint className="absolute top-1/2 left-1/3 opacity-20" size={40} />
        <LucidePawPrint className="absolute top-1/3 right-1/2 opacity-20" size={40} />

        <LucidePawPrint className="absolute bottom-1/4 left-[20%] opacity-20" size={40} />
        <LucidePawPrint className="absolute bottom-1/4 right-[10%] opacity-20" size={40} />
    </div>
}