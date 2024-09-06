import "./index.scss";
import { works } from "../../../../data/works";
import { LanguageComponent } from "../../components/languageComponent";
import React, { useEffect, useRef, useState } from "react";
import { NextBtn } from "../../components/nextBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  OptionVisibleFunc,
  DeleteFunc,
  SelectOptionFunc,
} from "../../functions";
import { UpdateCookie } from "../../functions/updateCookie";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { checkUserAuthorization } from "../../../../api/user";
import { banners } from "../../../../data/banners";
import { getBrightness, setColor } from "../../../../api/colors";
import { Gradient } from "../../../gradient";

export const UserSkillsPage = () => {
  const optionsRef = useRef<HTMLDivElement>(null);
  const [selectedOptions, setSelectedOptions] = useState<{ name: string; }[]>([]);
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [disabled, setDisabled] = useState<boolean>(false);
  const navigate = useNavigate();

  function handleInformation(e: React.MouseEvent) {
    e.preventDefault();

    const info = {
      technologies: selectedOptions,
    };

    UpdateCookie(info);
    console.log(Cookies.get("userInfo"));
    navigate("/sign-up/english-level");
  }

  useEffect(() => {
    const cookie = Cookies.get("userInfo");

    if (cookie) {
      const cookieobj = JSON.parse(cookie);
      const userDirections = cookieobj.direction || [];
      const filtredDirections: string[] = [];

      userDirections.forEach((direction: any) => {
        if (works[direction.name]) {
          filtredDirections.push(...works[direction.name]);
        }
      });

      setTechnologies(filtredDirections);
    }
  }, []);

  useEffect(() => {
    const isEmpty = selectedOptions.length === 0;
    setDisabled(isEmpty);
  }, [selectedOptions]);

  // useEffect(() => {
  //   checkUserAuthorization(navigate);
  // }, []);


  //color style settings
  const [currentColor, setCurrentColor] = useState<string>(banners[0].color);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const setElementColor = setColor(setCurrentIndex, setCurrentColor);

    return () => setElementColor();
  }, []);

  const textColor = getBrightness(currentColor) > 160 ? 'black' : 'white';
  return (
    <>
      <Gradient currentColor={currentColor} />

      <form className="InformationPage3">
        <div className="InformationPage3__title-div">
          <p className="InformationPage3__title-div__title" style={{ color: currentColor }}>
            Обери технології якими володієш
          </p>

          <p className="InformationPage3__title-div__sub-title">
            (можна обрати декілька)
          </p>
        </div>
        <div className="InformationPage3__container">
          <button
            className="InformationPage3__container__selectBtn"
            onClick={(event) => OptionVisibleFunc(optionsRef, event)}
          >
            <FontAwesomeIcon
              icon={faChevronDown}
              className="InformationPage2__container__selectBtn__img"
            />
          </button>
          <div className="options" ref={optionsRef}>
            <div className="options-scrollbar">
              {technologies.map((workKey) => (
                <p
                  onClick={() => {
                    SelectOptionFunc(workKey, setSelectedOptions);
                  }}
                  key={workKey}
                  className={selectedOptions.some((option) => option.name === workKey) ? "darkned" : ""}
                >
                  {workKey}
                </p>
              ))}
            </div>
          </div>

          <div className="selected-options">
            {selectedOptions.map((option, key) => (
              <LanguageComponent
                item={option.name}
                key={key}
                deleteFunction={DeleteFunc(
                  key,
                  selectedOptions,
                  setSelectedOptions
                )}
              />
            ))}
          </div>
        </div>

        <div className="InformationPage2__button-wrapper">
          <NextBtn
            classname={"InformationPage2__button-wrapper__button"}
            value="далі"
            currentColor={currentColor}
            textColor={textColor}
            disabled={disabled}
            onClick={handleInformation}
          />
        </div>
      </form>
    </>
  );
};
