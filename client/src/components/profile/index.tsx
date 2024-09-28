import { Navigate, useNavigate } from "react-router-dom";
import { checkUserAuthorization, getUser } from "../../api/user";
import { getAllProjects } from "../../api/project";
import "./index.scss"
import { useEffect, useState } from "react";
import { faCircleUser, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../header";
import { ItemComponent } from "./components/languageComponent/itemComponent";
import { apiURL } from "../../api/api";

export const Profile = () => {
    const [user, setUser] = useState<any>()
    const [projects, setProjects] = useState<any>([])
    const navigate = useNavigate();

    useEffect(() => {
        checkUserAuthorization(navigate);
    }, [])
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await getUser()
                setUser(userData)
            } catch (err) {
                console.error("Ошибка при получении данных пользователя:", err);
            }
        }
        const fetchProjects = async () => {
            try {
                const projectsData = await getAllProjects()
                setProjects(projectsData)
            } catch (err) {
                console.error("Ошибка при получении данных пользователя:", err);
            }
        }
        fetchUser()
        fetchProjects()
    }, [])
    console.log(user, projects)
    return(
        <>
            <Header/>
            {user ? 
                <div className="profilePage">
                    <div className="userInfo">
                        <FontAwesomeIcon className="userInfo__profilePicture" icon={faCircleUser} />
                        <div className="userInfo__text">
                            <p className="userInfo__text__name">{user.name.firstName}</p>
                            <p className="userInfo__text__nickname">@{user.nickname}</p>
                            <p className="userInfo__text__description">{user.description}</p>
                        </div>
                        <FontAwesomeIcon className="userInfo__edit" icon={faPenToSquare} />
                    </div>
                    
                    <div className="userTechnologies">
                        <div className="userTechnologies__direction">
                            <p className="userProfile-title">Напрямок</p>
                            <div className="userTechnologies__direction__container">
                                {user.direction.map((item: any) => (
                                    <ItemComponent name={item.name}/>
                                ))}
                            </div>

                        </div>
                        <div className="userTechnologies__techs">
                            <p className="userProfile-title">Технології</p>
                            <div className="userTechnologies__techs__container">
                                {user.technologies.map((item: any) => (
                                    <ItemComponent name={item.name}/>
                                ))}
                            </div>
                        </div>
                        <div className="userTechnologies__education">
                            <p className="userProfile-title">Освіта/курси</p>
                            <div className="userTechnologies__education__container">
                                {user.education.map((item: any) => (
                                <p className="userTechnologies__education__container__item">{item.name} ({item.year.start} - {item.year.end})</p> 
                                ))}
                            </div>
                        </div>
                        <div className="userTechnologies__expirience">
                            <p className="userProfile-title">Досвід</p>
                            <p className="userTechnologies__expirience__description">
                                {user.experience.answer === "Так, є" ? user.experience.description : user.experience.answer}
                            </p>
                        </div>
                        <p className="userTechnologies__englishLevel">Рівень англійської - {user.englishLevel}</p>
                    </div>
                    <div className="userProjects">
                        <p className="userProfile-title">Портфоліо</p>
                        {projects.length === 0 
                            ? 
                        <p className="userProjects__subTitle">Додай свої проєкти у портфоліо, покажи на що здатен</p>
                            : 
                        <div className="userProjects__elements">
                            {projects.map((e: any, i: number) => (
                                <div key={i} className="userProjects__elements__project">
                                    <img src={`${apiURL}/${e.images[0]}`} alt="" />
                                    <p>{e.title}</p>
                                </div>
                            ))}    
                        </div>}
                        
                        <button className="userProjects__addBtn" onClick={() => navigate('/home-page/:id/add-project')}>
                            + 
                        </button>
                    </div>
                </div>
            : <p>Loading</p>
        }
        </>
    )
}