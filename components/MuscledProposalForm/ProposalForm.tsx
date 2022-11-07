import React,{FC} from 'react'
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import FormField from "./FormField";
import {FormData} from "./FormData";


interface FormValues {
    email_adress:string,
    first_last_name:string,
    website:string,
    company:string,
    phone:string,
    comments:string
}

const ProposalForm:FC = () => {
const methods = useForm<FormValues>({
    reValidateMode:'onBlur'
});
console.log(methods.formState.errors);
const onSubmit: SubmitHandler<FormValues> = data => {
    console.log("Inside the Submit handler of react hook form")
}
console.log(17 && 15);

  return (
    <FormProvider {...methods}>
    <div className='flex flex-col items-center w-[50%]'>
        <form className='flex flex-col gap-y-[35px] w-[543px]' 
         onSubmit={methods.handleSubmit(onSubmit)}>  
          <div className='flex flex-col gap-y-[50px]'>
              <h1 className='font-bold text-[48px] leading-[75px] w-[367px]'>
                Request a FREE Proposal Now!
              </h1>
             <div className='flex flex-col gap-y-[35px]'>
                <div>
                {
                FormData.map((data,i)=><FormField {...data} key={i}/>)    
                }
                </div>
             </div>
          </div>
            <button type="submit">Button</button>
         </form>
     </div>
     </FormProvider>
  )
}

export default ProposalForm