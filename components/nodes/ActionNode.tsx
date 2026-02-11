
import React from 'react';
import { NodeProps } from 'reactflow';
import BaseNode from './BaseNode';

const ActionNode: React.FC<NodeProps> = ({ data, selected }) => {
  return (
    <BaseNode 
      label={data.label} 
      description={data.description} 
      icon="action" 
      selected={selected}
    >
      <div className="p-2 rounded bg-black/40 border border-slate-800 font-mono text-[9px] text-purple-300">
        GET /v1/calendar/slots
        <br />
        auth: Bearer ****
      </div>
    </BaseNode>
  );
};

export default ActionNode;
