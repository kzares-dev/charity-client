import pet_adoption_1 from '@/public/images/pet-adoption-1.jpg'
import pet_adoption_2 from '@/public/images/pet-adoption-2.jpg'
import pet_adoption_3 from '@/public/images/pet-adoption-3.jpg'
import Image from 'next/image'

const cardContent = [
    {
        title: "Find an organization close to you.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        image: pet_adoption_1
    },
    {
        title: "Choose a pet you would like to adopt.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        image: pet_adoption_2
    },
    {
        title: "Keep track of the pet status for a while.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        image: pet_adoption_3
    },
]
function Process() {
    return (
        <div className='flex w-full flex-col items-center justify-center border-t py-10 mt-5 bg-gray-50'>
            <div className="flex items-center flex-col gap-4">
                <h1 className='text-2xl font-bold text-yellow-500'>How we Work</h1>
                <h2 className='text-4xl md:text-5xl text-black/80'>Pet Adoption Process</h2>
            </div>

            <div className="flex flex-col gap-5 justify-between items-center md:flex-row max-w-[1200px] my-20 mx-auto w-full">
                {cardContent.map((content) => (
                    <div key={content.title} className='flex max-w-xs items-center flex-col gap-5'>   
                        <Image objectFit='cover' src={content.image} alt='' className='w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full'  />

                        <h3 className='text-xl font-bold text-slate-800'> {content.title} </h3>

                        <p className='text-center text-sm text-slate-500 font-semibold'> {content.description} </p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Process