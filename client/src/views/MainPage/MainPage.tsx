import { useEffect, useState } from "react";
import { BlogPost } from "../../components/blogpost/BlogPost";
import { $axiosInstance } from "../../http/axios";
import "./MainPage.css";

type BlogPost = {
  title: string;
  content: string;
  description: string;
};

export function MainPage() {
  const [posts, setPosts] = useState([] as BlogPost[]);

  useEffect(() => {
    $axiosInstance.get("/blogposts").then((res) => {
      setPosts(() => res.data);
    });
  }, []);

  return (
    <div className="mainpage">
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
  );
}
