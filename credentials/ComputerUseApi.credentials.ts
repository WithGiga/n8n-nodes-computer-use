import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class ComputerUseApi implements ICredentialType {
	name = 'computerUseApi';

	displayName = 'Computer Use API';
	icon = { light: 'file:../nodes/ComputerUse/computerUse.svg', dark: 'file:../nodes/ComputerUse/computerUse.dark.svg' } as const;

	// Link to your community node's README
	documentationUrl = 'https://github.com/WithGiga/n8n-nodes-computer-use?tab=readme-ov-file#credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.withgiga.ai/v1/',
			url: '/test',
		},
	};
}
