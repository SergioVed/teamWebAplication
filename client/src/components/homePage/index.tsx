import { useEffect, useState } from "react";
import { Banners } from "./banners";
import './style.scss'
import { Header } from "../header";
import { TopWorkers } from "../randomWorkers/randomWorkersComponent";
import { Footer } from "../footer";
import { ProjectBlock } from "../projectBlock";
import { Link, useNavigate } from "react-router-dom";
import { Gradient } from "../gradient";
import { banners } from "../../data/banners";
import { getUser } from "../../api/user";
import { PopupHomePage } from "./popup";

interface IBanner {
    index: number;
    name: string,
    color: string,
}

export const HomePage = () => {
    const [currentBanner, setCurrentBanner] = useState<number>(0);
    const [currentColor, setCurrentColor] = useState<string>("");
    const [popup, setPopup] = useState("")

    function closePopup () {
        setPopup("")
    }

    function changeColor() {
        banners.forEach((element: IBanner) => {
            if (currentBanner === element.index) {
                setCurrentColor(element.color);
            }
        })
    }

    useEffect(() => {
        changeColor();
    }, [currentBanner]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await getUser()
                const userFields = [userData.email, userData.firstName || userData.secondName, userData.experience.answer, userData.englishLevel]

                if (userFields.every((e) => {
                    return e === ""
                })) {
                    setPopup("popupDisabled")
                }
            } catch (err) {
                console.error("Ошибка при получении данных пользователя:", err);
            }
        }
        fetchUser()
    }, [])

    return (
        <div className="homepage">
            <Header />

            <Gradient currentColor={currentColor} />

            <div className="homepage__container">
                <Banners banners={banners} currentBanner={currentBanner} setCurrentBanner={setCurrentBanner} />

                <TopWorkers />

                <div className="homepage__projects">
                    <h1>Найновіші проєкти</h1>

                    <div className="homepage-projects__projects">
                        <ProjectBlock currentColor={currentColor} />
                        <ProjectBlock currentColor={currentColor} />
                        <ProjectBlock currentColor={currentColor} />
                        <ProjectBlock currentColor={currentColor} />
                    </div>

                    <Link to={'/'} className="projects__btn" style={{ backgroundColor: currentColor }}>переглянути більше</Link>
                </div>
            </div>
            <PopupHomePage popupDisabled={popup} closePopup={closePopup}/>
            <Footer />
        </div>
    )
}