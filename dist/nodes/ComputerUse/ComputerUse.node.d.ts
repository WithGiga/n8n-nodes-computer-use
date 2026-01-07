import { type INodeExecutionData, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
export declare class ComputerUse implements INodeType {
    description: INodeTypeDescription;
    execute(this: any): Promise<INodeExecutionData[][]>;
}
