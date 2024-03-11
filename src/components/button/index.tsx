import styles from './styles.module.css';

interface Props{
    text?: string;
    color?: string
}
const Button = ({text, color}:Props) => {
  return (
    <div className={styles.mainContainer} style={{backgroundColor: color, borderColor: color}}>{text}</div>
  )
}

export default Button