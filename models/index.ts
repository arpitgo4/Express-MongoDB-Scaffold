
/**
 * Model layer.
 *
 * Interacts with MongoDB.
 */

import chalk from 'chalk';

import { mongoDBEventEmitter } from '../utils/event-emitters';



// initialization for the mongodb will go here...
setTimeout(() => mongoDBEventEmitter.emit('ready', '[mongoose] Connection with MongoDB done'), 1000);

export {

};
