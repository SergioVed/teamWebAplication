import "./index.scss";
import { useEffect, useRef, useState } from "react";
import page1Img from "../../../../img/informationPage/InformationPage1.webp";
import { NextBtn } from "../../components/nextBtn";
import { Input } from "../../../input";
import Cookies from "js-cookie";
import { UpdateCookie } from "../../functions/updateCookie";

export const InformationPage1 = ({ onNext }: { onNext: () => void }) => {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [disabled, setDisabled] = useState<boolean>(true);

  useEffect(() => {
    const isValid = name.length === 0 || surName.length === 0;
    setDisabled(isValid);
  }, [name, surName]);

  function handleInformation(e: React.FormEvent) {
    e.preventDefault();
    const info = {
        name, surName
    }
    UpdateCookie(info)
    onNext();
    console.log(Cookies.get("userInfo"))
  }

  return (
    <form className="InformationPage1">
      <div className="InformationPage1__wrapper">
        <div className="InformationPage1__container">
          <div>
            <p className="InformationPage1__container__title">Привіт!</p>
            <p className="InformationPage1__container__p">
              Перед початком роботи треба заповнити дані про себе
            </p>
          </div>
          <div className="InformationPage1__container__inputs">
            <label htmlFor="name">Твоє ім’я</label>
            <Input 
              onChange={(e) => setName(e.target.value)} 
              classname=""
              placeholder=""
              needed={false}
              multiline={false}
              value={name}
            />
          </div>
          <div className="InformationPage1__container__inputs">
            <label htmlFor="sur-name">Твоє прізвище</label>
            <Input 
              onChange={(e) => setSurName(e.target.value)} 
              classname=""
              placeholder=""
              needed={false}
              multiline={false}
              value={surName}
            />
          </div>
        </div>
        <img src={page1Img} alt="" />
      </div>
      <NextBtn
        classname={""}
        value="далі"
        disabled={disabled}
        onClick={handleInformation}
      />
    </form>
  );
};
