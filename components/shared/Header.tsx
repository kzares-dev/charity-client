"use client"
import React from 'react'
import { Button } from '../ui/button'
import { Menu, User } from 'lucide-react'
import { Minus, Plus } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer } from "recharts"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

function Header() {
    return (
        <div className='w-full border py-8 px-4 md:px-10 flex items-center justify-center  bg-white'>
            <div className="w-full max-w-[1200px] flex items-center justify-between">
                <div>
                    <h4 className='text-2xl font-semibold text-gray-600'>Pet Match</h4>
                </div>

                <div className='flex items-center gap-2'>

                    <Button size='icon' variant='outline'>
                        <Menu />
                    </Button>


                    <Button size='icon' variant='outline'>
                        <User />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Header