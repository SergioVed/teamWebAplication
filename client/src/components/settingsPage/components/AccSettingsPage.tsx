export const AccSettingsPage = ({ isBtnActive, currentColor, textColor }: any) => {
    return (
        <div className="acc-settings__container" style={{ display: isBtnActive ? 'block' : 'none' }}>
            <div className="acc-settings__header">Налаштування акаунта</div>

            <div className="acc-settings__forms">
                <form>
                    <label htmlFor="email">
                        <p>Пошта</p>

                        <input type="text" />
                    </label>

                    <button type="submit" style={{ backgroundColor: currentColor, color: textColor }}>змінити</button>
                </form>

                <form>
                    <label htmlFor="password">
                        <p>Пароль</p>

                        <input type="text" placeholder="Введіть новий пароль" />
                    </label>

                    <button type="submit" style={{ backgroundColor: currentColor, color: textColor }}>змінити</button>
                </form>
            </div>

            <div className="acc-setting__delete-block">
                <div className="delete-block__header" style={{color: currentColor}}>
                    Видалити акаунт
                </div>

                <div className="delete-block__caption">Після видалення облікового запису шляху назад не буде</div>

                <button className="delete-block__button" style={{ backgroundColor: currentColor, color: textColor }}>видалити</button>
            </div>
        </div>
    )
}