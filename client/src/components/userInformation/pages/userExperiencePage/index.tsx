import "./index.scss";
import React, { useEffect, useRef, useState } from "react";
import { NextBtn } from "../../components/nextBtn";
import { RadioBtn } from "../../components/radioBtn";
import { faSquareMinus } from "@fortawesome/free-solid-svg-icons";
import { UpdateCookie } from "../../functions/updateCookie";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { checkUserAuthorization } from "../../../../api/user";
import { TeaxtArea } from "../../components/textarea";

export const UserExperiencePage = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(true);
  const navigate = useNavigate();

  function handleInformation(e: React.MouseEvent) {
    e.preventDefault();

    const info = {
      experience: {
        answer: selectedOption,
        description: inputValue
      }
    }

    UpdateCookie({ expirience: info });
    console.log(Cookies.get("userInfo"))
    navigate("/sign-up/about");
  }

  console.log(selectedOption)

  useEffect(() => {
    const isSelectedAndValid = selectedOption === "Так, є" ? inputValue.length <= 50 : selectedOption.length === 0;
    setDisabled(isSelectedAndValid);
  }, [selectedOption, inputValue]);

  // useEffect(() => {
  //   checkUserAuthorization(navigate);
  // }, []);
  return (
    <div className="InformationPage6">
      <p className="InformationPage6__title">Чи є в тебе досвід роботи?</p>
      <div className="InformationPage6__container">
        <RadioBtn
          index={1}
          selectedLevel={selectedOption}
          onchange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedOption(e.target.value)}
          title="Так, є"
          description=""
        />
        <RadioBtn
          index={2}
          selectedLevel={selectedOption || ""}
          onchange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedOption(e.target.value)}
          title="Ні, немає"
          description=""
        />
        {selectedOption === "Так, є" && (
          <TeaxtArea
            onChange={(e: any) => setInputValue(e.target.value)}
            className="InformationPage6__container__textarea"
            placeholder="Опиши свій досвід"
            value={inputValue}
            maxLength={370}
          />
        )}
      </div>
      <NextBtn
        classname=""
        value="далі"
        disabled={disabled}
        onClick={(e) => handleInformation(e)}
      />
    </div>
  );
};
