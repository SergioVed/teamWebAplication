import "./index.scss"

interface TeaxtAreaInt {
    onChange: any,
    value: string,
    maxLength: number,
    className: string,
    placeholder: string
}

export const TeaxtArea = ({onChange, value, maxLength, className, placeholder} : TeaxtAreaInt) => {

    return(
        <textarea
        maxLength={maxLength}
        className={`${className} textarea`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        />
    )
}