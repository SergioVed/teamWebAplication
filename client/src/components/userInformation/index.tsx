import { useState } from "react";
import { InformationPage1 } from "./pages/page1";
import { InformationPage2 } from "./pages/page2";
import { InformationPage3 } from "./pages/page3";

export interface userInfoInt {
    name: string;
    surname: string;
    development: string[];
    technologies: string[]
}

export const userInfo: userInfoInt = {
    name: "",
    surname: "",
    development: [],
    technologies: []
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
        </div>
    )
}