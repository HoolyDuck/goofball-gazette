import { useEffect, useState } from "react";
import { BlogPost } from "../../components/blogpost/BlogPost";
import "./MainPage.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { blogPostApi } from "../../services/BlogpostService";

type BlogPost = {
  title: string;
  content: string;
  description: string;
};

export function MainPage() {
  const { data: posts, error, isLoading } = blogPostApi.useFetchBlogPostsQuery();

  return (
    <div className="mainpage">
      <div className="section__blogposts">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          posts?.map((post: any, key: any) => (
            <BlogPost
              key={key}
              id={post.id}
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
