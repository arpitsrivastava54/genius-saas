"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

interface FreeTrialContextType {
  freeTrialCount: number
  fetchFreeTrialCount: () => Promise<void>
  isPro: boolean;
}

const FreeTrialContext = createContext<FreeTrialContextType>({
  freeTrialCount: 0,
  fetchFreeTrialCount: async () => {},
  isPro:false
});

export default function FreeTrialContextProvider ({children}:{
  children:React.ReactNode
}){
  
  const router = useRouter();
  const [freeTrialCount, setFreeTrialCount] = useState(0);
  const [isPro, setIsPro] = useState(false);
  

  const fetchFreeTrialCount = async () => {
    try {

      if(isPro) return;

      const resp = (await axios.get('/api/free-trial-count')).data as ApiResponseType;
      if(resp.msg == "PRO") {
        setIsPro(true)
        return;
      }

      setFreeTrialCount(resp.data);
    } catch (error:any) {
      if(error.response.status == 401) {
        toast.error(error.response.data.msg)
        await axios.get("/api/logout");
        router.refresh();
      }
    }
  }

  useEffect(() => {
    fetchFreeTrialCount()
  },[])

  return (
    <FreeTrialContext.Provider value={{freeTrialCount,fetchFreeTrialCount,isPro}}>
      {children}
    </FreeTrialContext.Provider>
  );

}


export const useFreeTrialContext = ()=> {
  return useContext(FreeTrialContext)
}