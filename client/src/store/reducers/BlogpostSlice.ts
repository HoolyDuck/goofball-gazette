import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { $axiosInstance } from "../../http/axios";

export interface IBlogPost {
    id: number;
    title: string;
    content: string;
    description: string;
    comments: any[];
    user: any;
}

const initialState = {
    blogposts: [] as IBlogPost[],
    loading: false,
    error: '',
};

export const fetchBlogPosts = createAsyncThunk(
    "blogPosts/fetchBlogPosts",
    async () => {
        const response = await $axiosInstance.get("/blogposts");
        return response.data;
    }
);

const blogPostSlice = createSlice({
    name: "blogPosts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBlogPosts.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchBlogPosts.fulfilled, (state, action) => {
            state.blogposts = action.payload;
            state.loading = false;
            state.error = '';
        });
        builder.addCase(fetchBlogPosts.rejected, (state, action) => {
            state.error = action.error.message ?? '';
            state.loading = false;
            state.blogposts = [];
        });
    }
});

export default blogPostSlice.reducer;