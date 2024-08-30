import { useEffect, useState } from "react";
import { Input } from "../../../input";
import "./index.scss";
import womanPhoto from "../../../../img/informationPage/weekday-woman-drawing-on-a-tablet 1.webp";
import { NextBtn } from "../../components/nextBtn";
import { UpdateCookie } from "../../functions/updateCookie";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const InformationPage7 = () => {
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState<boolean>(true);
  const navigate = useNavigate()

  useEffect(() => {
    const isValid = value.length <= 50
    setDisabled(isValid)
  }, [value]);

  function handleInformation(e: React.MouseEvent) {
    e.preventDefault()
    UpdateCookie({aboutUser: value})
    console.log(Cookies.get("userInfo"))
    navigate("/sign-up/final-page")
    
    Cookies.remove("userInfo")
  }

  return (
    <div className="InformationPage7">
      <div className="InformationPage7__wrapper-container">
        <div className="InformationPage7__container">
          <div className="InformationPage7__container__title-div">
            <p className="InformationPage7__container__title-div__title">
              Розкажи про себе
            </p>
            <p className="InformationPage7__container__title-div__sub-title">
              (коротко розкажи хто ти, навіщо ти тут і які проєкти шукаєш для
              себе)
            </p>
          </div>
          <Input
            maxLength={850}
            classname="InformationPage7__container__textarea"
            placeholder=""
            value={value}
            multiline={true}
            needed={false}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="InformationPage7__container__img">
          <img src={womanPhoto} alt="" />
        </div>
      </div>
      <NextBtn
        value="завершити"
        classname="InformationPage7__button"
        disabled={disabled}
        onClick={handleInformation}
      />
    </div>
  );
};
