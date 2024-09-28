import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Header } from '../header';
import './style.scss';
import { faArrowRightFromBracket, faCircleUser, faGear } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { banners } from '../../data/banners';
import { getBrightness, setColor } from '../../api/colors';
import { Gradient } from '../gradient';
import { Option } from './components/Option';
import { Footer } from '../footer';
import { PersonalDataPage } from './components/PersonalDataPage';
import { AccSettingsPage } from './components/AccSettingsPage';

export const SettingsPage = () => {
    const [isPersonalDataActive, setPersonalDataActive] = useState<boolean>(true);
    const [isAccSettingsActive, setAccSettingsActive] = useState<boolean>(false);
    const [popUpIsOpen, setPopUpIsOpen] = useState<boolean>(false);

    const handlePersonalDataActivity = () => {
        setAccSettingsActive(false);
        setPersonalDataActive(true);
    }

    const handleAccSettingsActivity = () => {
        setAccSettingsActive(true);
        setPersonalDataActive(false);
    }

    const togglePopUp = () => {
        setPopUpIsOpen(!popUpIsOpen);
    }

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

            <div className="settings-page">
                <Header />
                <div className="settings-page__container">
                    <div className="sidebar__container">
                        <div className="options__container">
                            <Option
                                currentColor={currentColor}
                                isActive={isPersonalDataActive}
                                handleClick={handlePersonalDataActivity}
                                icon={faCircleUser}
                                label="Персональні дані"
                            />

                            <Option
                                currentColor={currentColor}
                                isActive={isAccSettingsActive}
                                handleClick={handleAccSettingsActivity}
                                icon={faGear}
                                label="Налашнування акаунта"
                            />
                        </div>

                        <div className="other-actions__container">
                            <button className="logout__btn">
                                <FontAwesomeIcon icon={faArrowRightFromBracket} className="logout-icon" />

                                Вийти з акаунта
                            </button>
                        </div>
                    </div>

                    <div className="main__container">
                        <PersonalDataPage
                            currentColor={currentColor}
                            textColor={textColor}
                            popUpIsOpen={popUpIsOpen}
                            togglePopUp={togglePopUp}
                            isBtnActive={isPersonalDataActive}
                        />

                        <AccSettingsPage
                            isBtnActive={isAccSettingsActive}
                            currentColor={currentColor}
                            textColor={textColor}
                        />
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}