export function DeleteComponentFunc(optionIndex: number, selectedOptions: string[], setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>) {
    return (e: React.MouseEvent) => {
        e.preventDefault();
        const newOptions = selectedOptions.filter((_, index) => index !== optionIndex);
        setSelectedOptions(newOptions);
    };
}