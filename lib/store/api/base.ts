import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const charityApi = createApi({
    reducerPath: 'charityApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.SERVER_URL || 'http://localhost:3000' }),
    endpoints: (builder) => ({

    }),
})