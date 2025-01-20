import Link from "next/link"
import { Button } from "../ui/button"

export default function AuthButtons() {
    return (
        <div className="flex items-center gap-5">
            <Link href='/auth'>
                <Button variant='ghost' size='lg' className="text-xl px-5">
                    Login
                </Button>
            </Link>
            <Link href='/auth?user=new'>
                <Button className="text-xl px-5">
                    Register
                </Button>
            </Link>
        </div>
    )
}