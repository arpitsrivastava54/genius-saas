import jwt from "jsonwebtoken";

export const getDatafromToken = (token: string) => {
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayloadType;
    return data;
  } catch (error) {
    return null;
  }
}


