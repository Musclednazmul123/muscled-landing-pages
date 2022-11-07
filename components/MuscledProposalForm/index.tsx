import React,{FC} from 'react';
import ProposalForm from './ProposalForm';
import FormContent from './FormContent';

const index:FC = () => {
  return (
    <div className='flex min-h-[1375px]'>
        <ProposalForm />
        <FormContent />
    </div>
  )
}

export default index