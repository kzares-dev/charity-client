import home_banner from '@/public/images/home_banner.jpg'
import Image from 'next/image'
import { Button } from '../ui/button'

function AnimalCard() {
  return (
    <div className="h-[400px] relative max-w-sm overflow-visible bg-white shadow border flex flex-col gap-2  rounded-md">
      <Image className='h-full w-full object-cover' src={home_banner} alt='' />

      <div className="absolute p-4 flex flex-col justify-between inset-0 bg-white rounded-md opacity-0 hover:opacity-100 z-1 transition-all rounded-t-lg">
        <div className="flex flex-1 flex-col gap-4">
          <h1 className='text-2xl font-semibold text-gray-600'>Pet Name</h1>
          <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore suscipit perferendis quia dolor deserunt accusantium quis voluptates magni ipsam ex.</p>
          <p>Species: <span className='font-semibold'>Dog</span> </p>
        </div>

        <Button className='py-6'>
          See More
        </Button>
      </div>
    </div>
  )
}

export default AnimalCard