interface IYearDropdownProps{
    startYear: number,
    endYear: number,
}

export const YearDropdown = ({ startYear, endYear }: IYearDropdownProps) => {
    const years: number[] = [];
    
    for (let year = startYear; year <= endYear; year++) {
        years.push(year);
    }

    return (
        <select className="education__year-select" >
            {years.map((year) => (
                <option key={year} value={year}>
                    {year}
                </option>
            ))}
        </select>
    );
};
