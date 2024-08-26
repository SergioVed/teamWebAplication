import './style.scss';

export type TCurrentColor = {
    currentColor: string,
}

export const Gradient = ({ currentColor }: TCurrentColor) => {
    return (
        <div className="gradient" style={{background: `linear-gradient(180deg, #111111 50%, ${currentColor} 100%)` }}></div>
    )
}