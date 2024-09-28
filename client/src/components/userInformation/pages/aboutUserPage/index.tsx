import { useEffect, useState } from "react";
import "./index.scss";
import womanPhoto from "../../../../img/informationPage/woman-img.webp";
import { NextBtn } from "../../components/nextBtn";
import { UpdateCookie } from "../../functions/updateCookie";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { addFullInfo } from "../../../../api/addFullInfo";
import { checkUserAuthorization } from "../../../../api/user";
import { banners } from "../../../../data/banners";
import { getBrightness, setColor } from "../../../../api/colors";
import { Gradient } from "../../../gradient";
import { TeaxtArea } from "../../components/textarea";

export const AboutUserPage = () => {
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState<boolean>(true);
  const navigate = useNavigate()

  function handleInformation(e: React.MouseEvent) {
    e.preventDefault()
    UpdateCookie({ description: value })
    const userInfo = Cookies.get("userInfo")

    if (userInfo) {
      const parsedUserInfo = JSON.parse(userInfo)
      addFullInfo(parsedUserInfo)
      navigate("/sign-up/final-page")
      Cookies.remove("userInfo")
    }
  }

  useEffect(() => {
    const isValid = value.length <= 50
    setDisabled(isValid)
  }, [value]);

  useEffect(() => {
    const userInfo = Cookies.get("userInfo");

    if (userInfo) {
      const parsedInfo = JSON.parse(userInfo);

      if (parsedInfo.description) {
        setValue(parsedInfo.description || "");
      }
    }
  }, []);

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

      <div className="InformationPage7">
        <div className="InformationPage7__wrapper-container">
          <div className="InformationPage7__container">
            <div className="InformationPage7__container__title-div">
              <p className="InformationPage7__container__title-div__title" style={{ color: currentColor }}>
                Розкажи про себе
              </p>

              <p className="InformationPage7__container__title-div__sub-title">
                (коротко розкажи хто ти, навіщо ти тут і які проєкти шукаєш для
                себе)
              </p>
            </div>

            <TeaxtArea
              maxLength={850}
              className="InformationPage7__container__textarea"
              placeholder=""
              value={value}
              onChange={(e: any) => setValue(e.target.value)}
            />
          </div>

          <div className="InformationPage7__container__img" style={{backgroundColor: currentColor}}>
            <img src={womanPhoto} alt="" />
          </div>
        </div>

        <NextBtn
          value="завершити"
          classname="InformationPage7__button"
          disabled={disabled}
          currentColor={currentColor}
          textColor={textColor}
          onClick={handleInformation}
        />
      </div>
    </>
  );
};
