import styles from "./Navigation.module.css";
const Navigation = () =>{

    
    return(
        <nav className={`${styles.navigation} container`}> 
            <div className="logo">
                <img src="/images/logo.png" alt="Do some coding logo"/>
            </div>

            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>

        </nav>

    )
}

export default Navigation;