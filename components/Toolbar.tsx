
import React from 'react';
import { Plus, Download, Upload, Trash2, Maximize } from 'lucide-react';

interface ToolbarProps {
  onAddNode: (type: string) => void;
  onSave: () => void;
  onLoad: () => void;
  onClear: () => void;
  onFitView: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onAddNode, onSave, onLoad, onClear, onFitView }) => {
  return (
    <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-3 bg-[#1a1f26]/80 backdrop-blur-md border border-slate-700 rounded-full shadow-2xl">
      <div className="flex items-center gap-1 border-r border-slate-700 pr-3">
        <button 
          onClick={() => onAddNode('prompt')}
          className="p-2 hover:bg-slate-700 rounded-full text-teal-400 transition-colors group relative"
          title="Add Prompt Node"
        >
          <Plus className="w-5 h-5" />
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-800 text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Add Prompt</span>
        </button>
        <button 
          onClick={() => onAddNode('condition')}
          className="p-2 hover:bg-slate-700 rounded-full text-blue-400 transition-colors group relative"
          title="Add Condition Node"
        >
          <Plus className="w-5 h-5" />
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-800 text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Add Logic</span>
        </button>
        <button 
          onClick={() => onAddNode('action')}
          className="p-2 hover:bg-slate-700 rounded-full text-purple-400 transition-colors group relative"
          title="Add Action Node"
        >
          <Plus className="w-5 h-5" />
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-800 text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Add Action</span>
        </button>
        <button 
          onClick={() => onAddNode('end')}
          className="p-2 hover:bg-slate-700 rounded-full text-red-400 transition-colors group relative"
          title="Add End Node"
        >
          <Plus className="w-5 h-5" />
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-800 text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Add End</span>
        </button>
      </div>

      <div className="flex items-center gap-2 pl-2">
        <button onClick={onFitView} className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-full transition-all" title="Fit View">
          <Maximize className="w-4 h-4" />
        </button>
        <button onClick={onSave} className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-full transition-all" title="Export JSON">
          <Download className="w-4 h-4" />
        </button>
        <button onClick={onLoad} className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-full transition-all" title="Import JSON">
          <Upload className="w-4 h-4" />
        </button>
        <button onClick={onClear} className="p-2 text-red-400/60 hover:text-red-400 hover:bg-red-400/10 rounded-full transition-all" title="Clear Canvas">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
