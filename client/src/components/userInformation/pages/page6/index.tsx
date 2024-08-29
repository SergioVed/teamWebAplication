import "./index.scss";
// import React, { useEffect, useRef, useState } from "react";
// import { NextBtn } from "../../components/nextBtn";
// import { RadioBtn } from "../../components/radioBtn";
// import { Input } from "../../../input";
// import { faSquareMinus } from "@fortawesome/free-solid-svg-icons";
// import { userInfo } from "../..";

// export const InformationPage6 = ({onNext}: {onNext: () => void}) => {
//   const [selectedOption, setSelectedOption] = useState<string>("");
//   const [inputValue, setInputValue] = useState<string>("");
//   const [disabled, setDisabled] = useState<boolean>(true)

//   useEffect(() => {
//     const isSelectedAndValid = selectedOption === "Так, є" ? inputValue.length <= 50 : selectedOption.length === 0;
//       setDisabled(isSelectedAndValid)
//   }, [selectedOption, inputValue])

//   function handleInformation(e: React.MouseEvent) {
//     e.preventDefault()

//     userInfo.expirience = inputValue
//     onNext()
//   }

//   // console.log(userInfo)

//   return (
//       <div className="InformationPage6">
//         <p className="InformationPage6__title">Чи є в тебе досвід роботи?</p>
//         <div className="InformationPage6__container">
//           <RadioBtn
//             index={1}
//             selectedLevel={selectedOption}
//             setSelectedLevel={setSelectedOption}
//             title="Так, є"
//             description=""
//           />
//           <RadioBtn
//             index={2}
//             selectedLevel={selectedOption}
//             setSelectedLevel={setSelectedOption}
//             title="Ні, немає"
//             description=""
//           />
//           {selectedOption === "Так, є" && (
//             <Input
//               icon={faSquareMinus} // Замените на ваш FontAwesome icon
//               onChange={(e) => setInputValue(e.target.value)}
//               classname="InformationPage6__container__textarea"
//               placeholder="Опиши свій досвід"
//               value={inputValue}
//               needed={false}
//               multiline={true}
//               maxLength={370}
//             />
//           )}
//         </div>
//         <NextBtn
//           classname=""
//           value="далі"
//           disabled={disabled}
//           onClick={(e) => handleInformation(e)}
//         />
//       </div>
//   );
// };
