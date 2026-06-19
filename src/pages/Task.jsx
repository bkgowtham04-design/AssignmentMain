import { useNavigate } from "react-router-dom";

const tasks = [
  { id: 1, day: "Assignment 01", title: "Component Basics", desc: "Learn custom React component rendering structures.", path: "/day1", color: "from-pink-500 to-rose-500 shadow-pink-500/10 text-pink-700 bg-pink-50 border-pink-100" },
  { id: 2, day: "Assignment 02", title: "Props & Styling", desc: "Pass custom attributes and style reusable UI structures.", path: "/day2", color: "from-purple-500 to-indigo-500 shadow-indigo-500/10 text-indigo-700 bg-indigo-50 border-indigo-100" },
  { id: 3, day: "Assignment 03", title: "Advanced Props", desc: "Deeper look at children mapping and conditional render pipelines.", path: "/day3", color: "from-blue-500 to-cyan-500 shadow-cyan-500/10 text-cyan-700 bg-cyan-50 border-cyan-100" },
  { id: 4, day: "Assignment 04", title: "State & Events", desc: "Manage local component state models and handle UI triggers.", path: "/day4", color: "from-teal-500 to-emerald-500 shadow-teal-500/10 text-teal-700 bg-teal-50 border-teal-100" },
  { id: 5, day: "Assignment 05", title: "Effects & Hooks", desc: "Synchronize components with external systems using hooks.", path: "/day5", color: "from-amber-500 to-orange-500 shadow-amber-500/10 text-amber-700 bg-amber-50 border-amber-100" },
  { id: 6, day: "Assignment 06", title: "Context & Router", desc: "Handle global state share pipelines and app page pathways.", path: "/day6", color: "from-fuchsia-500 to-pink-500 shadow-fuchsia-500/10 text-fuchsia-750 bg-fuchsia-50 border-fuchsia-100" },
  { id: 7, day: "Assignment 07", title: "State Mutability", desc: "Observe object and array mutations in parent/child environments.", path: "/day7", color: "from-violet-500 to-fuchsia-500 shadow-violet-500/10 text-violet-700 bg-violet-50 border-violet-100" },
];

const Task = () => {
  const nav = useNavigate();

  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50/50 via-fuchsia-50/30 to-sky-50/50 text-zinc-950 py-12 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Header section */}
        <header className="mb-10 bg-gradient-to-r from-violet-600 via-indigo-600 to-fuchsia-600 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Assignments Directory</h1>
              <p className="text-violet-100 text-sm mt-1">Review the list of React state, router, and context lab tasks.</p>
            </div>
            <button
              onClick={() => nav(-1)}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold rounded-xl transition-all active:scale-98"
            >
              Back
            </button>
          </div>
        </header>

        {/* Task Cards Grid */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tasks.map((t) => (
            <div key={t.id} className="bg-white rounded-2xl border border-violet-100 p-6 shadow-md shadow-violet-500/5 flex flex-col justify-between hover:border-violet-300 transition-all duration-300 hover:-translate-y-0.5">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-extrabold tracking-wider uppercase px-2 py-0.5 rounded border ${t.color.split(' ').slice(2).join(' ')}`}>
                    {t.day}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-zinc-500">Live</span>
                  </span>
                </div>
                <h2 className="text-base font-extrabold text-zinc-900 mb-2">{t.title}</h2>
                <p className="text-zinc-550 text-xs leading-relaxed mb-6">{t.desc}</p>
              </div>

              <button
                onClick={() => nav(t.path)}
                className={`w-full text-center py-2.5 bg-gradient-to-r ${t.color.split(' ').slice(0, 2).join(' ')} text-white rounded-xl text-xs font-bold transition-all shadow-md ${t.color.split(' ')[2]} hover:opacity-90 active:scale-98`}
              >
                Launch Assignment
              </button>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Task;
