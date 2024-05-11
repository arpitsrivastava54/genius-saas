import React from 'react';

import UserButton from '@/components/client-components/user-button';
import { SideBar } from "@/components/sidebar";
import FreeTrialContextProvider from '@/context/FreeTrialContext';


interface Props {
  children: React.ReactNode
}



const layout = ({ children }: Props) => {
  return (
    <FreeTrialContextProvider>
      <div className='flex h-full'>
        <aside className='bg-mainBgColor text-white w-[350px]'>
          <SideBar />
        </aside>
        <section className='w-full'>
          <header className='w-full flex justify-end pe-5 pt-3'>
            <UserButton />
          </header>
          {children}
        </section>
      </div>
    </FreeTrialContextProvider>
  )
}

export default layout
