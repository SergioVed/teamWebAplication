import "./index.scss";
import styled from "styled-components";

interface RadioBtnInt {
  index: number;
  onchange: any;
  title: string;
  description: string | undefined;
  selectedLevel: string;
  currentColor: string;
}

const LabelTitle = styled.span<{ currentColor: string }>`
  position: relative;
  font-size: calc(var(--index) *1);
  font-weight: 600;
  color: #fff;  
  line-height: calc(var(--index) * 1);
  display: flex;
  gap: calc(var(--index) * .4);
  
  &::before {
  content: '';
   border: calc(var(--index) * 0.1) solid ${(props) => props.currentColor};
    width: calc(var(--index) * 0.8);
    height: calc(var(--index) * 0.8);
    margin-right: calc(var(--index) * 0.3);
    display: inline-block;
    vertical-align: top;
  }

  &::after {
  content: '';
    background: ${(props) => props.currentColor};
    width: calc(var(--index) * 0.5);
    height: calc(var(--index) * 0.5);
    position: absolute;
    top: calc(var(--index) * 0.23);
    left: calc(var(--index) * 0.21);
    transition: 300ms;
    opacity: 0;
  }
`;

export const RadioBtn = ({
  index,
  onchange,
  title,
  description,
  selectedLevel,
  currentColor
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
        
        <LabelTitle currentColor={currentColor}>
          <p>{title}</p>
        </LabelTitle>

        {description && <p className="label-description">{description}</p>}
      </label>
    </>
  );
};
