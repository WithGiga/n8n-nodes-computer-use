import type { IAuthenticateGeneric, ICredentialTestRequest, ICredentialType, INodeProperties } from 'n8n-workflow';
export declare class ComputerUseApi implements ICredentialType {
    name: string;
    displayName: string;
    icon: {
        readonly light: "file:../nodes/ComputerUse/computerUse.svg";
        readonly dark: "file:../nodes/ComputerUse/computerUse.dark.svg";
    };
    documentationUrl: string;
    properties: INodeProperties[];
    authenticate: IAuthenticateGeneric;
    test: ICredentialTestRequest;
}
