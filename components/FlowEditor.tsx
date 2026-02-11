
import React, { useCallback, useMemo, useRef, useEffect } from 'react';
import ReactFlow, { 
  addEdge, 
  Background, 
  Controls, 
  MiniMap, 
  useNodesState, 
  useEdgesState, 
  Connection, 
  Edge,
  ReactFlowProvider,
  useReactFlow,
  MarkerType
} from 'reactflow';

import { INITIAL_NODES, INITIAL_EDGES } from '../constants';
import GlobalPromptNode from './nodes/GlobalPromptNode';
import ConditionNode from './nodes/ConditionNode';
import ActionNode from './nodes/ActionNode';
import EndCallNode from './nodes/EndCallNode';
import Toolbar from './Toolbar';

const nodeTypes = {
  prompt: GlobalPromptNode,
  condition: ConditionNode,
  action: ActionNode,
  end: EndCallNode,
};

const FlowEditorContent: React.FC = () => {
  const { fitView, setViewport } = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_NODES);
  const [edges, setEdges, onEdgesChange] = useEdgesState(INITIAL_EDGES);

  // Persistence: Load from LocalStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('vapi-workflow');
    if (saved) {
      try {
        const { nodes: savedNodes, edges: savedEdges } = JSON.parse(saved);
        setNodes(savedNodes);
        setEdges(savedEdges);
      } catch (e) {
        console.error('Failed to parse saved workflow', e);
      }
    }
  }, [setNodes, setEdges]);

  // Persistence: Save to LocalStorage whenever things change
  useEffect(() => {
    localStorage.setItem('vapi-workflow', JSON.stringify({ nodes, edges }));
  }, [nodes, edges]);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge({
      ...params,
      animated: true,
      style: { stroke: '#2dd4bf' },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#2dd4bf' }
    }, eds)),
    [setEdges]
  );

  const addNode = useCallback((type: string) => {
    const id = `node-${Date.now()}`;
    const newNode = {
      id,
      type,
      position: { x: Math.random() * 400 + 100, y: Math.random() * 400 + 100 },
      data: { 
        label: `New ${type.charAt(0).toUpperCase() + type.slice(1)}`, 
        description: 'Edit this description to configure the behavior.',
        icon: type === 'condition' ? 'branch' : type === 'action' ? 'action' : type === 'end' ? 'end' : 'bot'
      },
    };
    setNodes((nds) => nds.concat(newNode));
  }, [setNodes]);

  const exportWorkflow = useCallback(() => {
    const workflow = { nodes, edges };
    const blob = new Blob([JSON.stringify(workflow, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'vapi-workflow.json';
    link.click();
    URL.revokeObjectURL(url);
  }, [nodes, edges]);

  const importWorkflow = useCallback(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = (e: any) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event: any) => {
        try {
          const content = JSON.parse(event.target.result);
          if (content.nodes && content.edges) {
            setNodes(content.nodes);
            setEdges(content.edges);
            setTimeout(() => fitView(), 100);
          }
        } catch (err) {
          alert('Invalid JSON file');
        }
      };
      reader.readAsText(file);
    };
    input.click();
  }, [setNodes, setEdges, fitView]);

  const clearWorkflow = useCallback(() => {
    if (confirm('Are you sure you want to clear the entire workflow?')) {
      setNodes([]);
      setEdges([]);
    }
  }, [setNodes, setEdges]);

  return (
    <div className="w-full h-full relative">
      <Toolbar 
        onAddNode={addNode} 
        onSave={exportWorkflow} 
        onLoad={importWorkflow} 
        onClear={clearWorkflow}
        onFitView={() => fitView({ padding: 0.2, duration: 800 })}
      />
      
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        snapToGrid
        snapGrid={[15, 15]}
        defaultEdgeOptions={{
          animated: true,
          style: { stroke: '#2dd4bf' },
        }}
        className="bg-[#0b0f14]"
      >
        <Background color="#1e293b" gap={20} size={1} />
        <Controls />
        <MiniMap zoomable pannable nodeColor="#334155" />
      </ReactFlow>

      {/* Header Overlay */}
      <div className="absolute top-6 left-6 z-10 pointer-events-none">
        <h1 className="text-xl font-bold text-slate-100 flex items-center gap-2">
          <div className="w-8 h-8 bg-teal-500 rounded flex items-center justify-center text-black">V</div>
          Flow Architect
        </h1>
        <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest font-semibold">Live Sandbox</p>
      </div>

      {/* Helper Footer */}
      <div className="absolute bottom-6 left-6 z-10 pointer-events-none text-[10px] text-slate-500 flex gap-4">
        <span>[SPACE] PAN</span>
        <span>[SCRL] ZOOM</span>
        <span>[DEL] REMOVE</span>
      </div>
    </div>
  );
};

// Wrapper needed for useReactFlow hook
const FlowEditor: React.FC = () => (
  <ReactFlowProvider>
    <FlowEditorContent />
  </ReactFlowProvider>
);

export default FlowEditor;
