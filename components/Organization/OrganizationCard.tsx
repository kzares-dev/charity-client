import { PawPrint, Pin, Users } from "lucide-react";
import home_banner from '@/public/images/home_banner.jpg'
import Image from "next/image";
import { Button } from "../ui/button";

export default function OrganizationCard() {
    return <div className="mt-[5rem] pt-[5rem] relative max-w-sm overflow-visible bg-white shadow border flex flex-col gap-2 px-2 py-5 rounded-md">
        <div className=" absolute  -top-[5rem] left-0 right-0 flex items-center justify-center z-10">
            <Image src={home_banner} alt='' className="w-[10rem] h-[10rem] object-cover rounded-full border " />
        </div>
        <span className="text-lg font-semibold text-gray-500">Organization Name</span>

        <div className="flex flex-row items-center justify-between">
            <p className="flex text-sm items-center flex-row  gap-1 "><Users size={14} /> <span className="font-semibold italic">1234</span>   </p>
            <p className="flex text-sm items-center flex-row gap-1  "><PawPrint size={14} /> <span className="font-semibold italic">1234</span>   </p>
        </div>

        <div className="flex space-x-1 flex-row my-2" >
            <Pin className="mt-1" size={20} />
            <p className="text-sm">
                <span className="font-semibold italic text-sm">Location:</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, sit?
            </p>
        </div>

        <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat accusamus optio iste, eos quo earum consequuntur tempora. Accusamus, tempore similique.</p>

        <div className="w-full flex flex-row justify-between mt-4">
            <Button variant='outline'> Join Organization </Button>
            <Button> Visit Organization </Button>
        </div>
    </div>
}