import "./index.scss";
import { useEffect, useRef, useState } from "react";
import page1Img from "../../../../img/informationPage/page1-img.webp";
import { NextBtn } from "../../components/nextBtn";
import Cookies from "js-cookie";
import { UpdateCookie } from "../../functions/updateCookie";
import { useNavigate } from "react-router-dom";
import { checkUserAuthorization } from "../../../../api/user";
import { banners } from "../../../../data/banners";
import { getBrightness, setColor } from "../../../../api/colors";
import { Gradient } from "../../../gradient";

export const InformationPage1 = () => {
  const [name, setName] = useState("");
  const [nameIsFocused, setNameIsFocused] = useState<boolean>(false);
  const [surnameIsFocused, setSurnameIsFocused] = useState<boolean>(false);
  const [surName, setSurName] = useState("");
  const [disabled, setDisabled] = useState<boolean>(true);
  const navigate = useNavigate();

  function handleInformation(e: React.FormEvent) {
    e.preventDefault();

    const info = {
      name: {
        firstName: name,
        secondName: surName,
      },
    };

    UpdateCookie(info);
    console.log(Cookies.get("userInfo"));
    navigate("/sign-up/fields");
  }

  useEffect(() => {
    const isValid = name.length === 0 || surName.length === 0;
    setDisabled(isValid);
  }, [name, surName]);

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

      <form className="InformationPage1">
        <div className="InformationPage1__wrapper">
          <div className="InformationPage1__container">
            <div>
              <p className="InformationPage1__container__title" style={{ color: currentColor }}>Привіт!</p>
              <p className="InformationPage1__container__p">
                Перед початком роботи треба заповнити дані про себе
              </p>
            </div>

            <div className="InformationPage1__container__inputs">
              <label htmlFor="name">Твоє ім’я</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder=""
                value={name}
                onFocus={() => setNameIsFocused(true)}
                onBlur={() => setNameIsFocused(false)}
                style={{
                  borderColor: nameIsFocused ? currentColor : name ? currentColor : 'rgba(255, 255, 255, 0.55)',
                  transition: "border-color 0.3s ease",
                }}
              />
            </div>

            <div className="InformationPage1__container__inputs">
              <label htmlFor="sur-name">Твоє прізвище</label>
              <input
                type="text"
                onChange={(e) => setSurName(e.target.value)}
                placeholder=""
                value={surName}
                onFocus={() => setSurnameIsFocused(true)}
                onBlur={() => setSurnameIsFocused(false)}
                style={{
                  borderColor: surnameIsFocused ? currentColor : surName ? currentColor : 'rgba(255, 255, 255, 0.55)',
                  transition: "border-color 0.3s ease",
                }}
              />
            </div>
          </div>

          <img src={page1Img} alt="image" style={{ backgroundColor: currentColor }} />
        </div>

        <NextBtn
          classname={""}
          value="далі"
          disabled={disabled}
          currentColor={currentColor}
          textColor={textColor}
          onClick={handleInformation}
        />
      </form>
    </>
  );
};
