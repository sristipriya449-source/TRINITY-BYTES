import React, { useMemo } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Position,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: '1',
    position: { x: 60, y: 80 },
    data: { label: 'API Latency' },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: {
      background: 'rgba(8, 47, 73, 0.95)',
      color: '#e2e8f0',
      border: '1px solid rgba(34, 211, 238, 0.4)',
      borderRadius: '9999px',
      padding: '10px 14px',
      width: 140,
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
    },
  },
  {
    id: '2',
    position: { x: 300, y: 80 },
    data: { label: 'Database Load' },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: {
      background: 'rgba(15, 23, 42, 0.95)',
      color: '#f8fafc',
      border: '1px solid rgba(148, 163, 184, 0.3)',
      borderRadius: '9999px',
      padding: '10px 14px',
      width: 140,
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
    },
  },
  {
    id: '3',
    position: { x: 520, y: 80 },
    data: { label: 'Slow Response' },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: {
      background: 'rgba(30, 41, 59, 0.95)',
      color: '#f8fafc',
      border: '1px solid rgba(6, 182, 212, 0.35)',
      borderRadius: '9999px',
      padding: '10px 14px',
      width: 140,
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
    },
  },
  {
    id: '4',
    position: { x: 380, y: 220 },
    data: { label: 'Customer Complaints' },
    sourcePosition: Position.Top,
    targetPosition: Position.Bottom,
    style: {
      background: 'rgba(15, 23, 42, 0.95)',
      color: '#f8fafc',
      border: '1px solid rgba(244, 114, 182, 0.3)',
      borderRadius: '9999px',
      padding: '10px 14px',
      width: 170,
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
    },
  },
  {
    id: '5',
    position: { x: 620, y: 220 },
    data: { label: 'Revenue Risk' },
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
    style: {
      background: 'rgba(76, 29, 149, 0.95)',
      color: '#f8fafc',
      border: '1px solid rgba(167, 139, 250, 0.35)',
      borderRadius: '9999px',
      padding: '10px 14px',
      width: 140,
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
    },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#22d3ee' } },
  { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: '#22d3ee' } },
  { id: 'e3-4', source: '3', target: '4', animated: true, style: { stroke: '#f472b6' } },
  { id: 'e3-5', source: '3', target: '5', animated: true, style: { stroke: '#a78bfa' } },
];

function CausalGraphPreview() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  const nodeTypes = useMemo(() => ({}), []);

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-white">AI Causal Relationship Graph</h2>
        <p className="mt-1 text-sm text-slate-400">
          Automatically generated failure dependency graph.
        </p>
      </div>

      <div className="h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          nodeTypes={nodeTypes}
          proOptions={{ hideAttribution: true }}
        >
          <Background color="#334155" gap={16} />
          <MiniMap
            nodeColor={(node) =>
              node.id === '3' ? '#06b6d4' : node.id === '4' ? '#f472b6' : node.id === '5' ? '#8b5cf6' : '#1e293b'
            }
            maskColor="rgba(2, 6, 23, 0.8)"
          />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}

export default CausalGraphPreview;
