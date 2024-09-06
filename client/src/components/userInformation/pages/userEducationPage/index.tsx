import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import "../../components/yearDropdown/style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareMinus } from "@fortawesome/free-solid-svg-icons";
import { NextBtn } from "../../components/nextBtn";
import { UpdateCookie } from "../../functions/updateCookie";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { checkUserAuthorization } from "../../../../api/user";
import { IEducation } from "../../../../types";
import { YearDropdown } from "../../components/yearDropdown";
import { DeleteFuncEducation } from "../../functions/deleteFuncEducation";

export const UserEducationPage = () => {
  const [education, setEducation] = useState<IEducation[]>([]);
  const [disabled, setDisabled] = useState<boolean>(false);
  const currentYear = new Date().getFullYear();
  const [startYear, setStartYear] = useState<number>(1999);
  const [endYear, setEndYear] = useState<number>(currentYear);
  const navigate = useNavigate();

  const addInput = () => {
    if (education.length === 0 || education[education.length - 1].name !== "") {
      setEducation([...education, { name: "", year: { start: "", end: "" } }]);
    }
  };

  console.log(education);

  function handleInputChange(index: number, value: string) {
    const newGraduation = [...education];
    newGraduation[index].name = value;
    setEducation(newGraduation);
  }

  function handleYearChange (index: number, type: "start" | "end", year: string) {
    const newGraduation = [...education];
    newGraduation[index].year[type] = year;
    setEducation(newGraduation)
  }

  function handleInformation(e: React.MouseEvent) {
    e.preventDefault();

    UpdateCookie({ education: education });
    console.log(Cookies.get("userInfo"));
    navigate("/sign-up/experience");
  }

  useEffect(() => {
    const isLastEmpty =
      education.length > 0 && education[education.length - 1].name === "";
    setDisabled(isLastEmpty);
  }, [education]);

  // useEffect(() => {
  //     checkUserAuthorization(navigate);
  // }, []);
  console.log(startYear, endYear)
  return (
    <div className="InformationPage5">
      <div className="InformationPage5__title-container">
        <p className="InformationPage5__title-container__title">
          Вкажи свою освіту або курси, які проходив
        </p>
        <p className="InformationPage5__title-container__description">
          (вказуй тільки освіту/курси, які стосуються IT напрямків, які ти обрав
          до)
        </p>
      </div>
      <div className="InformationPage5__container">
        {education.map((value, index) => (
          <div>
            <input
              type="text"
              key={index}
              value={value.name}
              placeholder=""
              className={"InformationPage5__container__input"}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />

            <button
              className="InformationPage5__container__button"
              type="button"
              onClick={DeleteFuncEducation(index, education, setEducation)}
            >
              <FontAwesomeIcon icon={faSquareMinus} />
            </button>

            <div className="education__year">
              <div>
                <label>з </label>
                <YearDropdown startYear={startYear} endYear={currentYear} selectedYear={value.year.start} onChange={(e) => handleYearChange(index, "start", e)}/>
              </div>

              <div>
                <label>по </label>
                <YearDropdown startYear={startYear} endYear={currentYear} selectedYear={value.year.end} onChange={(e) => handleYearChange(index, "end", e)}/>
              </div>
            </div>
          </div>
        ))}
      </div>
      <NextBtn
        disabled={disabled}
        value="+"
        classname="InformationPage5__addGraduation-btn"
        onClick={addInput}
      />
      <NextBtn
        disabled={disabled}
        value="далі"
        onClick={(e) => handleInformation(e)}
      />
    </div>
  );
};
