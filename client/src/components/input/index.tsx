import "./index.scss"

export const Input = () => {

    return(
        <form className="inputWrapper">
            <input type="text" className="inputWrapper__input"/>
            <button className="inputWrapper__button" type="submit"></button>
        </form>
    )
}