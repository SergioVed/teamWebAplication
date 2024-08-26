import "./index.scss"

interface RadioBtnInt {
    index: number;
    selectedLevel: string;
    setSelectedLevel: any;
    title: string;
    description: string | undefined
}

export const RadioBtn = ({index, selectedLevel, setSelectedLevel, title, description}: RadioBtnInt) => {
  return (
    <>
      <label htmlFor={`level-${index}`} className="label-component">
        <input
          type="radio"
          checked={selectedLevel === title}
          value={title}
          name="englishLevel"
          id={`level-${index}`}
          onChange={(e) => setSelectedLevel(e.target.value)}
          className="input-component"
        />
        <span className="label-title">
          {title}
        </span>
        <p className="label-description">
          {description}
        </p>
      </label>
    </>
  );
};
