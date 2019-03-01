
import chalk from 'chalk';
import { promisify } from 'util';
import request, { Request, Response } from 'request';

import * as constants from '../utils/constants';
import * as utils from '../utils/utils';


const [ request_get, request_post, request_put ] = [
    promisify(request.get),
    promisify(request.post),
    promisify(request.put)
];

import { 
    
} from '../models';

import uuid from 'node-uuid';
import { IUserModel } from 'Models';
import { CustomError } from 'Interfaces';


export const getUserByAuth = (email: string, password: string) => {
    
};