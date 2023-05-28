import { useEffect, useState } from "react";
import { BlogPost } from "../../components/blogpost/BlogPost";
import { $axiosInstance } from "../../http/axios";
import "./MainPage.css";
import { fetchBlogPosts } from "../../store/reducers/BlogPostSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";


type BlogPost = {
  title: string;
  content: string;
  description: string;
};

export function MainPage() {
  const posts = useAppSelector((state) => state.blogpostReducer.blogposts );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchBlogPosts());
  }, []);

  return (
    <div className="mainpage">
      <div className="section__blogposts">
      {posts.map((post, key) => {
        return (
          <BlogPost
            key={key}
            title={post.title}
            content={post.content}
            description={post.description}
          />
        );
      })}
      </div>
    </div>
  );
}
