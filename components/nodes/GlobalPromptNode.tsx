
import React from 'react';
import { NodeProps } from 'reactflow';
import BaseNode from './BaseNode';

const GlobalPromptNode: React.FC<NodeProps> = ({ data, selected }) => {
  return (
    <BaseNode 
      label={data.label} 
      description={data.description} 
      icon="bot" 
      selected={selected}
      hideTarget
    >
      <div className="space-y-2">
        <div className="h-1 w-full bg-teal-500/20 rounded overflow-hidden">
          <div className="h-full w-2/3 bg-teal-500"></div>
        </div>
        <div className="flex justify-between text-[10px] text-slate-500">
          <span>Personality Score</span>
          <span>85%</span>
        </div>
      </div>
    </BaseNode>
  );
};

export default GlobalPromptNode;
