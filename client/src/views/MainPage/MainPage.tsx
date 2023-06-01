import { useEffect, useState } from "react";
import { BlogPost } from "../../components/blogpost/BlogPost";
import { $axiosInstance } from "../../http/axios";
import "./MainPage.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { blogPostApi } from "../../services/BlogpostService";

type BlogPost = {
  title: string;
  content: string;
  description: string;
};

export function MainPage() {
  const { data: posts, error, isLoading } = blogPostApi.useFetchBlogPostsQuery(3);

  return (
    <div className="mainpage">
      <div className="section__blogposts">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          posts.map((post: any, key: any) => (
            <BlogPost
              key={key}
              title={post.title}
              content={post.content}
              description={post.description}
            />
          ))
        )}
      </div>
    </div>
  );
}
