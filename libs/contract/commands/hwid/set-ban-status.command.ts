import { z } from 'zod';

import { getEndpointDetails } from '../../constants';
import { REST_API } from '../../api';

export namespace SetBanStatusCommand {
    export const url = REST_API.HWID.SET_BAN_STATUS;
    export const TSQ_url = url;

    export const endpointDetails = getEndpointDetails(
        REST_API.HWID.SET_BAN_STATUS,
        'patch',
        'Set ban status of HWID device',
    );

    export const RequestSchema = z.object({
        hwid: z.string(),
        userUuid: z.string().uuid(),
        isBanned: z.boolean(),
    });

    export type Request = z.infer<typeof RequestSchema>;

    export const ResponseSchema = z.object({
        response: z.object({
            affected: z.number(),
            isBanned: z.boolean(),
        }),
    });

    export type Response = z.infer<typeof ResponseSchema>;
}
