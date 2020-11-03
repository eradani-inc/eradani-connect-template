import configService from '../../config';
const config = configService.get();
import eradaniConnect from '@eradani-inc/eradani-connect';
import * as loggerService from '../services/logger';
import LnxCalcItf, { LnxCalcItfInput, LnxCalcItfOutput } from '../models/LnxCalcItf';

const credentials = config.eradaniConnect.credentials;
const logger = loggerService.createForContext('controllers/rpg');

// Const transport = new eradaniConnect.transports.Odbc(config.eradaniConnect.odbc);
const transport = new eradaniConnect.transports.Xml(
    '*LOCAL',
    credentials.username,
    credentials.password,
    config.eradaniConnect.xml
);

/**
 * Run the Template program.
 *
 * @param {number} num The number to input to the program
 * @returns {Promise<LnxCalcItfOutput}
 */
export async function linuxCalc(num: number): Promise<LnxCalcItfOutput> {
    logger.debug('Calling LnxCalcItf program');
    const params: LnxCalcItfInput = {
        IBMICORES: num
    };
    return transport.execute(LnxCalcItf, params) as Promise<LnxCalcItfOutput>;
}
