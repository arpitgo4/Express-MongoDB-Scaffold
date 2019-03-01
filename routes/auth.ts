
/**
 * Route layer.
 *
 * Route the API calls to controllers and send the
 * response back.
 */

import chalk from 'chalk';

import { Router } from 'express'; 
import { Request, Response, NextFunction } from 'express';

import * as controllers from '../controllers';
import * as constants from '../utils/constants';
import * as utils from '../utils/utils';
import * as validationUtils from '../utils/validation-utils';

import { JWTRequest, CustomError } from '../types/Interfaces.d';
import { IUserModel } from 'Models';


const router = Router();

router.post('/user', (req: JWTRequest, res: Response, next: NextFunction) => {

});


router.post('/token', (req: JWTRequest, res: Response, next: NextFunction) => {


});

export default router;