import "./index.scss";

interface RadioBtnInt {
  index: number;
  onchange: any;
  title: string;
  description: string | undefined;
  selectedLevel: string;
}

export const RadioBtn = ({
  index,
  onchange,
  title,
  description,
  selectedLevel
}: RadioBtnInt) => {
  return (
    <>
      <label htmlFor={`level-${index}`} className="label-component">
        <input
          type="radio"
          value={title}
          checked={selectedLevel === title}
          name="englishLevel"
          id={`level-${index}`}
          onChange={onchange}
          className="input-component"
        />
        <span className="label-title">{title}</span>
        {description && <p className="label-description">{description}</p>}
      </label>
    </>
  );
};
