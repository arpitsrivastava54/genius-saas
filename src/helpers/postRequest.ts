import axios from "axios";
import toast from "react-hot-toast";

const postRequest = async (url:string,payload:any) => {
  try {
    const resp = (await axios.post(url,JSON.stringify(payload))).data as ApiResponseType;
    return resp
  } catch (error:any) {
    toast.error(error.response.data.msg)
    return {
      ...error.response.data,
      isTokenExpired:error.response.status == 401
    } as ApiResponseType
  }

}

export default postRequest
