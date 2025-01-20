import OrganizationList from "@/components/Organization/OrganizationList";

export default function () {
    return <main className="w-full min-h-screen px-4 space-y-20">
        <div className="flex flex-col gap-2 max-w-md">
            <h1 className="text-xl md:text-3xl text-gray-600 font-bold">Animal Organizations</h1>
            <p className="text-sm text-gray-400">Choose an organization near to you and start browsing into the pets!</p>
        </div>

        <OrganizationList />

        <div className="flex flex-col gap-1 max-w-md">
            <p className="text-sm text-gray-400"> Organizations you are member of</p>
            <h1 className="text-xl md:text-3xl text-gray-600 font-bold">Your Organizations</h1>
        </div>

        <OrganizationList />

    </main>
}