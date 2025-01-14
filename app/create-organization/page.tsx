'use client';

import { useToast } from '@/hooks/use-toast';
import dog_create_organization from '@/public/images/dog_create_organization.png'
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from "@/components/ui/input"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { z } from 'zod'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import BackToHome from '@/components/molecules/BackToHome';
import { Textarea } from '@/components/ui/textarea';
import { organizationRegisterAction } from '@/lib/actions/organization.action';

const formSchema = z.object({
    adminFullname: z.string().min(3, {
        message: "Your name must be at least 3 characters long"
    }),
    adminEmail: z.string().email({
        message: "You must introduce a valid email."
    }),
    adminPassword: z.string().min(6, {
        message: "Password must be at least 6 characters."
    }),
    organizationName: z.string().min(3, {
        message: "Your organization name must be at least 3 characters long"
    }),
    organizationDescription: z.string().min(40, {
        message: "Your organization name must be at least 40 characters long"
    }),
})

export default function CreateOrganization() {
    const router = useRouter();
    const [loader, setLoader] = useState(false);
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {


        setLoader(true);
        await organizationRegisterAction(values)
            .then(() => {
                router.push(`/verify-email?email${values.adminEmail}`)
            })
            .catch((error) => {
                toast({ title: 'ERROR: Authentication failed', description: error.message })
            })
    }

    return <section className="w-full bg-gray-100 min-h-screen flex pt-[20vh] px-2 pb-5 justify-center">
        <div className="w-full py-10 max-w-2xl h-fit bg-white border px-5 rounded-lg relative shadow">
            <div className="flex items-center justify-center w-full absolute -top-[7.5rem]">
                <Image className='-ml-9' width={200} src={dog_create_organization} alt='' />
            </div>
            <div className="w-full flex flex-col gap-5 ">
                <h1 className="text-4xl text-gray-600 font-semibold">  Create your organization </h1>
                <p className="text-sm text-gray-400 max-w-sm">Your organization must be aproved by the site administrator to proceed in our plattaform </p>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
                        <div className=" flex gap-4 flex-col lg:flex-row w-full justify-between">
                            <div className="w-full  flex flex-col gap-1">
                                <FormField
                                    control={form.control}
                                    name="organizationName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Organization Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="..." {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                This is your public display organization name
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="organizationDescription"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Organization Description</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="..."
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormDescription>
                                                We will use this description to approve or reject your registration
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="w-full  flex flex-col gap-1">
                                <FormField
                                    control={form.control}
                                    name="adminFullname"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Full Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="..." {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                This is your public display name.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="adminEmail"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email Address</FormLabel>
                                            <FormControl>
                                                <Input type='email' placeholder="..." {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="adminPassword"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input type='password' placeholder="..." {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                Your password will be protected in our servers
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                        </div>


                        <div className="w-full flex items-center justify-between">

                            <BackToHome />
                            <Button type="submit" disabled={loader}>
                                {loader && <Loader2 className="animate-spin" />}
                                Submit
                            </Button>

                        </div>

                    </form>
                </Form>
            </div>

        </div>

    </section >
}