import { useNavigate } from "react-router-dom";

const tasks = [
  { id: 1, day: "Assignment 01", title: "Component Basics", desc: "Learn custom React component rendering structures.", path: "/day1" },
  { id: 2, day: "Assignment 02", title: "Props & Styling", desc: "Pass custom attributes and style reusable UI structures.", path: "/day2" },
  { id: 3, day: "Assignment 03", title: "Advanced Props", desc: "Deeper look at children mapping and conditional render pipelines.", path: "/day3" },
  { id: 4, day: "Assignment 04", title: "State & Events", desc: "Manage local component state models and handle UI triggers.", path: "/day4" },
  { id: 5, day: "Assignment 05", title: "Effects & Hooks", desc: "Synchronize components with external systems using hooks.", path: "/day5" },
  { id: 6, day: "Assignment 06", title: "Context & Router", desc: "Handle global state share pipelines and app page pathways.", path: "/day6" },
  { id: 7, day: "Assignment 07", title: "State Mutability", desc: "Observe object and array mutations in parent/child environments.", path: "/day7" },
  { id: 8, day: "Assignment 08", title: "Forms & Validation", desc: "Handle React forms, inputs, and validation states.", path: "/day8" },
  { id: 9, day: "Assignment 09", title: "HOC (Higher Order Components)", desc: "Learn to build and use Higher Order Components to reuse component logic across views.", path: "/day9" },
  { id: 10, day: "Assignment 10", title: "Form Handling", desc: "Manage advanced form controls, validation schemas, and submit hooks.", path: "/day10" },
  { id: 11, day: "Assignment 11", title: "Form Handling", desc: "Manage advanced form controls, validation schemas, and submit hooks.", path: "/day11" },
  { id: 12, day: "Assignment 12", title: "Form Handling", desc: "Manage advanced form controls, validation schemas, and submit hooks.", path: "/day12" },
  { id: 13, day: "Assignment 13", title: "Hooks & Effects", desc: "Understand component mounting side-effects and cleanup lifecycles.", path: "/day13" },
   { id: 14, day: "Assignment 14", title: "Hooks & Effects", desc: "Understand component mounting side-effects and cleanup lifecycles.", path: "/day14" }
];

const Task = () => {
  const nav = useNavigate();

  return (
    <main className="min-h-screen bg-zinc-50/50 text-zinc-900 py-12 px-4 md:px-12">
      <div className="w-full">
        {/* Header section */}
        <header className="mb-10 bg-white rounded-xl border border-zinc-200 p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-xl font-bold tracking-tight text-zinc-900">Assignments directory</h1>
              <p className="text-zinc-550 text-sm mt-1">Review the list of React state, router, and context lab tasks.</p>
            </div>
            <button
              onClick={() => nav(-1)}
              className="px-4 py-2 border border-zinc-200 hover:bg-zinc-50 text-zinc-700 text-xs font-semibold rounded-lg transition-colors self-start sm:self-center"
            >
              Back
            </button>
          </div>
        </header>

        {/* Task Grid */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tasks.map((t) => (
            <div 
              key={t.id} 
              className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm flex flex-col justify-between hover:border-zinc-300 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold tracking-wider text-zinc-400 uppercase">
                    {t.day}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                    <span className="text-[10px] font-semibold text-zinc-500">Active</span>
                  </span>
                </div>
                <h2 className="text-base font-bold text-zinc-900 mb-2">{t.title}</h2>
                <p className="text-zinc-650 text-xs leading-relaxed mb-6">{t.desc}</p>
              </div>

              <button
                onClick={() => nav(t.path)}
                className="w-full text-center py-2.5 bg-zinc-950 hover:bg-zinc-900 text-white rounded-lg text-xs font-semibold transition-colors"
              >
                Assignment
              </button>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Task;
