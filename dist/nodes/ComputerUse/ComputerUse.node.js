"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerUse = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const user_1 = require("./resources/user");
const company_1 = require("./resources/company");
class ComputerUse {
    constructor() {
        this.description = {
            displayName: 'Computer Use',
            name: 'computerUse',
            icon: { light: 'file:computerUse.svg', dark: 'file:computerUse.dark.svg' },
            group: ['transform'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Interact with the Computer Use API',
            defaults: {
                name: 'Computer Use',
            },
            usableAsTool: true,
            inputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            outputs: [n8n_workflow_1.NodeConnectionTypes.Main],
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
                            name: 'User',
                            value: 'user',
                        },
                        {
                            name: 'Company',
                            value: 'company',
                        },
                    ],
                    default: 'user',
                },
                ...user_1.userDescription,
                ...company_1.companyDescription,
            ],
        };
    }
}
exports.ComputerUse = ComputerUse;
//# sourceMappingURL=ComputerUse.node.js.map