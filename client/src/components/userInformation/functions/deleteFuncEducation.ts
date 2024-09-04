import { IEducation } from "../../../types";

export function DeleteFuncEducation(
    optionIndex: number,
    selectedOptions: IEducation[],
    setSelectedOptions: React.Dispatch<React.SetStateAction<IEducation[]>>
) {
    return (e: React.MouseEvent) => {
        e.preventDefault();
        const newOptions = selectedOptions.filter((_, index) => index !== optionIndex);
        setSelectedOptions(newOptions);
    };
}