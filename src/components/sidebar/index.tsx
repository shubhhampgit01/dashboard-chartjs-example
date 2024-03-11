import styles from './styles.module.css';
import Text from '../text';
import { Colors } from '../../constant/color';
import { GoHome } from 'react-icons/go';
import { MdOutlineMail } from 'react-icons/md';
import { RiContactsLine } from 'react-icons/ri';
import { PiCurrencyCircleDollar } from 'react-icons/pi';
import { IoDocumentOutline } from 'react-icons/io5';
import { CiWallet } from 'react-icons/ci';
import { FaArrowLeft, FaRegCalendarAlt, FaRegFolder } from 'react-icons/fa';
import { LuPencil } from 'react-icons/lu';

interface SidebarProps{
    isBackClick?: boolean;
    setisBackClick?: React.Dispatch<React.SetStateAction<boolean>>;
  }
const Sidebar = ({isBackClick, setisBackClick=()=>{}}:SidebarProps) => {
    return (
        <div className={styles.sidebarMainContainer} style={isBackClick?{transform:"translateX(-192px)"}:{}}>
            <div className={styles.logoContainer}>
                <Text fontSize={28} fontWeight={700}>Geex</Text>
                <Text fontSize={12} fontWeight={500} color={Colors.nobel}>Modern Admin Dashboard</Text>
            </div>
            <div className={styles.backIcon} onClick={()=>setisBackClick(true)}><FaArrowLeft color={Colors.chart_purple} /></div>
            <div className={styles.menuContainer}>
                <div className={`${styles.navItemContainer} ${styles.active}`}>
                    <GoHome color={Colors.lavender} />
                    <Text fontWeight={500} color={Colors.lavender}>Dashboard</Text>
                </div>
                <div className={styles.navItemContainer}>
                    <MdOutlineMail />
                    <Text fontWeight={500}>Email</Text>
                </div>
                <div className={styles.navItemContainer}>
                    <RiContactsLine />
                    <Text fontWeight={500}>Contacts</Text>
                </div>
                <div className={styles.navItemContainer}>
                    <PiCurrencyCircleDollar />
                    <Text fontWeight={500}>Crypto</Text>
                </div>
                <div className={styles.navItemContainer}>
                    <IoDocumentOutline />
                    <Text fontWeight={500}>Invoicing</Text>
                </div>
                <div className={styles.navItemContainer}>
                    <CiWallet />
                    <Text fontWeight={500}>Banking</Text>
                </div>
                <div className={styles.navItemContainer}>
                    <FaRegFolder />
                    <Text fontWeight={500}>File Manager</Text>
                </div>
                <div className={styles.navItemContainer}>
                    <FaRegCalendarAlt />
                    <Text fontWeight={500}>Calendar</Text>
                </div>
                <div className={styles.navItemContainer}>
                    <LuPencil />
                    <Text fontWeight={500}>Todo List</Text>
                </div>
            </div>
        </div>
    )
}

export default Sidebar