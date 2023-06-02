import { useEffect, useState } from "react";
import "./BlogpostPage.css";
import { useLocation } from "react-router-dom";
import { blogPostApi } from "../../services/BlogpostService";

export function BlogpostPage() {
  const location = useLocation();
  const id = Number(location.pathname.split("/")[2]);
  const {
    data: blogpost,
    error,
    isLoading,
  } = blogPostApi.useFetchBlogPostByIdQuery(id);

  return (
    <div className="blogpost_page">
      <article className="blogpost_page__article">
        <h2 className="blogpost_page__title">{blogpost?.title}</h2>
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed4b3f80-9d5c-4364-915b-1441d624e9b9/dfbc65s-d40dfa02-3db7-4e78-b20a-e089c2496187.png/v1/fill/w_1280,h_732,q_80,strp/landscape___midjourney_by_artai_genasan_dfbc65s-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzMyIiwicGF0aCI6IlwvZlwvZWQ0YjNmODAtOWQ1Yy00MzY0LTkxNWItMTQ0MWQ2MjRlOWI5XC9kZmJjNjVzLWQ0MGRmYTAyLTNkYjctNGU3OC1iMjBhLWUwODljMjQ5NjE4Ny5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.uWkrYsung_xcbquMRajN2NhZQQbNBZon1XDcpLKXdWY"></img>
        <p className="blogpost_page__content">{blogpost?.content}</p>
      </article>
      <div className="blogpost_page__comments">
        {blogpost?.comments?.map((comment, key) => (
          <div
            className="blogpost_page__comment"
            key={key}
          >
            <h3 className="blogpost_page__comment__username">
              {comment.user.username}
            </h3>
            <p className="blogpost_page__comment__content">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
