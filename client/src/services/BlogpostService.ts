import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const blogPostApi = createApi({
    reducerPath: 'blogPostApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    endpoints: (builder) => ({
        fetchBlogPosts: builder.query({
            query: () => '/blogposts',
        }),
        fetchBlogPostById: builder.query({
            query: (id) => `/blogposts/${id}`,
        }),
    }),
});

