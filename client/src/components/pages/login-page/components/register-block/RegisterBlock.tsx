import { Link } from 'react-router-dom';
import styles from './RegisterBlock.module.scss';

export default function RegisterBlock() {

    return (
        <div className={styles["register-block"]}>
            <span>Don't have an account? </span>
            <Link to="/register">Sign up</Link>
        </div>
    );
}