interface ChatType {
  isGenius: boolean;
  msg: string;
  error?: boolean;
}

interface ApiResponseType {
  success: boolean;
  msg: string;
  data?: any;
  isTokenExpired?: boolean;
}

interface JwtPayloadType {
  id: string;
  email: string;
}