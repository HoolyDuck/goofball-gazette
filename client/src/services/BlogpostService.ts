import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

type BlogPost = {
    id: number;
    title: string;
    content: string;
    descrtiption: string;
}

export const blogPostApi = createApi({
    reducerPath: 'blogPostApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    endpoints: (builder) => ({
        fetchBlogPosts: builder.query<BlogPost[], void>({
            query: () => '/blogposts',
        }),
        fetchBlogPostById: builder.query<BlogPost, number>({
            query: (id) => `/blogposts/${id}`,
        }),
    }),
});

