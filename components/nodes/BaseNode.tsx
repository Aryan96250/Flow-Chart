
import React from 'react';
import { Handle, Position } from 'reactflow';
import { NODE_ICONS } from '../../constants';

interface BaseNodeProps {
  label: string;
  description: string;
  icon: keyof typeof NODE_ICONS;
  selected?: boolean;
  children?: React.ReactNode;
  hideSource?: boolean;
  hideTarget?: boolean;
}

const BaseNode: React.FC<BaseNodeProps> = ({ 
  label, 
  description, 
  icon, 
  selected, 
  children,
  hideSource = false,
  hideTarget = false 
}) => {
  return (
    <div className={`
      relative min-w-[240px] max-w-[300px] bg-[#1a1f26] border rounded-lg shadow-2xl transition-all duration-200
      ${selected ? 'border-teal-500 ring-1 ring-teal-500' : 'border-slate-800'}
    `}>
      {/* Target Handle */}
      {!hideTarget && (
        <Handle
          type="target"
          position={Position.Left}
          className="!bg-teal-400"
        />
      )}

      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-slate-800 bg-slate-900/50 rounded-t-lg">
        <div className="p-2 bg-slate-800 rounded-md">
          {NODE_ICONS[icon]}
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-100">{label}</h3>
          <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">{icon}</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <p className="text-xs text-slate-400 leading-relaxed mb-4">
          {description}
        </p>
        {children}
      </div>

      {/* Source Handle */}
      {!hideSource && (
        <Handle
          type="source"
          position={Position.Right}
          className="!bg-teal-400"
        />
      )}
    </div>
  );
};

export default BaseNode;
