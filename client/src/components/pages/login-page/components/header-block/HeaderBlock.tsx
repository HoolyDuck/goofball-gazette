import styles from './HeaderBlock.module.scss';

interface HeaderBlockProps {
  title: string;
  className?: string;
}

export default function HeaderBlock(props: HeaderBlockProps) {
  return <h1 className={styles["header-block"]}>
    {props.title}
  </h1>;
}
