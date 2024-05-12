import React from 'react';

import UserButton from '@/components/client-components/user-button';
import { SideBar } from "@/components/sidebar";
import FreeTrialContextProvider from '@/context/FreeTrialContext';
import { Menu } from 'lucide-react';
import { ResponsiveSidebar } from '@/components/client-components/responsive-sidebar';


interface Props {
  children: React.ReactNode
}



const layout = ({ children }: Props) => {
  return (
    <FreeTrialContextProvider>
      <div className='flex h-full'>
        <aside className='bg-mainBgColor hidden lg:block text-white w-[350px]'>
          <SideBar />
        </aside>
        <section className='w-full'>
          <header className='w-full flex justify-between items-center pe-5 pt-3'>
            <div>
              <ResponsiveSidebar />
            </div>
            <UserButton />
          </header>
          {children}
        </section>
      </div>
    </FreeTrialContextProvider>
  )
}

export default layout
