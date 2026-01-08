import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';

export class ComputerUse implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Computer Use WithGiga AI',
		name: 'computerUse',
		icon: 'file:computerUse.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Computer Use API',
		defaults: {
			name: 'Computer Use WithGiga AI',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'computerUseApi', required: true }],
		requestDefaults: {
			baseURL: 'https://api.withgiga.ai/v1/',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Request',
						value: 'request',
					},
				],
				default: 'request',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['request'],
					},
				},
				options: [
					{
						name: 'Send and Wait',
						value: 'sendAndWait',
						description: 'Send a request to the Computer Use API and wait for completion',
					},
				],
				default: 'sendAndWait',
			},
			{
				displayName: 'Computer Name',
				name: 'computerName',
				type: 'string',
				default: '',
				required: true,
				placeholder: 'e.g. Office-PC-01',
				displayOptions: {
					show: {
						resource: ['request'],
						operation: ['sendAndWait'],
					},
				},
				description: 'Identifier or friendly name of the computer to control',
			},
			{
				displayName: 'Platform',
				name: 'platform',
				type: 'options',
				options: [
					{
						name: 'Windows',
						value: 'windows',
					},
					{
						name: 'macOS',
						value: 'macos',
					},
					{
						name: 'Linux',
						value: 'linux',
					},
					{
						name: 'Other',
						value: 'other',
					},
				],
				default: 'windows',
				required: true,
				displayOptions: {
					show: {
						resource: ['request'],
						operation: ['sendAndWait'],
					},
				},
				description: 'Operating system of the target computer',
			},
			{
				displayName: 'Max Duration (hours)',
				name: 'maxDurationHours',
				type: 'number',
				typeOptions: {
					minValue: 0.1,
				},
				default: 1,
				required: true,
				displayOptions: {
					show: {
						resource: ['request'],
						operation: ['sendAndWait'],
					},
				},
				description: 'Maximum time the computer-use session is allowed to run',
			},
			{
				displayName: 'User Prompt',
				name: 'userPrompt',
				type: 'string',
				typeOptions: {
					rows: 3,
				},
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['request'],
						operation: ['sendAndWait'],
					},
				},
				description: 'High-level instructions provided by the end user',
			},
			{
				displayName: 'Goal Prompt',
				name: 'goalPrompt',
				type: 'string',
				typeOptions: {
					rows: 3,
				},
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['request'],
						operation: ['sendAndWait'],
					},
				},
				description: 'Concrete goal the agent should accomplish on the computer',
			},
			{
				displayName: 'System Prompt',
				name: 'systemPrompt',
				type: 'string',
				typeOptions: {
					rows: 3,
				},
				default: '',
				required: false,
				displayOptions: {
					show: {
						resource: ['request'],
						operation: ['sendAndWait'],
					},
				},
				description:
					'(Optional) System-level instructions or constraints for the agent behavior',
			},
			{
				displayName: 'Callback URL',
				name: 'callbackUrl',
				type: 'string',
				default: '',
				required: false,
				placeholder: 'https://example.com/computer-use-callback',
				displayOptions: {
					show: {
						resource: ['request'],
						operation: ['sendAndWait'],
					},
				},
				description:
					'(Optional) URL to receive asynchronous updates or final result from the session',
			},
		],
	};

}
