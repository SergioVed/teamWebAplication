import "./index.scss"

interface ItemComponentInt {
    name: string
}

export const ItemComponent = ( {name}: ItemComponentInt ) => {
    return(
        <p className="itemComponent">{name}</p>
    )
}