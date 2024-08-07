import banner1 from '../../../../img/IMG_5124.webp';

export const Banner1 = () => {
    return (
        <div className="banner__1">
            <div className="banner1__content">
                <p>Почни свій шлях разом з нами</p>

                <button>розпочати</button>
            </div>

            <img src={banner1} alt="banner1" />
        </div>
    )
}