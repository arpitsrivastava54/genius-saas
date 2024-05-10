interface ChatType {
  isGenius: boolean;
  msg: string;
  error?: boolean;
}

interface ApiResponseType {
  success: boolean;
  msg: string;
  data?: any;
}