
import React from 'react';
import { Bot, GitBranch, Terminal, PhoneOff } from 'lucide-react';

export const INITIAL_NODES = [
  {
    id: 'node-1',
    type: 'prompt',
    position: { x: 100, y: 100 },
    data: { 
      label: 'Assistant Setup', 
      description: 'Define the global personality and goal of the AI voice assistant.',
      icon: 'bot'
    },
  },
  {
    id: 'node-2',
    type: 'condition',
    position: { x: 450, y: 100 },
    data: { 
      label: 'Intent Router', 
      description: 'Identify if the user wants to book an appointment or ask a question.',
      icon: 'branch'
    },
  },
  {
    id: 'node-3',
    type: 'action',
    position: { x: 800, y: 50 },
    data: { 
      label: 'Check Calendar', 
      description: 'API call to Google Calendar to find available slots for next week.',
      icon: 'action'
    },
  },
  {
    id: 'node-4',
    type: 'end',
    position: { x: 800, y: 250 },
    data: { 
      label: 'Hang Up', 
      description: 'Closing message and terminate the call connection.',
      icon: 'end'
    },
  },
];

export const INITIAL_EDGES = [
  { id: 'e1-2', source: 'node-1', target: 'node-2', animated: true },
  { id: 'e2-3', source: 'node-2', target: 'node-3', animated: true, label: 'Booking' },
  { id: 'e2-4', source: 'node-2', target: 'node-4', animated: true, label: 'General' },
];

export const NODE_ICONS = {
  bot: <Bot className="w-5 h-5 text-teal-400" />,
  branch: <GitBranch className="w-5 h-5 text-blue-400" />,
  action: <Terminal className="w-5 h-5 text-purple-400" />,
  end: <PhoneOff className="w-5 h-5 text-red-400" />,
};
