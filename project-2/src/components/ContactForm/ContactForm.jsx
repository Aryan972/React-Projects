import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import {HiMail} from "react-icons/hi";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";

const ContactForm = () => {

  return (
    
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
                <Button text="VIA SUPORT CHAT" icon={<MdMessage fontSize="24px" />} />
                
                <Button onClick={onViaCallSubmit} text="VIA CALL" icon={<IoMdCall fontSize="24px" />} />
            </div>
            <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px" />} />

            <form>
                <div className={styles.form_control}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
                </div>

                <div className={styles.form_control}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                </div>

                <div className={styles.form_control}>
                    <label htmlFor="text">Text</label>
                    <textarea type="text" name="text" rows={8}/>
                </div>

               <div
                    //inline CSS
                    style={{
                        display: "flex",
                        justifyContent: "end"
                    }}>
                    <Button text="Submit"/>
        
                </div>

            </form>
        </div>
        
        <div className={styles.contact_image}>
            <img src="/images/service.svg" alt="24*7 service image" />
        </div>
    </section>
    
  )
}

export default ContactForm
