import { useNavigate } from "react-router-dom";
import { checkUserAuthorization, getUser } from "../../api/user";
import "./index.scss"
import { useEffect, useState } from "react";
import { faCircleUser, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../header";
import { ItemComponent } from "./components/itemComponent";

export const Profile = () => {
    const [user, setUser] = useState<any>   ()
    const navigate = useNavigate();

    // useEffect(() => {
    //     checkUserAuthorization(navigate);
    // }, [])
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await getUser()
                setUser(userData)
            } catch (err) {
                console.error("Ошибка при получении данных пользователя:", err);
            }
        }
        fetchUser()
    }, [])
    console.log(user)
    return(
        <>
            <Header/>
            <div className="profilePage">
                {user ? <div className="userInfo">
                    <FontAwesomeIcon className="userInfo__profilePicture" icon={faCircleUser} />
                    <div className="userInfo__text">
                        <p className="userInfo__text__name">{user.name.firstName}</p>
                        <p className="userInfo__text__nickname">@{user.nickname}</p>
                        <p className="userInfo__text__description">{user.description}</p>
                    </div>
                    <FontAwesomeIcon className="userInfo__edit" icon={faPenToSquare} />
                </div> : <p>Loading</p>}
                
                {user ? <div className="userTechnologies">
                    <div className="userTechnologies__direction">
                        <p className="userTechnologies__direction__title">Напрямок</p>
                        <div className="userTechnologies__direction__container">
                            {user.direction.map((item: any) => (
                                <ItemComponent name={item.name}/>
                            ))}
                        </div>

                    </div>
                    <div className="userTechnologies__techs">
                        <p className="userTechnologies__techs__title">Технології</p>
                        <div className="userTechnologies__techs__container">
                            {user.technologies.map((item: any) => (
                                <ItemComponent name={item.name}/>
                            ))}
                        </div>
                    </div>
                    <div className="userTechnologies__education">
                        <p className="userTechnologies__education__title">Освіта/курси</p>
                        <div className="userTechnologies__education__container">
                            {user.education.map((item: any) => (
                               <p className="userTechnologies__education__container__item">{item.name} ({item.year.start} - {item.year.end})</p> 
                            ))}
                        </div>
                    </div>
                    <div className="userTechnologies__expirience">
                        <p className="userTechnologies__expirience__title">Досвід</p>
                        <p className="userTechnologies__expirience__description">
                            {user.experience.answer === "Так, є" ? user.experience.description : user.experience.answer}
                        </p>
                    </div>
                    <p className="userTechnologies__englishLevel">Рівень англійської - {user.englishLevel}</p>
                </div> : <p>Loading...</p>}
            </div>
        </>
    )
}