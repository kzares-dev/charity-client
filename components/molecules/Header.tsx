import { Button } from "../ui/button";
import AuthButtons from "./AuthButtons";

export default function Header() {
    return <div className="absolute z-10 right-0 left-0 top-0 bg-transparent flex justify-between items-center px-5 py-10">
        <div></div>

        <AuthButtons />
    </div>
}