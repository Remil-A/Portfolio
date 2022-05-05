import "./contact.css"
import Phone from "../../img/Phone.png"
import Email from "../../img/email2.png"
import  Address from "../../img/Address.png"
import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {ThemeContext} from "../../context"

function Contact() {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_iu6d033",
          "template_jqhhp45",
          formRef.current,
          "I4biM3Achz90Iyn87"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true)
          },
          (error) => {
            console.log(error.text);
          }
        );
    };


  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +234 9032 612 5134
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              adusa****@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              19a wealth street, Nigeria.
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> Get in touch. Always available for
            freelancing if the right project comes along .me
          </p>
          <form ref={formRef} onSubmit={sendEmail}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact