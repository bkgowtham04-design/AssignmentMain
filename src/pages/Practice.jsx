import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// ==========================================
// DATA DEFINITIONS FOR TESTS 1-10 & PRACTICES 1-10
// ==========================================

const tests = [
  { id: 1, label: "Test 01", title: "Component Render State", desc: "Test multiple inputs state aggregation and render lifecycles.", path: "/test1" },
  { id: 2, label: "Test 02", title: "Props Flow & Validation", desc: "Pass props through nested components with custom type verification.", path: "/test2" },
  { id: 3, label: "Test 03", title: "Lifecycle Effects", desc: "Track component mount, update, and unmount triggers in a side-console.", path: "/test3" },
  { id: 4, label: "Test 04", title: "Context API Simulator", desc: "Simulate global context providers and consume theme/auth state.", path: "/test4" },
  { id: 5, label: "Test 05", title: "Mouse & Key Event Handlers", desc: "Observe window events, mouse positions, and keydown codes in real-time.", path: "/test5" },
  { id: 6, label: "Test 06", title: "Reducer Hook Actions", desc: "Manage structured state mutations using a standard dispatch reducer.", path: "/test6" },
  { id: 7, label: "Test 07", title: "Callback Optimization", desc: "Optimize function instantiations across renders using useCallback.", path: "/test7" },
  { id: 8, label: "Test 08", title: "Memoization Patterns", desc: "Compare execution times of expensive computations with useMemo.", path: "/test8" },
  { id: 9, label: "Test 09", title: "Custom Hook Pipelines", desc: "Encapsulate viewport sizing state into a reusable custom hook.", path: "/test9" },
  { id: 10, label: "Test 10", title: "Form Validation Schemas", desc: "Submit user registration details against strict verification rules.", path: "/test10" }
];

const practices = [
  { id: 1, label: "Practice 01", title: "Basic Counter State", desc: "Implement count increments, decrements, and resets using simple useState.", path: "/practice1" },
  { id: 2, label: "Practice 02", title: "Input Text Syncing", desc: "Bind a text input to component state and display live character counts.", path: "/practice2" },
  { id: 3, label: "Practice 03", title: "Live List Mapping", desc: "Add, remove, and filter list items dynamically with unique keys.", path: "/practice3" },
  { id: 4, label: "Practice 04", title: "Asynchronous Fetching", desc: "Simulate loading state indicators and local data hydration.", path: "/practice4" },
  { id: 5, label: "Practice 05", title: "Toggle Visibility Accordion", desc: "Collapse and expand container panels with boolean toggle states.", path: "/practice5" },
  { id: 6, label: "Practice 06", title: "Stopwatch Timer Hook", desc: "Control active intervals using start, stop, and split-time actions." },
  { id: 7, label: "Practice 07", title: "Theme Mode Switcher", desc: "Toggle background and border styles dynamically inside the card." },
  { id: 8, label: "Practice 08", title: "LocalStorage Persistence", desc: "Cache state variables in localStorage and reload them on refresh." },
  { id: 9, label: "Practice 09", title: "Dynamic Array Filter", desc: "Search and filter a collection of users using real-time text query." },
  { id: 10, label: "Practice 10", title: "Input Debounce Simulator", desc: "Delay state updates to simulate debounced API search inputs." }
];

// Component where you can import and render your custom Test and Practice widgets
const WidgetRenderer = ({ type, id }) => {
  // Example:
  // if (type === 'test' && id === 1) return <YourTest01Component />;
  return null;
};

const Workspace = ({ type, id, item, onBack }) => {
  const content = WidgetRenderer({ type, id });

  return (
    <div className="bg-white rounded-xl border border-zinc-200 p-6 md:p-8 shadow-sm">
      <div className={`flex justify-between items-start ${content ? 'border-b border-zinc-150 pb-4 mb-6' : ''}`}>
        <div>
          <span className="text-[10px] font-bold tracking-wider text-zinc-400 uppercase">{item.label}</span>
          <h2 className="text-lg font-bold text-zinc-950 mt-0.5">{item.title}</h2>
          <p className="text-zinc-550 text-xs mt-1 leading-relaxed">{item.desc}</p>
        </div>
        <button 
          onClick={onBack}
          className="px-3.5 py-1.5 border border-zinc-200 hover:bg-zinc-50 text-zinc-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
        >
          Back to Directory
        </button>
      </div>

      {content && (
        <div className="mt-4">
          {content}
        </div>
      )}
    </div>
  );
};

