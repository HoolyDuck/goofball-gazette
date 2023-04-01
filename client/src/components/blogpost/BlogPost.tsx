import React from 'react';
import './BlogPost.css';

type BlogPostProps = {
    title: string;
    content: string;
}

export function BlogPost(props: BlogPostProps) {
    return (
        <div className="blogpost">
            <p className="blogpost__title">{props.title}</p>
            <span className='line'> </span>
            <p className="blogpost__content">{props.content}</p>
        </div>
    )
}