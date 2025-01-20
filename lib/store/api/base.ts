import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Organization } from './types';


const baseQueryWithAuth = fetchBaseQuery({
    baseUrl: process.env.SERVER_URL || 'http://localhost:3001',
    prepareHeaders: (headers, { getState }) => {
        // @ts-ignore
        const token = getState().auth.token;

        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }

        return headers;
    },
});

export const charityApi = createApi({
    reducerPath: 'charityApi',
    baseQuery: baseQueryWithAuth,
    endpoints: (build) => ({
        getOrganizations: build.query<Organization[], null>({
            query: () => ({ url: '/organizations' }),
            transformResponse: (response: { data: Organization[] }, meta, arg) => response.data,
        }),
    })

})

export const { useGetOrganizationsQuery, } = charityApi;