const Practice = () => {
  const nav = useNavigate();
  const [activeTab, setActiveTab] = useState('tests'); // 'tests' or 'practices'
  const [selectedItem, setSelectedItem] = useState(null); // { type, id, item }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedItem]);

  if (selectedItem) {
    return (
      <main className="min-h-screen bg-zinc-50/50 text-zinc-900 py-12 px-4 md:px-12">
        <div className="w-full max-w-4xl mx-auto">
          <Workspace 
            type={selectedItem.type} 
            id={selectedItem.id} 
            item={selectedItem.item} 
            onBack={() => setSelectedItem(null)} 
          />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-50/50 text-zinc-900 py-12 px-4 md:px-12">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Header section */}
        <header className="mb-10 bg-white rounded-xl border border-zinc-200 p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h1 className="text-xl font-bold tracking-tight text-zinc-950">Test & Practice Directory</h1>
              <p className="text-zinc-500 text-sm mt-1">Review the list of React mock tests and daily code practices.</p>
            </div>
            
            {/* Tabs for Category Switching */}
            <div className="flex p-1 bg-zinc-50 border border-zinc-200 rounded-xl self-start sm:self-center">
              <button
                onClick={() => setActiveTab('tests')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'tests' 
                    ? 'bg-white text-zinc-955 shadow-sm border border-zinc-200/50' 
                    : 'text-zinc-500 hover:text-zinc-955'
                }`}
              >
                Tests 1-10
              </button>
              <button
                onClick={() => setActiveTab('practices')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'practices' 
                    ? 'bg-white text-zinc-955 shadow-sm border border-zinc-200/50' 
                    : 'text-zinc-500 hover:text-zinc-955'
                }`}
              >
                Practice 1-10
              </button>
            </div>
          </div>
        </header>

        {/* Directory Grid */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activeTab === 'tests' ? (
            tests.map((t) => (
              <div 
                key={t.id} 
                className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm flex flex-col justify-between hover:border-zinc-300 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold tracking-wider text-zinc-400 uppercase">
                      {t.label}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-900" />
                      <span className="text-[10px] font-semibold text-zinc-500">Test Active</span>
                    </span>
                  </div>
                  <h2 className="text-base font-bold text-zinc-950 mb-2">{t.title}</h2>
                  <p className="text-zinc-500 text-xs leading-relaxed mb-6">{t.desc}</p>
                </div>

                <button
                  onClick={() => {
                    if (t.path) {
                      nav(t.path);
                    } else {
                      setSelectedItem({ type: 'test', id: t.id, item: t });
                    }
                  }}
                  className="w-full text-center py-2.5 bg-zinc-950 hover:bg-zinc-900 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                >
                  Start Test
                </button>
              </div>
            ))
          ) : (
            practices.map((p) => (
              <div 
                key={p.id} 
                className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm flex flex-col justify-between hover:border-zinc-300 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold tracking-wider text-zinc-400 uppercase">
                      {p.label}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                      <span className="text-[10px] font-semibold text-zinc-500">Practice Active</span>
                    </span>
                  </div>
                  <h2 className="text-base font-bold text-zinc-950 mb-2">{p.title}</h2>
                  <p className="text-zinc-500 text-xs leading-relaxed mb-6">{p.desc}</p>
                </div>

                <button
                  onClick={() => {
                    if (p.path) {
                      nav(p.path);
                    } else {
                      setSelectedItem({ type: 'practice', id: p.id, item: p });
                    }
                  }}
                  className="w-full text-center py-2.5 bg-zinc-950 hover:bg-zinc-900 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                >
                  Start Practice
                </button>
              </div>
            ))
          )}
        </section>

      </div>
    </main>
  );
};

export default Practice;
