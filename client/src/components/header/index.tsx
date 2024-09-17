import "./index.scss";
import { Element, elements } from "../../data/header";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { checkAccessTokenValidation } from "../../api/tokens";
import { useState } from "react";

export const Header = () => {
  const [value, setValue] = useState<string>("");

  const navigate = useNavigate();

  const openHomePage = async () => {
    try {
      const response = await checkAccessTokenValidation();

      if (response && response.valid) {
        navigate(`/home-page/${response.userId}`);
      } else {
        navigate("/sign-up");
      }
    } catch (err) {
      console.error("Token validation failed", err);
    }
  };
  const onclick = () => {

  }
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__elements">
          {elements.map((e: Element, index: number) => (
            <Link to={""} key={index} className="header__elements__a">
              {e.value}
            </Link>
          ))}
        </div>
        <div className="header__inputContainer">
          <label htmlFor="search">
            <input type="text"
              name="search"
              value={value}
              placeholder="пошук напрямів"
              className={"header__inputContainer__input"}
              onChange={(e) => setValue(e.target.value)}
            />

            <button className="header__inputContainer__button"
              onClick={onclick}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </label>

          <button
            onClick={openHomePage}
            className="header__inputContainer__profileImg"
          >
            <FontAwesomeIcon icon={faCircleUser} />
          </button>
        </div>
      </div>
    </div>
  );
};
