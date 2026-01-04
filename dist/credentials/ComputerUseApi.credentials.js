"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerUseApi = void 0;
class ComputerUseApi {
    constructor() {
        this.name = 'computerUseApi';
        this.displayName = 'Computer Use API';
        this.icon = { light: 'file:../nodes/ComputerUse/computerUse.svg', dark: 'file:../nodes/ComputerUse/computerUse.dark.svg' };
        this.documentationUrl = 'https://github.com/WithGiga/n8n-nodes-computer-use?tab=readme-ov-file#credentials';
        this.properties = [
            {
                displayName: 'API Key',
                name: 'apiKey',
                type: 'string',
                typeOptions: { password: true },
                required: true,
                default: '',
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    Authorization: '=Bearer {{$credentials.apiKey}}',
                },
            },
        };
        this.test = {
            request: {
                baseURL: 'https://api.withgiga.ai/v1/',
                url: '/test',
            },
        };
    }
}
exports.ComputerUseApi = ComputerUseApi;
//# sourceMappingURL=ComputerUseApi.credentials.js.map