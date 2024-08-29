import { useState } from "react";
// import { InformationPage1, InformationPage2, InformationPage3, InformationPage4, InformationPage5, InformationPage6, InformationPage7 } from "./pages";
import { InformationPage1, InformationPage2, InformationPage3, InformationPage4 } from "./pages";

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
            {/* {currentStep === 5 && <InformationPage5 onNext={nextPage}/>} */}
            {/* {currentStep === 6 && <InformationPage6 onNext={nextPage}/>} */}
            {/* {currentStep === 7 && <InformationPage7 onNext={nextPage}/>} */}
        </div>
    )
}