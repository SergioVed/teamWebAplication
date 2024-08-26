import { Link, useNavigate } from "react-router-dom";
import './style.scss';
import googleLogo from '../../img/logos/google-logo.png';
import githubLogo from '../../img/logos/github-logo.png';
import { Gradient } from "../gradient";
import { useState, useEffect } from "react";
import { banners } from "../../data/banners";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { apiURL } from "../../api/api";

export const SignUp = () => {
    const [nickname, setNickname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const navigate = useNavigate();

    const register = async (data: any) => {
        try {
            const response = await axios.post(`${apiURL}/api/sign-up`, data);

            const { accessToken } = response.data;
            document.cookie = `accessToken=${accessToken}; path=/;`;
            
            navigate('/user-information');
            return response.data;

        } catch (err: any) {
            handleError(err);
        }
    }

    const handleError = (err: any) => {
        if (err.response && err.response.data && err.response.data.message) {
            setErrorMessage(err.response.data.message);
        } else {
            setErrorMessage('Щось пішло не так. Спробуйте ще раз.');
        }
    }

    const addUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (nickname === '' || email === '' || password === '') {
            setErrorMessage('Будь ласка, заповніть всі поля.');
            return;
        }

        const userData = {
            nickname: nickname,
            email: email,
            password: password,
        }

        try {
            await register(userData);
        } catch (err: any) {
            setErrorMessage('Щось пішло не так. Спробуйте ще раз.');
        }
    }

    //color style settings
    const [currentColor, setCurrentColor] = useState<string>(banners[0].color);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [nicknameIsFocused, setNicknameIsFocused] = useState(false);
    const [emailIsFocused, setEmailIsFocused] = useState(false);
    const [passwordIsFocused, setPasswordIsFocused] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => {
                const nextIndex = (prevIndex + 1) % banners.length;
                setCurrentColor(banners[nextIndex].color);
                return nextIndex;
            });

            return () => clearInterval(interval);
        }, 10000)
    }, [])

    const getBrightness = (hexColor: string) => {
        const r = parseInt(hexColor.substring(1, 3), 16);
        const g = parseInt(hexColor.substring(3, 5), 16);
        const b = parseInt(hexColor.substring(5, 7), 16);
        return (r * 299 + g * 587 + b * 114) / 1000;
    };

    const textColor = getBrightness(currentColor) > 160 ? 'black' : 'white';

    const hexToRgba = (hex: string, opacity: number) => {
        let r = parseInt(hex.slice(1, 3), 16);
        let g = parseInt(hex.slice(3, 5), 16);
        let b = parseInt(hex.slice(5, 7), 16);

        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };

    const shadowColor = hexToRgba(currentColor, 0.5);

    return (
        <div className="signUp">

            <Gradient currentColor={currentColor} />

            <div className="signUp__container">
                <div className="signUp__with__form">
                    <h1 className="signUp__title">Вітаємо!</h1>

                    <p className="signUp__caption">
                        *ви повинні створити обліковий запис, щоб користуватися повним функціоналом сайту
                    </p>

                    <form className="signUp__form" onSubmit={addUser}>
                        <label htmlFor="nickname">
                            <input
                                type="text"
                                id="nickname"
                                placeholder="нікнейм"
                                value={nickname}
                                onChange={(e) => setNickname(e.target.value)}
                                onFocus={() => setNicknameIsFocused(true)}
                                onBlur={() => setNicknameIsFocused(false)}
                                style={{
                                    borderColor: nicknameIsFocused ? currentColor : nickname ? currentColor : 'rgba(255, 255, 255, 0.55)',
                                    transition: "border-color 0.3s ease",
                                }}
                            />
                            <FontAwesomeIcon
                                icon={faCheck}
                                className="check"
                                style={{ visibility: /^[A-Za-z0-9_]+$/.test(nickname) ? 'visible' : 'hidden' }}
                            />
                        </label>

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
                                type="password"
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
                                icon={faCheck}
                                className="check"
                                style={{ visibility: password.length >= 8 ? 'visible' : 'hidden' }}
                            />
                        </label>

                        {errorMessage && (
                            <p className="sign-up-form__error">
                                *{errorMessage}
                            </p>
                        )}

                        <div className="form__navigation">
                            <Link to={'/sign-in'} className="signIn__link">
                                увійти
                            </Link>
                            <button
                                type="submit"
                                className="signUp__button"
                                style={{ backgroundColor: currentColor, color: textColor }}
                            >
                                створити
                            </button>
                        </div>
                    </form>
                </div>

                <p>або</p>

                <div className="signUp__other__methods">
                    <button
                        className="signUp__google"
                        onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0px 0px 6px 3px ${shadowColor}`}
                        onMouseLeave={(e) => e.currentTarget.style.boxShadow = "none"}
                    >
                        <img src={googleLogo} alt="logo" />
                        Continue with Google
                    </button>

                    <button
                        className="signUp__github"
                        onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0px 0px 6px 3px ${shadowColor}`}
                        onMouseLeave={(e) => e.currentTarget.style.boxShadow = "none"}
                    >
                        <img src={githubLogo} alt="logo" />
                        Continue with GitHub
                    </button>
                </div>
            </div>
        </div>
    )
}