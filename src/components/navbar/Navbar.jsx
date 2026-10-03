import styles from "./navbar.module.css";

import Section from "../section/Section";

import logo from "../../assets/img/logo.svg"
import logo1 from "../../assets/img/logo1.png"

const Navbar = ( )=> {
    return (
        <nav >
                <div className={styles.navbarContainer}>
                   <div>
                    <img src={logo1} alt="" className={styles.logo}/>
                    </div>
                <ul className={styles.navbarList}>
                    <li>
                        <a href="">Our Service</a>
                    </li>
                    <li>
                        <a href="">FAQs</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul> 
                </div>
        </nav>
    );
};

export default Navbar;