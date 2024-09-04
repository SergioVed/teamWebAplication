import "./index.scss"
import { Link } from "react-router-dom"
import { foterData, FooterLink } from "../../data/footer"
import Logo from "../../img/logos/Logo.png"
import Discord from "../../img/footer/discord.png"
import Telegram from "../../img/footer/telegram.png"
import Mail from "../../img/footer/mail.png"

export const Footer = () => {

    return (
        <div className="footer">
            <img src={Logo} alt="" className="footer__logoImg" />

            <div className="footer__container">
                <div className="footer__container__content">
                    {foterData.map((array, index: number) => (
                        <div className="footer__container__content__linksArray" key={index}>
                            {array.map((relate, index: number) => (
                                <Link to={relate.url} className="footer__container__content__linksArray__link"  key={index}>{relate.title}</Link>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="footer__container__contacts">
                    <p>© 2024 TeamWeb® Global Inc.</p>
                    <div className="footer__container__contacts__links">
                        <p>contact us</p>
                        <div className="footer__container__contacts__links__imgs">
                            <a href=""><img src={Discord} alt="" /></a>
                            <a href=""><img src={Telegram} alt="" /></a>
                            <a href=""><img src={Mail} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}