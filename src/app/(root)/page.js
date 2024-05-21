'use client'

import Bottom from "@/components/Bottom";
import StepDataShow from "@/components/StepDataShow";
import StepOne from "@/components/StepOne";
import StepThree from "@/components/StepThree";
import StepTwo from "@/components/StepTwo";
import { handleSetStep1, handleSetStep2, handleSetStep3 } from "@/store/ayatrioSlice";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dataStep = useSelector(state => state.stepData)

  const stepData = [
    {
      step : 1,
      heading : "Tell us about what service looking for",
      tagline : "In this step, we'll ask you what are type service you looking at.",
      component : <StepOne/>,
    },
    {
      step : 2,
      heading : "Tell us about your place",
      tagline : "In this step, we'll ask you waht are type room do you want design",
      component : <StepTwo/>,
    },
    {
      step : 3,
      heading : "Tell us about how much finance",
      tagline : "In this step, we'll ask you waht are type room do you want design",
      component : <StepThree/>,
    }
  ]
  return (
    <main >
        <div className="h-[calc(100vh-120px)] lg:h-[calc(100vh-160px)] bg-white overflow-y-scroll py-2">
        
          <StepDataShow data={stepData[dataStep.step - 1]}/>
          
        </div>
      
      <Bottom/>
    </main>
  );
}
