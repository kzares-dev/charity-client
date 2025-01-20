import OrganizationPets from '@/components/Organization/PetList'
import { Button } from '@/components/ui/button'
import home_banner from '@/public/images/home_banner.jpg'
import { Cat, Dog, Eye, Heart, Mail, MessageSquare, PinIcon, PlusIcon, Users } from 'lucide-react'
import Image from 'next/image'
export default function Organization() {

    return <div className='min-h-[100vh] w-full pt-[25rem]'>
        <div className="absolute left-0 right-0 top-[6rem]">
            <Image src={home_banner} alt='' className='h-[400px] object-cover' />

            <div className="absolute top-0 left-0 right-0 z-20">
                <div className="w-full max-w-[1200px] mx-auto mt-[15rem] rounded bg-gray-50  p-10 flex flex-row gap-10 items-center justify-between">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col items-center md:flex-row gap-4">
                            <Image src={home_banner} alt='' className="w-[4rem] h-[4rem] object-cover rounded-full border " />
                            <h1 className="text-3xl md:text-6xl text-gray-600 font-bold">Animal Care</h1>
                        </div>

                        <p className='text-semibold text-gray-500 max-w-lg'>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolore non accusantium quae iusto, accusamus vitae consectetur nulla sapiente quas?</p>

                    </div>


                    <div className="flex flex-row gap-2 items-center">
                        <Button size='icon' className='py-6 px-6' variant='outline'> <Heart fill='#FF0000' color='#FF0000' /> </Button>
                        <Button className='text-lg py-6' variant='outline' size='lg'><PlusIcon /> Join Organiation</Button>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full max-w-[1200px] mx-auto pt-20 flex flex-col gap-10 pb-10">


            <div className="flex flex-col md:flex-row gap-10 w-full rounded">
                <div className="flex-1 border rounded-md p-5 bg-white">
                    <h2 className='font-semibold text-gray-400 text-xl mb-4 border-b pb-4'>Organization Status</h2>
                    <ul className='grid grid-cols-2 text-gray-500 gap-2 text-lg font-semibold'>
                        <li className='flex flex-row gap-2 items-center'><Dog size={20} /> Saved Animals: <span className='text-gray-800'>1294</span></li>
                        <li className='flex flex-row gap-2 items-center'><Cat size={20} /> On adoption: <span className='text-gray-800'>39</span></li>
                        <li className='flex flex-row gap-2 items-center'><Users size={20} /> Total Members: <span className='text-gray-800'>3202</span></li>
                        <li className='flex flex-row gap-2 items-center'> <MessageSquare size={20} /> Total Reviews: <span className='text-gray-800'>39</span></li>
                        <li className='flex flex-row gap-2 items-center'> <Heart size={20} /> Total Likes: <span className='text-gray-800'>9393</span> </li>
                    </ul>
                </div>

                <div className="flex-1 border rounded-md p-5 bg-white">
                    <h2 className='font-semibold text-gray-400 text-xl mb-4 border-b pb-4'>Contact</h2>
                    <ul className='flex flex-col text-gray-500 gap-2 text-lg font-semibold'>
                        <li className='flex flex-row gap-2'><PinIcon size={30} /> Location: <span className='text-gray-600 text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repellendus numquam est dolorum.</span></li>
                        <li className='flex flex-row gap-2 items-center'><Mail size={20} /> Email: <span className='text-gray-600 text-md'>example@gmail.com</span></li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-row items-center w-full justify-between">
                <h2 className='text-4xl font-semibold text-gray-500'> On Adoption</h2>
                <Button className='text-xl p-5 '> <Eye /> See All</Button>
            </div>

            <OrganizationPets />
        </div>
    </div>
}