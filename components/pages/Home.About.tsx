import { Eye, Landmark, PawPrint } from 'lucide-react';
import about_banner from '@/public/images/about_banner.jpg'
import Image from 'next/image';

const cardInfo = [
    {
        title: "Animal Organizations",
        description: "We have a collection of animal organizations where you can find your new friend.",
        Icon: Landmark,
    },
    {
        title: "Pet Adoption",
        description: "Get a new companion who needs your help.",
        Icon: PawPrint,
    },
    {
        title: "Adoption Tracking",
        description: "We ensure that all out pets are in the right hands.",
        Icon: Eye,
    },
];


const About = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row gap-4 justify-center md:max-w-[1200px] mx-auto">
                {cardInfo.map(({ title, description, Icon }) => (
                    <div
                        className="border shadow-sm rounded-lg p-4 flex flex-col gap-3  text-center sm:text-left w-full mx-auto max-w-md lg:max-w-sm"
                        key={title}
                    >
                        <div className="flex flex-col items-center lg:items-start gap-2">
                            <Icon width={30} height={30} />
                            <h2 className="font-bold text-xl text-black/70">{title}</h2>

                        </div>
                        <div className="flex flex-col gap-2 mt-2 sm:mt-0">
                            <div className='border-b' />
                            <p className="text-center lg:text-left text-gray-500">{description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-20 flex items-center flex-col md:flex-row max-w-[1200px] mx-auto">
                <div className="w-full flex-1">
                    <Image
                        src={about_banner}
                        className="object-cover w-full h-auto"
                        alt=""
                    />
                </div>
                <div className="w-full flex-1">
                    <h2 className="text-yellow-600 font-bold text-xl">
                        About us
                    </h2>
                    <h3 className="text-4xl font-bold">
                        The Best for Your Pet!
                    </h3>
                    <p className="py-5 text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    <p className="text-gray-500">
                        Eam ad sale persius, id vis iudicabit cor rumpit. Usu ad modo illum assum.
                    </p>
            
                </div>
            </div>


        </div>
    )
}

export default About