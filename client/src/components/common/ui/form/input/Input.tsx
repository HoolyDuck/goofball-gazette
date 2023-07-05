import styles from './Input.module.scss';


interface InputProps {
    label: string;
    type: string;
    placeholder: string;
    className: string;
    onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export default function Input(props: InputProps) {

    return (
        <div className={props.className}>
            {props.label && <label>{props.label}</label>}
            <div className={styles["input__wrapper"]}>
                <input
                    onInput={props.onInput}
                    type={props.type}
                    placeholder={props.placeholder}
                />
            </div>
        </div>
    );

}
