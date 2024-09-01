export function DeleteComponentFunc(optionIndex: number, selectedOptions: {name: string}[], setSelectedOptions: React.Dispatch<React.SetStateAction<{ name: string }[]>>) {
    return (e: React.MouseEvent) => {
        e.preventDefault();
        const newOptions = selectedOptions.filter((_, index) => index !== optionIndex);
        setSelectedOptions(newOptions);
    };
}