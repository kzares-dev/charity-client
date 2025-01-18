import OrganizationContainer from "@/components/molecules/OrganizationContainer";

export default function Organizations() {
    return <main className="w-full bg-gray-50 max-w-[1200px] mx-auto min-h-screen px-4 py-20 space-y-20">
        <div className="flex flex-col gap-2 max-w-md">
            <h1 className="text-xl md:text-3xl text-gray-600 font-bold">Animal Organizations</h1>
            <p className="text-sm text-gray-400">Choose an organization near to you and start browsing into the pets!</p>
        </div>

        <OrganizationContainer />

        <div className="flex flex-col gap-1 max-w-md">
            <p className="text-sm text-gray-400"> Organizations you are member of</p>
            <h1 className="text-xl md:text-3xl text-gray-600 font-bold">Your Organizations</h1>
        </div>

        <OrganizationContainer />

    </main>
}