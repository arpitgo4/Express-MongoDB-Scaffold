
import jsonWebToken from 'jsonwebtoken';
import sha256 from 'crypto-js/sha256';
import chalk from 'chalk';
import Chance from 'chance';
import bcrypt from 'bcryptjs';

import * as controllers from '../controllers/index';

import env from './env';

const { JWT_SECRET, JWT_TOKEN_TTL, } = env;

const UUIDv4_REG_EXP = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

export const isValidUUIDv4 = (uuidStr: string) => UUIDv4_REG_EXP.test(uuidStr);

export const getUnixTimeStamp = () => Math.floor(new Date().getTime() / 1000);

/**
 * $2y$10$nOUIs5kJ7naTuTFkBy1veuK0kSxUFXfuaOKdOKf9xYT0KKIGSJwFa
 * |  |  |                     |
 * |  |  |                     hash-value = K0kSxUFXfuaOKdOKf9xYT0KKIGSJwFa
 * |  |  |
 * |  |  salt = nOUIs5kJ7naTuTFkBy1veu
 * |  |
 * |  cost-factor = 10 = 2^10 iterations
 * |
 * hash-algorithm = 2y = BCrypt
 */
export const generateHash = (password: string): Promise<string> => {
    const SALT_ROUNDS = 13;

    return bcrypt.hash(password, SALT_ROUNDS)
    .catch(err => {
        console.log(`[generateHash] Error generating the hash of: ${password}`);
        return Promise.reject(err);
    });
};

export const comparePassword = (password: string, hashedPassword: string): Promise<boolean> => {
    return bcrypt.compare(password, hashedPassword)
    .catch(err => {
        console.log('error', err);
        console.log(`[comparePassword] Error comparing the passwords: ${password}, hash: ${hashedPassword}`);
        return Promise.reject(err);
    });
};

export const generateJWToken = (data: object, expireTime: string = JWT_TOKEN_TTL, secret: string = JWT_SECRET): Promise<string> => {
    const options = {
        expiresIn: expireTime
    };

    return Promise.resolve(jsonWebToken.sign(data, secret, options));
};

export const calcHash = (str: string): string => sha256(str).toString();

export const toUUID = (contact_number: string) => new Chance(contact_number).guid();


(function test() {
   
})();