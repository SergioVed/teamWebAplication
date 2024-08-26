export function SelectOptionFunc(workKey: string, setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>) {
    setSelectedOptions(prevSelected => {
        const newSelection = new Set(prevSelected);

        if (newSelection.has(workKey)) {
            newSelection.delete(workKey);
        } else {
            newSelection.add(workKey);
        }

        // if (newSelection.has("Фуллстак розробка")) {
        //     ["Фронтенд розробка", "Бекенд розробка"].forEach(key => newSelection.add(key));
        // }

        return Array.from(newSelection);
    });
}