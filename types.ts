
export type NodeType = 'prompt' | 'condition' | 'action' | 'end';

export interface WorkflowData {
  nodes: any[];
  edges: any[];
}

export interface NodeData {
  label: string;
  description: string;
  icon: string;
}
