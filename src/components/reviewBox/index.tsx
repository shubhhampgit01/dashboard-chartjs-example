import styles from './styles.module.css';
import avatar from '../../assets/avatar.png';
import Text from '../text';
import { Colors } from '../../constant/color';
import { FaArrowRight } from 'react-icons/fa';

interface ReviewBoxProps {
    type?: 'request' | 'published';
    name?: string;
    time?: string;
    review?: string;
}
const ReviewBox = ({ type = 'request', name, time, review }: ReviewBoxProps) => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.headerContainer}>
                <img src={avatar} alt="" className={styles.avatar} />
                <div className={styles.header}>
                    <Text fontWeight={600}>{name}</Text>
                    <Text fontSize={12} fontWeight={500} color={Colors.scarpa_flow}>{time}</Text>
                </div>
            </div>
            <div className={styles.review}>
                <Text fontSize={12} fontWeight={600}>{review}</Text>
            </div>
            {type === 'request' ? <div className={styles.bottomContainer} style={{ gap: '15px' }}>
                <Text fontSize={12} fontWeight={600} color={Colors.chart_red}>Archive</Text>
                <Text fontSize={12} fontWeight={600} color={Colors.chart_green}>Accept</Text>
            </div> :
                <div className={styles.bottomContainer} style={{ gap: '7px' }}>
                    <Text fontSize={12} fontWeight={600} color={Colors.chart_green}>Published</Text>
                    <FaArrowRight color={Colors.chart_purple} />
                </div>}
        </div>
    )
}

export default ReviewBox