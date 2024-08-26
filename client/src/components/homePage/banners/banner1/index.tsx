import { Link } from 'react-router-dom';
import banner1 from '../../../../img/IMG_5124.webp';
import { TColor } from '../../../../types';

export const Banner1 = ({ color }: TColor) => {
    return (
        <div className="banner__1" style={{ backgroundColor: color }}>
            <div className="banner1__content">
                <h1>Почни свій шлях разом з нами</h1>

                <p>Не знаєш де знайти перший досвід роботи?
                    Тоді ми тобі в цьому допоможемо. Реєструйся та отримай свій досвід!
                </p>

                <Link to={'/sign-up'}>розпочати</Link>
            </div>

            <img src={banner1} alt="banner1" />
        </div>
    )
}