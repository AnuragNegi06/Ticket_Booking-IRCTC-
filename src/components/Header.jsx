import { FaHome, FaBell, FaQuestion , FaTrain  } from "react-icons/fa";
import styles from "./header.module.css"

export default function Header(){

    const currentDate = new Date();
    const user = [ {"name": "Anurag" , "age": 24},  {"name":"Joe", "age": 20}]

return (
    <nav className={styles.navBar}>
        <div className={styles.navLeft}>
                <FaTrain className={styles.trainLogo} />
                
                <h1>TicketHub</h1>
        </div>    
        <div className={styles.navRight}>
            <FaHome className = {styles.home}/>
            <p>Booking</p>
            <p>Contact Us</p>
            <p>{currentDate.toLocaleDateString()}</p>
            <p>[{currentDate.toLocaleTimeString()}]</p>
            <FaBell className = {styles.notify}/>
            <FaQuestion className =  {styles.question} />

            {user?
            <div className={styles.login}>
                <button type="submit">Login</button> 
                <p>Welcome {user[0].name}</p>
            </div>
            : 
            <div className={styles.register}>
                <button type="submit">Register</button>
            </div>}
        </div>
    </nav>
)

}