import { Home } from "lucide-react";
import Link from "next/link";

export default function BackToHome() {
    return <Link href='/'>
        <div className="flex text-gray-500 items-center justify-center gap-1 px-4 py-2">
            <Home size={17} />
            <p className="text-gray-500 underline text-sm italic">Back to Home</p>
        </div>
    </Link>
}