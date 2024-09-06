import { banners } from "../data/banners";

export const getBrightness = (hexColor: string) => {
    const r = parseInt(hexColor.substring(1, 3), 16);
    const g = parseInt(hexColor.substring(3, 5), 16);
    const b = parseInt(hexColor.substring(5, 7), 16);
    return (r * 299 + g * 587 + b * 114) / 1000;
};

export const hexToRgba = (hex: string, opacity: number) => {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export const setColor = (
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>,
    setCurrentColor: (color: string) => void
) => {
    const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex: number) => {
            const nextIndex = (prevIndex + 1) % banners.length;

            setCurrentColor(banners[nextIndex].color);
            return nextIndex;
        });
    }, 10000);

    return () => clearInterval(intervalId);
};