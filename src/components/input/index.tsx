import styles from './styles.module.css';
import { InputHTMLAttributes, ReactNode } from 'react';

interface Props {
    rightIcon?: ReactNode;
}
type InputProps = InputHTMLAttributes<HTMLInputElement> & Props;
const Input = ({type, rightIcon, ...otherProps}:InputProps) => {
    return (
        <div className={styles.mainContainer}>
            <input type={type} className={styles.input} {...otherProps} />
            <div className={styles.searchIcon}>
                {rightIcon}
            </div>
        </div>
    )
}

export default Input