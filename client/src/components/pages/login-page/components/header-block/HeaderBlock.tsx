interface HeaderBlockProps {
  title: string;
  className?: string;
}

export default function HeaderBlock(props: HeaderBlockProps) {
  return <h1 className={props.className}>
    {props.title}
  </h1>;
}
