
import React from 'react';
import FlowEditor from './components/FlowEditor';

const App: React.FC = () => {
  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden bg-[#0b0f14]">
      {/* Sidebar Placeholder / Layout structure */}
      <main className="flex-1 w-full h-full relative">
        <FlowEditor />
      </main>
    </div>
  );
};

export default App;
