import { Link } from 'react-router-dom';
import './style.scss';
import { StackTag } from '../userStackTag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

type TColor = {
    currentColor: string,
}

export const ProjectBlock = ({ currentColor }: TColor) => {
    const [liked, setLiked] = useState<boolean>(false);

    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <div className="projectBlock">
            <div className="projectBlock__container">
                <Link to={'/'} className="projectBlock__content">
                    <p className="projectBlock__date">Опубліковано 2 дні тому</p>

                    <div>
                        <p className="projectBlock__title">Шукаємо дизайнера для створення маркетплейсу</p>

                        <button className='like__btn' onClick={toggleLike}>
                            <FontAwesomeIcon
                                icon={liked ? faHeartSolid : faHeartRegular}
                                className='heart-icon'
                                style={{color: currentColor}}
                            />
                        </button>
                    </div>

                    <p className="projectBlock__terms" style={{color: currentColor}}>Безкоштовно, на довгий період</p>

                    <p className="projectBlock__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin in interdum nunc. Fusce vulputate nisi urna, ut eleifend velit tincidunt vel.
                        Aenean at nunc sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
                        Proin in interdum nunc. Fusce vulputate nisi urna, ut eleifend velit tincidunt vel ytewow isoa
                    </p>
                </Link>

                <div className="projectBlock__tags">
                    <StackTag />
                    <StackTag />
                </div>
            </div>
        </div>
    )
}