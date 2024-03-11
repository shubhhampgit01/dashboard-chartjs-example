import Button from '../button';
import Text from '../text';
import styles from './styles.module.css';

interface Props {
    logo?: string;
    name?: string;
    link?: string;
    btnText?: string;
    btnColor?: string
}
const RecentProblems = ({ logo, name, link, btnText, btnColor }: Props) => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={logo} alt="" className={styles.img} />
                </div>
                <div className={styles.content}>
                    <Text fontSize={16} fontWeight={600}>{name}</Text>
                    <Text fontSize={12} fontWeight={500}>{link}</Text>
                </div>
            </div>
            <div className={styles.button}>
                <Button text={btnText} color={btnColor} />
            </div>
        </div>
    )
}

export default RecentProblems