import _ from 'lodash';
import { IApiFile } from '../interfaces/IApiFile';
export declare function ApiFile(files: _.Many<IApiFile>, options?: Partial<{
    isRequired: boolean;
}>): MethodDecorator;
