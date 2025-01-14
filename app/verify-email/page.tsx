'use client';

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import cat_email_verification from '@/public/images/cat_email_verification.png'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
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
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import BackToHome from "@/components/molecules/BackToHome";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { verifyEmailAction } from "@/lib/actions/email.action";

const FormSchema = z.object({
    code: z.string().min(6, {
        message: "Your one-time password must be 6 characters.",
    }),
})

export default function VerifyEmail() {
    const searchParams = useSearchParams();
    const email = searchParams.get('email');
    const [loader, setLoader] = useState(false);
    const router = useRouter();
    const { toast } = useToast();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            code: "",
        },
    })

    async function onSubmit(values: z.infer<typeof FormSchema>) {
        setLoader(true);
        await verifyEmailAction(values.code, 'id')
            .then(() => {
                router.push('/admin')
                setLoader(false);
            })
            .catch((error) => {
                toast({ title: 'ERROR: Authentication failed', description: error.message })
            })
    }

    return (
        <div className="flex flex-col gap-6 bg-gray-50 items-center justify-center w-full min-h-screen">
            <h1 className=" text-4xl text-gray-600 max-w-sm flex flex-row gap-2 items-center">
                <Image width={38} src={cat_email_verification} alt="" />
                Verify your email
            </h1>
            <p className="w-full text-left max-w-sm text-gray-500">Please enter the one-time code sent to your email <span className="font-bold italic"> {email} </span>. </p>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="code"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <InputOTP {...field} pattern={REGEXP_ONLY_DIGITS_AND_CHARS} className="bg-white shadow" maxLength={9}>
                                        <InputOTPGroup>
                                            <InputOTPSlot className='w-10 md:w-[4.5rem] h-[3rem] bg-white' index={0} />
                                            <InputOTPSlot className='w-10 md:w-[4.5rem] h-[3rem] bg-white' index={1} />
                                            <InputOTPSlot className='w-10 md:w-[4.5rem] h-[3rem] bg-white' index={2} />
                                        </InputOTPGroup>
                                        <InputOTPSeparator />
                                        <InputOTPGroup>
                                            <InputOTPSlot className='w-10 md:w-[4.5rem] h-[3rem] bg-white' index={3} />
                                            <InputOTPSlot className='w-10 md:w-[4.5rem] h-[3rem] bg-white' index={4} />
                                            <InputOTPSlot className='w-10 md:w-[4.5rem] h-[3rem] bg-white' index={5} />
                                        </InputOTPGroup>

                                    </InputOTP>
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="w-full flex flex-row max-w-lg  items-center justify-between ">
                        <BackToHome />
                        <Button type="submit" disabled={loader}>
                            {loader && <Loader2 className="animate-spin" />}
                            Submit
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}
