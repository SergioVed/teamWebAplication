import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { banners } from "../../data/banners";
import { Gradient } from "../gradient";
import googleLogo from '../../img/logos/google-logo.png';
import githubLogo from '../../img/logos/github-logo.png';
import './style.scss';
import { faCheck, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { apiURL } from "../../api/api";
import axios from "axios";
import { getBrightness, hexToRgba, setColor } from "../../api/colors";

export const SignIn = () => {
    const [email, setEmail] = useState("");
    const [emailIsFocused, setEmailIsFocused] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordIsFocused, setPasswordIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const navigate = useNavigate();

    const login = async (data: any) => {
        try {
            const response = await axios.post(`${apiURL}/api/sign-in`, data);

            const { accessToken } = response.data;
            document.cookie = `accessToken=${accessToken}; path=/;`;

            navigate('/');
            return response.data;

        } catch (err: any) {
            if (err.response && err.response.data && err.response.data.message) {
                setErrorMessage(err.response.data.message);
            } else {
                setErrorMessage('Щось пішло не так. Спробуйте ще раз.');
            }
        }
    }


    const authenticateUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (email === '' || password === '') {
            setErrorMessage('Будь ласка, заповніть всі поля.');
            return;
        }

        const loginData = {
            email: email,
            password: password,
        }

        try {
            await login(loginData);
        } catch (err: any) {
            setErrorMessage('Щось пішло не так. Спробуйте ще раз.');
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    //color style settings
    const [currentColor, setCurrentColor] = useState<string>(banners[0].color);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const setElementColor = setColor(setCurrentIndex, setCurrentColor);

        return () => setElementColor();
    }, [])

    const textColor = getBrightness(currentColor) > 160 ? 'black' : 'white';

    const shadowColor = hexToRgba(currentColor, 0.5);

    return (
        <div className="signIn">

            <Gradient currentColor={currentColor} />

            <div className="signIn__container">
                <div className="signIn__with__form">
                    <h1 className="signIn__title">Вітаємо знову!</h1>

                    <p className="signIn__caption">
                        *увійдіть у свій обліковий запис, щоб користуватися повним функціоналом сайту
                    </p>

                    <form className="signIn__form" onSubmit={authenticateUser}>
                        <label htmlFor="email">
                            <input
                                type="email"
                                id="email"
                                placeholder="пошта"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onFocus={() => setEmailIsFocused(true)}
                                onBlur={() => setEmailIsFocused(false)}
                                style={{
                                    borderColor: emailIsFocused ? currentColor : email ? currentColor : 'rgba(255, 255, 255, 0.55)',
                                    transition: "border-color 0.3s ease",
                                }}
                            />
                            <FontAwesomeIcon
                                icon={faCheck}
                                className="check"
                                style={{ visibility: email.includes('@') ? 'visible' : 'hidden' }}
                            />
                        </label>

                        <label htmlFor="password">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                placeholder="пароль"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onFocus={() => setPasswordIsFocused(true)}
                                onBlur={() => setPasswordIsFocused(false)}
                                style={{
                                    borderColor: passwordIsFocused ? currentColor : password ? currentColor : 'rgba(255, 255, 255, 0.55)',
                                    transition: "border-color 0.3s ease",
                                }}
                            />
                            <FontAwesomeIcon
                                icon={showPassword ? faEye : faEyeSlash}
                                onClick={togglePasswordVisibility}
                                className="see__password"
                            />
                        </label>

                        {errorMessage && (
                            <p className="sign-in-form__error">
                                *{errorMessage}
                            </p>
                        )}

                        <div className="form__navigation">
                            <Link to={'/sign-up'} className="signUp__link">
                                створити
                            </Link>
                            <button
                                type="submit"
                                className="signIn__button"
                                style={{ backgroundColor: currentColor, color: textColor }}
                            >
                                увійти
                            </button>
                        </div>
                    </form>
                </div>

                <p>або</p>

                <div className="signIn__other__methods">
                    <button
                        className="signIn__google"
                        onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0px 0px 6px 3px ${shadowColor}`}
                        onMouseLeave={(e) => e.currentTarget.style.boxShadow = "none"}
                    >
                        <img src={googleLogo} alt="logo" />
                        Sign in with Google
                    </button>

                    <button
                        className="signIn__github"
                        onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0px 0px 6px 3px ${shadowColor}`}
                        onMouseLeave={(e) => e.currentTarget.style.boxShadow = "none"}
                    >
                        <img src={githubLogo} alt="logo" />
                        Sign in with GitHub
                    </button>
                </div>
            </div>
        </div>
    )
}