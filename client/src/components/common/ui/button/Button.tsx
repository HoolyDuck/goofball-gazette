interface ButtonProps {
  text: string;
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button(props: ButtonProps) {
  return (
    <div className={props.className}>
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  );
}
