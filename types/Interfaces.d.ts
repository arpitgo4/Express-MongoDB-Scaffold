
import { Request } from 'express';
import { IUserModel } from 'Models';

declare module '*.png' {
    const value: string;
    export default value;
}

export interface CustomError extends Error {
    err: string;
    message: string;
}

export interface JWTRequest extends Request {
    user: IUserModel;
}

export interface IEnv {
    JWT_SECRET: string;
    JWT_HEADER: string;
    SERVER_PORT: string;
    MONGO_HOST: string;
    MONGO_DB_NAME: string;
    REDIS_HOST: string;
    JWT_TOKEN_TTL: string
}