import React from "react";
import "./BlogPost.css";
import { Link } from "react-router-dom";

type BlogPostProps = {
  id: number;
  title: string;
  content: string;
  description: string;
};

export function BlogPost(props: BlogPostProps) {
  return (
    <div className="blogpost">
      <Link className="blogpost__title" to={`/blogpost/${props.id}`}>{props.title}</Link>
      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed4b3f80-9d5c-4364-915b-1441d624e9b9/dfbc65s-d40dfa02-3db7-4e78-b20a-e089c2496187.png/v1/fill/w_1280,h_732,q_80,strp/landscape___midjourney_by_artai_genasan_dfbc65s-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzMyIiwicGF0aCI6IlwvZlwvZWQ0YjNmODAtOWQ1Yy00MzY0LTkxNWItMTQ0MWQ2MjRlOWI5XC9kZmJjNjVzLWQ0MGRmYTAyLTNkYjctNGU3OC1iMjBhLWUwODljMjQ5NjE4Ny5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.uWkrYsung_xcbquMRajN2NhZQQbNBZon1XDcpLKXdWY"></img>
      <span className="line"> </span>
      <p className="blogpost__content">{props.description}</p>
    </div>
  );
}
