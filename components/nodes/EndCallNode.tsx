
import React from 'react';
import { NodeProps } from 'reactflow';
import BaseNode from './BaseNode';

const EndCallNode: React.FC<NodeProps> = ({ data, selected }) => {
  return (
    <BaseNode 
      label={data.label} 
      description={data.description} 
      icon="end" 
      selected={selected}
      hideSource
    >
      <div className="flex items-center gap-2 text-red-400 font-semibold text-[10px]">
        <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></div>
        CALL TERMINATED
      </div>
    </BaseNode>
  );
};

export default EndCallNode;
