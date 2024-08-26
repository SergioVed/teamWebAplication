import { useState } from "react";
import { InformationPage1, InformationPage2, InformationPage3, InformationPage4 } from "./pages";
import { InformationPage5 } from "./pages/page5";

export interface userInfoInt {
    name: string,
    surname: string,
    development: string[],
    technologies: string[],
    language: string,
    graduation: string[]
}

export const userInfo: userInfoInt = {
    name: "",
    surname: "",
    development: [],
    technologies: [],
    language: "",
    graduation: []
}

export const UserForm = () => {

    const [currentStep, setCurrentStep] = useState(1)

    const nextPage = () => {
        setCurrentStep((prevStep) => prevStep + 1)
    }

    return(
        <div>
            {/* {currentStep === 1 && <InformationPage1 onNext={nextPage}/>} */}
            {currentStep === 1 && <InformationPage2 onNext={nextPage}/>}
            {/* {currentStep === 3 && <InformationPage3 onNext={nextPage}/>} */}
            {/* {currentStep === 4 && <InformationPage4 onNext={nextPage}/>} */}
            {/* {currentStep === 2 && <InformationPage5 onNext={nextPage}/>} */}
        </div>
    )
}