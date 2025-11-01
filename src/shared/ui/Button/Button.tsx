import styles from './styles.module.css'
import type { ButtonProps } from './types';

export const Button = ({textButton, onClick}: ButtonProps) => {
    return (
        <button type="button" className={styles.button} onClick={onClick}>{textButton}</button>
    )
};