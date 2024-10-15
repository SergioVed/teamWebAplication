import "./index.scss";
import { Navigate, useNavigate } from "react-router-dom";
import { checkUserAuthorization, editUser, getUser } from "../../api/user";
import { getAllProjects } from "../../api/project";
import "./index.scss";
import { useEffect, useRef, useState } from "react";
import {
  faChevronDown,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../header";
import { apiURL } from "../../api/api";
import { TeaxtArea } from "../userInformation/components/textarea";
import { YearDropdown } from "../userInformation/components/yearDropdown";
import { LanguageComponent } from "../userInformation/components/languageComponent";
import {
  DeleteFunc,
  OptionVisibleFunc,
  SelectOptionFunc,
} from "../userInformation/functions";
import { works } from "../../data/works";

export const EditProfilePage = () => {
  const optionsRef = useRef<HTMLDivElement>(null);
  const workOptionsRef = useRef<HTMLDivElement>(null);
  
  // controlled states
  const [projects, setProjects] = useState<any>([]);
  const [user, setUser] = useState<any>();
  const [selectedDirections, setSelectedDirections] = useState<{ name: string }[]>([]);
  const [selectedWorks, setSelectedWorks] = useState<{ name: string }[]>([]);
  const [worksToSelect, setWorksToSelect] = useState([]);
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(false)
  const [initialUser, setInitialUser] = useState()
  // 

  const navigate = useNavigate();
  function submitInformation() {
    const updateData = {
      englishLevel: user.englishLevel,
      description: user.description,
      direction: selectedDirections,
      technologies: selectedWorks,
      experience: {
        answer: user.experience.answer,
        description: user.experience.description
      },
      education: user.education
    };
    if (JSON.stringify(updateData) !== JSON.stringify(initialUser)) {
      editUser(updateData)
    }
    console.log(user, updateData)
  }

  function handleInputChange(value: string, index: number) {
    const newGraduation = [...user.education];
    newGraduation[index].name = value;
    setUser((prevState: any) => ({ ...prevState, education: newGraduation }));
  }
  function handleYearChange (value: number, index: number, field: string) {
    const newGraduation = [...user.education]
    newGraduation[index].year[field] = value
    setUser((prevState: any) => ({...prevState, education: newGraduation}))
  }
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser();
        if (userData) {
          setSelectedDirections(userData.direction);
          setSelectedWorks(userData.technologies)
        }
        setUser(userData);
        setInitialUser(userData);
      } catch (err) {
        console.error("Ошибка при получении данных пользователя:", err);
      }
    };
    const fetchProjects = async () => {
      try {
        const projectsData = await getAllProjects();
        setProjects(projectsData);
      } catch (err) {
        console.error("Ошибка при получении данных пользователя:", err);
      }
    };
    fetchUser();
    fetchProjects();
  }, []);
  useEffect(() => {
    const filteredWorks: any = [];
    if (selectedDirections.length > 0) {
      selectedDirections.forEach((direction) => {
        if (works[direction.name]) {
          filteredWorks.push(...works[direction.name]);
        }
      });
    }
    setWorksToSelect(filteredWorks);
  }, [selectedDirections]);
  useEffect(() => {
    const isDataChanged =
      JSON.stringify(user) !== JSON.stringify(initialUser);
    setSubmitDisabled(!isDataChanged);
  }, [user, initialUser]);
  return (
    <>
      <Header />
      {user ? (
        <div className="profilePage">
          <div className="userInfo">
            <FontAwesomeIcon
              className="userInfo__profilePicture"
              icon={faCircleUser}
            />
            <div className="userInfo__text">
              <p className="userInfo__text__name">{user.name.firstName}</p>
              <p className="userInfo__text__nickname">@{user.nickname}</p>
              <TeaxtArea
                // defaultValue={user.description}
                onChange={(e: any) => setUser((prevState: any) => ({
                  ...prevState,
                  description: e.target.value
                }))}
                value={user.description}
                maxLength={300}
                className={"userInfo__text-area"}
                placeholder={""}
              />
            </div>
          </div>

          <div className="userTechnologies">
            {/*  */}
            <div className="userTechnologies__direction">
              <p className="userProfile-title">Напрямок</p>
              <div className="InformationPage2__container userTechnologies__direction__container">
                <button
                  className="InformationPage2__container__selectBtn userTechnologies__direction__btn"
                  onClick={(event) => OptionVisibleFunc(optionsRef, event)}
                >
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="InformationPage2__container__selectBtn__img"
                  />
                </button>

                <div
                  className="options userTechnologies__direction__options"
                  ref={optionsRef}
                >
                  <div className="options-scrollbar">
                    {Object.keys(works).map((workKey) => (
                      <p
                        onClick={() => {
                          SelectOptionFunc(workKey, setSelectedDirections);
                        }}
                        key={workKey}
                        className={
                          selectedDirections.some(
                            (option: any) => option.name === workKey
                          )
                            ? "darkned"
                            : ""
                        }
                      >
                        {workKey}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="selected-options userTechnologies__direction__selectedOptions">
                  {selectedDirections.map((option: any, key: any) => (
                    <LanguageComponent
                      item={option.name}
                      key={key}
                      deleteFunction={DeleteFunc(
                        key,
                        selectedDirections,
                        setSelectedDirections
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/*  */}
            <div className="userTechnologies__techs">
              <p className="userProfile-title">Технології</p>
              <div className="userTechnologies__techs__container">
              <div className="InformationPage3__container userTechnologies__direction__container">
                <button
                  className="InformationPage3__container__selectBtn userTechnologies__direction__btn"
                  onClick={(event) => OptionVisibleFunc(workOptionsRef, event)}
                >
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="InformationPage3__container__selectBtn__img"
                  />
                </button>

                <div
                  className="options userTechnologies__direction__options"
                  ref={workOptionsRef}
                >
                  <div className="options-scrollbar">
                    {worksToSelect.length === 0 ? <p>First choose the directions</p> : 
                    <>
                      {worksToSelect.map((workKey) => (
                        <p
                          onClick={() => {
                            SelectOptionFunc(workKey, setSelectedWorks);
                          }}
                          key={workKey}
                          className={
                            selectedWorks.some(
                              (option: any) => option.name === workKey
                            )
                              ? "darkned"
                              : ""
                          }
                        >
                          {workKey}
                        </p>
                      ))}
                    </>
                    }
                  </div>
                </div>

                <div className="selected-options userTechnologies__direction__selectedOptions">
                  {selectedWorks.map((option: any, key: any) => (
                    <LanguageComponent
                      item={option.name}
                      key={key}
                      deleteFunction={DeleteFunc(
                        key,
                        selectedWorks,
                        setSelectedWorks
                      )}
                    />
                  ))}
                </div>
              </div>
              </div>
            </div>
            <div className="userTechnologies__education">
              <p className="userProfile-title">Освіта/курси</p>
              <div className="userTechnologies__education__container">
                {user.education.map((item: any, index: any) => (
                  <div className="userTechnologies__education__container__item" key={index}>
                    <input
                      type="text"
                      defaultValue={item.name}
                      className="userTechnologies__education__container__item__input"
                      onChange={(e) => {
                        handleInputChange(e.target.value, index);
                      }}
                    />
                    <span>
                      <span>З:{" "}</span>
                      <YearDropdown
                        startYear={2000}
                        endYear={2024}
                        selectedYear={item.year.start}
                        onChange={(e: any) => {
                          handleYearChange(e, index, "start")
                        }}
                      />
                    </span>
                    <span>
                      <span>По:{" "}</span>
                      <YearDropdown
                        startYear={2000}
                        endYear={2024}
                        selectedYear={item.year.end}
                        onChange={(e: any) => {
                          handleYearChange(e, index, "end")
                        }}
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="userTechnologies__expirience">
              <p className="userProfile-title">Досвід</p>
              <TeaxtArea
                // defaultValue={user.experience.description}
                onChange={(e: any) =>
                  setUser((prevState: any) => ({
                    ...prevState,
                    experience: {
                      ...prevState.experience,
                      description: e.target.value,
                    },
                  }))
                }
                value={user.experience.description}
                maxLength={200}
                className={"userTechnologies__expirience__text-area"}
                placeholder={""}
              />
            </div>
            <p className="userTechnologies__englishLevel">
              Рівень англійської -{" "}
              {
                <select
                  className="userTechnologies__englishLevel__select"
                  defaultValue={user.englishLevel}
                  onChange={(e) => setUser((prevState: any) => ({...prevState, englishLevel: e.target.value}))}
                >
                  <option value="A1">A1</option>
                  <option value="A2">A2</option>
                  <option value="B1">B1</option>
                  <option value="B2">B2</option>
                  <option value="C1">C1</option>
                  <option value="C2">C2</option>
                </select>
              }
            </p>
            <button className="submit-btn" disabled={submitDisabled} onClick={submitInformation}>Submit</button>
          </div>
          <div className="userProjects">  
            <p className="userProfile-title">Портфоліо</p>
            {projects.length === 0 ? (
              <p className="userProjects__subTitle">
                Додай свої проєкти у портфоліо, покажи на що здатен
              </p>
            ) : (
              <div className="userProjects__elements">
                {projects.map((e: any, i: number) => (
                  <div key={i} className="userProjects__elements__project">
                    <img src={`${apiURL}/${e.images[0]}`} alt="" />
                    <p>{e.title}</p>
                  </div>
                ))}
              </div>
            )}

            <button
              className="userProjects__addBtn"
              onClick={() => navigate("/home-page/:id/add-project")}
            >
              +
            </button>
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};
