import { BaseErrorResponseModel, BaseResponseModel } from '@/lib/sdk/usecase-models';
import { OIDCProvider, VO } from '../entity/auth-models';

/**
 * Response Model for {@link LoginConfigOutputPort}
 * @property x509Enabled: true if x509 login is enabled
 * @property userpassEnabled: true if userpass login is enabled
 * @property oidcEnabled: true if oidc login is enabled
 * @property oidcProviders: List of oidc providers
 * @property multiVOEnabled: true if multi vo login is enabled
 * @property voList: List of VOs
 */
export interface LoginConfigResponse extends BaseResponseModel {
    x509Enabled: boolean;
    userpassEnabled: boolean;
    oidcEnabled: boolean;
    oidcProviders: OIDCProvider[];
    multiVOEnabled: boolean;
    voList: VO[];
    rucioAuthHost: string;
}

/**
 * Error Model for {@link LoginConfigOutputPort}
 * @property {string} type - Type of error:
 * 'InvalidConfig': If the configuration file on server side is invalid
 * 'ConfigNotFound': If the configuration file or configuration variables on server side is not found
 * 'UnknownError': If the error is not one of the above
 * @property {string} message - Error message
 */
export interface LoginConfigError extends BaseErrorResponseModel {
    type: 'InvalidConfig' | 'ConfigNotFound' | 'UnknownError';
    message: string;
}
