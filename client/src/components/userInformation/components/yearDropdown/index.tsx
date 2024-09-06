interface IYearDropdownProps{
    startYear: number,
    endYear: number,
    selectedYear: string;
    onChange: (year: string) => void;
}

export const YearDropdown = ({ startYear, endYear, onChange, selectedYear }: IYearDropdownProps) => {
    const years: number[] = [];
    
    for (let year = startYear; year <= endYear; year++) {
        years.push(year);
    }

    return (
        <select className="education__year-select" value={selectedYear} onChange={(e) => onChange(e.target.value)}>
            {years.map((year) => (
                <option key={year} value={year}>
                    {year}
                </option>
            ))}
        </select>
    );
};
