import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
    prepareHeaders: (headers, { getState }) => {
        const token = localStorage.getItem('access_token')
        if (token) {
            headers.set('Authorization', `Bearer ${token}`)
        }
        return headers
    }
})

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery,
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (credentials) => ({
                url: '/auth/register',
                method: 'POST',
                body: credentials
            })
        }),
        login: builder.mutation({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials
            })
        }),
        auth: builder.query<any, void>({
            query: () => ({
                url: '/auth/auth',
                method: 'GET',
            })
        })
    })
})
