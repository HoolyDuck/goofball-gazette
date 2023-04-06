import React from 'react';
import './BlogPost.css';

type BlogPostProps = {
    title: string;
    content: string;
    description: string;
}

export function BlogPost(props: BlogPostProps) {
    return (
        <div className="blogpost">
            <img src="https://i.pinimg.com/736x/8f/dc/3b/8fdc3b8300604ed2af0e86142dc47443.jpg"></img>
            <p className="blogpost__title">{props.title}</p>
            <span className='line'> </span>
            <p className="blogpost__content">{props.description}</p>
        </div>
    )
}