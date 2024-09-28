import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

export const PersonalDataPage = ({currentColor, textColor, popUpIsOpen, togglePopUp, isBtnActive}: any) => {
    return (
        <div className="personal-data__container" style={{display: isBtnActive ? 'block' : 'none'}}>
            <div className="personal-data__header">Персональні дані</div>

            <form className='personal-data__form'>
                <div className="personal-data__form__content">
                    <div className="personal-data__form__content__inputs">
                        <label htmlFor="nickname">
                            <p>Нікнейм</p>

                            <input type="text" />
                        </label>

                        <label htmlFor="name">
                            <p>Твоє ім’я</p>

                            <input type="text" />
                        </label>

                        <label htmlFor="surname">
                            <p>Твоє прізвище</p>

                            <input type="text" />
                        </label>

                        <label htmlFor="description">
                            <p>Опис</p>

                            <textarea maxLength={850}></textarea>
                        </label>
                    </div>

                    <div className="personal-data__form__image">
                        <div className="form-image__image" onClick={togglePopUp}>
                            {/* <img src="" alt="avatar" /> */}
                        </div>

                        <FontAwesomeIcon icon={faPenToSquare} className="edit-image__btn" onClick={togglePopUp} />

                        <div className="form-image__popup" style={{ visibility: popUpIsOpen ? 'visible' : 'hidden' }}>
                            <button
                                style={{ color: '#fff' }}
                                onMouseEnter={e => e.currentTarget.style.color = currentColor}
                                onMouseLeave={e => e.currentTarget.style.color = '#fff'}>
                                змінити фото
                            </button>
                            <button
                                style={{ color: '#fff' }}
                                onMouseEnter={e => e.currentTarget.style.color = currentColor}
                                onMouseLeave={e => e.currentTarget.style.color = '#fff'}>
                                видалити фото
                            </button>
                        </div>
                    </div>
                </div>

                <div className="personal-data__form__btn">
                    <button type="submit" style={{ backgroundColor: currentColor, color: textColor }}>зберегти</button>
                </div>
            </form>
        </div>
    )
}