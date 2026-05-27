import { createZodDto } from 'nestjs-zod';

import { SetBanStatusCommand } from '@libs/contracts/commands';

export class SetBanStatusRequestDto extends createZodDto(SetBanStatusCommand.RequestSchema) {}
export class SetBanStatusResponseDto extends createZodDto(SetBanStatusCommand.ResponseSchema) {}
