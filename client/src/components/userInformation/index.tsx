import { useState } from "react";
import { InformationPage1, InformationPage2, InformationPage3, InformationPage4, InformationPage5, InformationPage6 } from "./pages";

export interface userInfoInt {
    name: string,
    surname: string,
    development: string[],
    technologies: string[],
    language: string,
    graduation: string[],
    expirience: string
}

export const userInfo: userInfoInt = {
    name: "",
    surname: "",
    development: [],
    technologies: [],
    language: "",
    graduation: [],
    expirience: ""
}

export const UserForm = () => {

    const [currentStep, setCurrentStep] = useState(1)

    const nextPage = () => {
        setCurrentStep((prevStep) => prevStep + 1)
    }

    return(
        <div>
            {currentStep === 1 && <InformationPage1 onNext={nextPage}/>}
            {currentStep === 2 && <InformationPage2 onNext={nextPage}/>}
            {currentStep === 3 && <InformationPage3 onNext={nextPage}/>}
            {currentStep === 4 && <InformationPage4 onNext={nextPage}/>}
            {currentStep === 5 && <InformationPage5 onNext={nextPage}/>}
            {currentStep === 6 && <InformationPage6 onNext={nextPage}/>}
        </div>
    )
}