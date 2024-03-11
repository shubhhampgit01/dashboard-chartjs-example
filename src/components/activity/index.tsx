import { Colors } from '../../constant/color';
import Text from '../text';
import styles from './styles.module.css';

interface Props{
    time?: string;
    activity?: string;
}
interface ActivityProps {
    data?: Props[];
}
const Activity = ({ data }:ActivityProps) => {
  return (
    <div className={styles.mainContainer}>
       {data?.map((v,i)=>( <div className={styles.container}>
            <div className={styles.lineContainer}>
                <div className={styles.circleContainer}>
                    <div className={styles.circle} />
                </div>
                {i!==data.length-1 && <div className={styles.line}/>}
            </div>
            <div className={styles.textContainer}>
                <Text fontWeight={600}>{v.time}</Text>
                <Text fontSize={12} fontWeight={500} color={Colors.scarpa_flow}>{v.activity}</Text>
            </div>
        </div>))}
    </div>
  )
}

export default Activity