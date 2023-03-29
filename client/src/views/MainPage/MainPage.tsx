import { useEffect, useState } from "react";
import { BlogPost } from "../../components/blogpost/BlogPost";
import { $axiosInstance } from "../../http/axios";

type BlogPost = {
    title: string;
    content: string;
}

export function MainPage() {
  const [posts, setPosts] = useState([] as BlogPost[]);

  useEffect(() => {
    $axiosInstance.get("/blogposts").then((res) => {
      setPosts(() => res.data);
    });
  }, []);

  return (
    <div className="mainpage">
      {posts.map((post) => {
        return (
          <BlogPost
            title={post.title}
            content={post.content}
          />
        );
      })}
    </div>
  );
}
