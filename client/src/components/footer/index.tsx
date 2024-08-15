import "./index.scss"
import { Link } from "react-router-dom"
import { foterData, FooterLink } from "../../data/footer"
import Logo from "../../img/Logo.png"
import Discord from "../../img/footer/discord.png"
import Telegram from "../../img/footer/telegram.png"
import Mail from "../../img/footer/mail.png"

export const Footer = () => {
    
    return(
        <div className="footer">
            <img src={Logo} alt="" className="footer__logoImg"/>
            <div className="footer__container">
                {foterData.map((array) => (
                    <div className="footer__container__linksArray">
                        {array.map((relate) => (
                            <Link to={relate.url} className="footer__container__linksArray__link">{relate.title}</Link>
                        ))}
                    </div>
                ))}
            </div>
            <div className="footer__contacts">
                <p>© 2024 TeamWeb® Global Inc.</p>
                <div className="footer__contacts__links">
                    <p>contact us</p>
                    <div className="footer__contacts__links__imgs">
                        <img src={Discord} alt="" />
                        <img src={Telegram} alt="" />
                        <img src={Mail} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}