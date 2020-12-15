// Module LnxCalcItf

import eradaniConnect from '@eradani-inc/eradani-connect';
import configService from '../../config';

const { dataTypes } = eradaniConnect;
const config = configService.get();

// Exported function call
export default new eradaniConnect.run.Pgm('LINUX_CALC', {
    lib: config.eradaniConnect.native.objlib,
    mode: 'ile',
    params: [
        {
            name: 'IBMICORES',
            type: new dataTypes.PackedDecimal(15, 0)
        },
        {
            name: 'LINUXSERVERS',
            type: new dataTypes.PackedDecimal(16, 0),
            outputOnly: true
        }
    ]
});

// Input interface
export interface LnxCalcItfInput {
    IBMICORES: number | string;
    LINUXSERVERS?: never;
}

// Output interface
export interface LnxCalcItfOutput {
    IBMICORES: number;
    LINUXSERVERS: number;
}
