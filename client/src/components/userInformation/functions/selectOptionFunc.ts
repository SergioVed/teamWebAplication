export function SelectOptionFunc(
  workKey: string,
  setSelectedOptions: React.Dispatch<React.SetStateAction<{ name: string }[]>>
) {
  setSelectedOptions((prevSelected) => {
    const newSelection = new Set(prevSelected.map((option) => option.name));

    if (newSelection.has(workKey)) {
      newSelection.delete(workKey);
    } else {
      newSelection.add(workKey);
    }
    const updatedSelection = Array.from(newSelection).map((name) => ({ name }));

    return Array.from(updatedSelection);
  });
}
