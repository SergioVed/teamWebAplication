import "./index.scss";
import { EnglishLvl } from "../../../../data/works";
import React, { useRef, useState } from "react";
import { NextBtn } from "../../components/nextBtn";
import { RadioBtn } from "../../components/radioBtn";
import { UpdateCookie } from "../../functions/updateCookie";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const InformationPage4 = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const navigate = useNavigate();

  function handleInformation(e: React.MouseEvent) {
    e.preventDefault();
    UpdateCookie({ englishLevel: selectedOption });
    console.log(Cookies.get("userInfo"));
    navigate("/sign-up/information-page5");
  }

  return (
    <form className="InformationPage4">
      <p className="InformationPage4__title">
        Обери свій рівень англійської мови
      </p>
      <div className="InformationPage4__container">
        {EnglishLvl.map((e, index) => (
          <div className="InformationPage4__container__element" key={index}>
            <RadioBtn
              index={index}
              selectedLevel={selectedOption}
              onchange={(e: any) => setSelectedOption(e.target.value)}
              title={e.title}
              description={e.description}
            />
          </div>
        ))}
      </div>
      <NextBtn
        classname={"btn-wrapper"}
        value="далі"
        disabled={false}
        onClick={(e) => handleInformation(e)}
      />
    </form>
  );
};
