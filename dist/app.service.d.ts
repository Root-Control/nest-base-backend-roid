import { ConfigService } from '@nestjs/config';
import { EnvConfiguration } from './@common/env-configuration/config.type';
export declare class AppService {
    private readonly configService;
    constructor(configService: ConfigService<EnvConfiguration>);
    test(): string;
}
