"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

interface FreeTrialContextType {
  freeTrialCount: number
  fetchFreeTrialCount: () => Promise<void>
}

const FreeTrialContext = createContext<FreeTrialContextType>({
  freeTrialCount: 0,
  fetchFreeTrialCount: async () => {}
});

export default function FreeTrialContextProvider ({children}:{
  children:React.ReactNode
}){
  
  const router = useRouter();
  const [freeTrialCount, setFreeTrialCount] = useState(0);

  const fetchFreeTrialCount = async () => {
    try {
      const resp = await axios.get('/api/free-trial-count');
      setFreeTrialCount(resp.data.data);
    } catch (error:any) {
      toast.error(error.response.data.msg)
      router.refresh();
    }
  }

  useEffect(() => {
    fetchFreeTrialCount()
  },[])

  return (
    <FreeTrialContext.Provider value={{freeTrialCount,fetchFreeTrialCount}}>
      {children}
    </FreeTrialContext.Provider>
  );

}


export const useFreeTrialContext = ()=> {
  return useContext(FreeTrialContext)
}