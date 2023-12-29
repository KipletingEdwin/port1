import React from 'react'
import emailIcon from "../../../assets/contact/email.png"

function Contact() {
  return (
    <footer>
        <div>
            <h2> Contact </h2>
            <p> Feel free to reach out!</p>
        </div>
        <ul>
            <li>
                <img src={emailIcon} alt='Email Icon'/>
            </li>
        </ul>
    </footer>
  )
}

export default Contact