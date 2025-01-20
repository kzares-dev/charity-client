"use client"
import Image from "next/image";
import cat_auth from "@/public/images/cat_user_auth.png"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useSearchParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link";
import { userLoginAction, userRegisterAction } from "@/lib/actions/user.action";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import BackToHome from "@/components/shared/BackToHome";

const formSchema = z.object({
    fullname: z.string().optional(),
    email: z.string().email({
        message: "You must introduce a valid email."
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters."
    })
})

export default function UserAuth() {
    const searchParams = useSearchParams();
    const user = searchParams.get('user');
    const router = useRouter();
    const [loader, setLoader] = useState(false);
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullname: "",
            email: "",
            password: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        // This edge case is not contemplated in the zod validations
        if (user && !values.fullname) {
            toast({
                title: "ERROR: Full Name is Empty",
            })
            return;
        }
        const authAction = user ? userRegisterAction : userLoginAction;

        setLoader(true);
        await authAction(values)
            .then(() => {
                if (user) router.push(`/auth/verify-email?email=${values.email}`)
                else router.push('/organizations')

                setLoader(false);
            })
            .catch((error) => {
                toast({ title: 'ERROR: Authentication failed', description: error.message })
            })
    }

    return <div className="w-full max-w-[1200px] mx-auto min-h-screen flex flex-col lg:flex-row gap-5 px-5 justify-between items-center pb-5">
        <div className="w-full ">
            <Image src={cat_auth} alt='' />
        </div>

        <div className="w-full flex flex-col gap-5 ">
            <h1 className="text-4xl text-gray-600 font-semibold"> {user ? "Create Account" : "Log In"} </h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-md">
                    {user && <FormField
                        control={form.control}
                        name="fullname"
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
                    />}

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="..." {...field} />
                                </FormControl>
                                <FormDescription>
                                    Your password will be protected in our servers
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="w-full flex items-center justify-between">
                        <Link href={user ? '/auth' : '/auth?user=new'}>
                            <p className="text-gray-500 underline pl-0"> {user ?
                                "Have an account? Login now" :
                                "Create an account"} </p>
                        </Link>
                        <Button type="submit" disabled={loader}>
                            {loader && <Loader2 className="animate-spin" />}
                            Submit
                        </Button>
                    </div>
                </form>
            </Form>
            <div className="md:absolute bottom-3 right-3">
                <BackToHome />
            </div>
        </div>
    </div>
}