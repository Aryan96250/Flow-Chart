
import React from 'react';
import { NodeProps } from 'reactflow';
import BaseNode from './BaseNode';

const ConditionNode: React.FC<NodeProps> = ({ data, selected }) => {
  return (
    <BaseNode 
      label={data.label} 
      description={data.description} 
      icon="branch" 
      selected={selected}
    >
      <div className="flex flex-col gap-2">
        <div className="text-[10px] font-medium text-slate-400 border border-slate-700 bg-slate-800 p-2 rounded flex justify-between">
          <span>If: User says "Book"</span>
          <span className="text-teal-400">#01</span>
        </div>
        <div className="text-[10px] font-medium text-slate-400 border border-slate-700 bg-slate-800 p-2 rounded flex justify-between">
          <span>Else: Fallback</span>
          <span className="text-slate-500">#02</span>
        </div>
      </div>
    </BaseNode>
  );
};

export default ConditionNode;
