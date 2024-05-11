import axios from "axios";

export const sendGptMessage = async (message: string) => {
 const options = {
  method: "POST",
  url: "https://chat-gpt26.p.rapidapi.com/",
  headers: {
   "content-type": "application/json",
   "Content-Type": "application/json",
   "X-RapidAPI-Key": "54bab81812msh8843a43609ceaeap12368fjsnb6416b99c11d",
   "X-RapidAPI-Host": "chat-gpt26.p.rapidapi.com",
  },
  data: {
   model: "gpt-3.5-turbo",
   messages: [
    {
     role: "user",
     content: message,
    },
   ],
  },
 };

 try {
  const resp = (await axios.request(options)).data.choices[0].message.content;
  return { success: true, data: resp };
  
 } catch (error) {
  console.log(error);
  return { success: false, data: null };
 }
};

export const generateImage = async (prompt: string) => {
 const options = {
  method: "POST",
  url: "https://chatgpt-42.p.rapidapi.com/texttoimage",
  headers: {
   "content-type": "application/json",
   "X-RapidAPI-Key": "54bab81812msh8843a43609ceaeap12368fjsnb6416b99c11d",
   "X-RapidAPI-Host": "chatgpt-42.p.rapidapi.com",
  },
  data: {
   text: prompt,
  },
 };

 try {
  const img_url = (await axios.request(options)).data.generated_image;
  return { success: true, url: img_url };
 } catch (error) {
  console.error(error);
  return { success: false, url: null };
 }
};

export const generateCode = async (prompt: string) => {
 const options = {
  method: "POST",
  url: "https://chatgpt-api8.p.rapidapi.com/",
  headers: {
   "content-type": "application/json",
   "X-RapidAPI-Key": "54bab81812msh8843a43609ceaeap12368fjsnb6416b99c11d",
   "X-RapidAPI-Host": "chatgpt-api8.p.rapidapi.com",
  },
  data: [
   {
    content: prompt + " generate only code without any explanation",
    role: "user",
   },
  ],
 };

 try {
  // const freeCountResp = await updateFreeCount();

  // if (!freeCountResp.success) return freeCountResp;

  const response = await axios.request(options);
  return { success: true, code: response.data.text };

 } catch (error) {
  console.error(error);
  return { success: false, code: null };
 }
};
