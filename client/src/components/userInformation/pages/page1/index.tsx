import "./index.scss";
import { useEffect, useRef, useState } from "react";
import page1Img from "../../../../img/informationPage/InformationPage1.webp";
import { NextBtn } from "../../components/nextBtn";
import { Input } from "../../../input";
import Cookies from "js-cookie";
import { UpdateCookie } from "../../functions/updateCookie";
import { useNavigate } from "react-router-dom";
import { checkUserAuthorization } from "../../../../api/user";

export const InformationPage1 = () => {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [disabled, setDisabled] = useState<boolean>(true);
  const navigate = useNavigate();

  function handleInformation(e: React.FormEvent) {
    e.preventDefault();

    const info = {
      name: {
        firstName: name,
        secondName: surName
      }
    }

    UpdateCookie(info);
    console.log(Cookies.get("userInfo"));
    navigate("/sign-up/information-page2");
  }

  useEffect(() => {
    const isValid = name.length === 0 || surName.length === 0;
    setDisabled(isValid);
  }, [name, surName]);

  useEffect(() => {
    checkUserAuthorization(navigate);
  }, []);
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
