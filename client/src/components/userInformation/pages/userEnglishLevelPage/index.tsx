import "./index.scss";
import { EnglishLvl } from "../../../../data/works";
import React, { useEffect, useRef, useState } from "react";
import { NextBtn } from "../../components/nextBtn";
import { RadioBtn } from "../../components/radioBtn";
import { UpdateCookie } from "../../functions/updateCookie";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { checkUserAuthorization } from "../../../../api/user";
import { banners } from "../../../../data/banners";
import { getBrightness, setColor } from "../../../../api/colors";
import { Gradient } from "../../../gradient";

export const UserEnglishLevelPage = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const navigate = useNavigate();

  function handleInformation(e: React.MouseEvent) {
    e.preventDefault();

    UpdateCookie({ englishLevel: selectedOption });

    console.log(Cookies.get("userInfo"));

    navigate("/sign-up/education");
  }

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

      <form className="InformationPage4">
        <p className="InformationPage4__title" style={{color: currentColor}}>
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
                currentColor={currentColor}
              />
            </div>
          ))}
        </div>

        <NextBtn
          classname={"btn-wrapper"}
          value="далі"
          disabled={false}
          currentColor={currentColor}
          textColor={textColor}
          onClick={(e) => handleInformation(e)}
        />
      </form>
    </>
  );
};
