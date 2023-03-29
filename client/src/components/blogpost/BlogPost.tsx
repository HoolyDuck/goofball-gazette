type BlogPostProps = {
    title: string;
    content: string;
}

export function BlogPost(props: BlogPostProps) {
    return (
        <div className="blogpost">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
}