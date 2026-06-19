import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();
  const userName = "Gowtham.B";
  const userEmail = "bkgowtham04@example.com";
  const userRole = "Student & Full Stack Developer";

  const stats = [
    { 
      label: "Total Tasks", 
      value: "7 Assignments", 
      description: "Structured React learning modules",
      bgColor: "from-pink-500/10 to-rose-500/10 border-pink-100", 
      textColor: "text-pink-700",
      indicatorColor: "bg-pink-500"
    },
    { 
      label: "Completion Status", 
      value: "In Progress", 
      description: "Completing daily react labs",
      bgColor: "from-amber-500/10 to-orange-500/10 border-amber-100", 
      textColor: "text-amber-700",
      indicatorColor: "bg-amber-500"
    },
    { 
      label: "Framework Version", 
      value: "React 19 & Vite", 
      description: "Modern React setup with SPA routing",
      bgColor: "from-cyan-500/10 to-blue-500/10 border-cyan-100", 
      textColor: "text-cyan-700",
      indicatorColor: "bg-cyan-500"
    }
  ];

  const skillChips = [
    { name: "💻 Full Stack Developer (MERN)", style: "bg-violet-50 border-violet-100 text-violet-750" },
    { name: "⚛️ React.js", style: "bg-sky-50 border-sky-100 text-sky-750" },
    { name: "🟢 Node.js", style: "bg-emerald-50 border-emerald-100 text-emerald-700" },
    { name: "🍃 MongoDB", style: "bg-green-50 border-green-100 text-green-700" },
    { name: "🌐 REST APIs", style: "bg-cyan-50 border-cyan-100 text-cyan-700" },
    { name: "📱 Responsive Web", style: "bg-blue-50 border-blue-100 text-blue-700" },
    { name: "💻 HTML5", style: "bg-orange-50 border-orange-100 text-orange-755" },
    { name: "🎨 CSS3⚡", style: "bg-teal-50 border-teal-100 text-teal-700" },
    { name: "JavaScript (ES6)", style: "bg-amber-50 border-amber-100 text-amber-800" },
    { name: "🔗 Git", style: "bg-rose-50 border-rose-100 text-rose-705" },
    { name: "🐙 GitHub", style: "bg-zinc-100 border-zinc-200 text-zinc-800" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50/50 via-fuchsia-50/30 to-sky-50/50 text-zinc-950 py-12 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Profile Card Header */}
        <div className="bg-gradient-to-r from-violet-600 via-indigo-600 to-indigo-700 rounded-2xl p-8 shadow-lg shadow-indigo-650/15 mb-8 text-white relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -left-10 -top-10 w-44 h-44 bg-fuchsia-500/20 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-full bg-white text-indigo-700 flex items-center justify-center text-2xl font-black shadow-md shadow-black/10">
                GB
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">{userName}</h1>
                <p className="text-indigo-200 text-sm font-medium">{userRole}</p>
                <p className="text-indigo-200/70 text-xs mt-0.5">{userEmail}</p>
              </div>
            </div>

            <div className="flex gap-3 w-full md:w-auto">
              <Link
                to="/task"
                className="flex-1 md:flex-none text-center px-5 py-2.5 bg-white text-indigo-700 hover:bg-indigo-50 rounded-xl text-sm font-bold transition-all shadow-md active:scale-98"
              >
                View Assignments
              </Link>
              <Link
                to="/profile"
                className="flex-1 md:flex-none text-center px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl text-sm font-bold transition-all active:scale-98"
              >
                Profile
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className={`bg-gradient-to-br ${stat.bgColor} rounded-2xl p-6 border ${stat.bgColor.split(' ')[2]} shadow-sm flex flex-col justify-between`}>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-1.5 h-1.5 rounded-full ${stat.indicatorColor}`} />
                  <p className="text-zinc-550 text-[10px] font-bold uppercase tracking-wider">{stat.label}</p>
                </div>
                <p className={`text-xl font-extrabold ${stat.textColor} mb-1`}>{stat.value}</p>
              </div>
              <p className="text-zinc-650 text-xs mt-2">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* About & Skills sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl p-8 border border-violet-100 shadow-md shadow-violet-500/5">
            <h3 className="text-lg font-extrabold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-4">About</h3>
            <div className="space-y-4 text-zinc-650 text-sm leading-relaxed">
              <p>
                I am a passionate and detail-oriented Fresher Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js) with strong expertise in modern web technologies. I have hands-on experience in building responsive, scalable, and user-friendly web applications using HTML5, CSS3, Bootstrap 5, Tailwind CSS, and JavaScript (ES6+).
              </p>
              <p>
                Through academic and personal projects, I have developed full-stack applications that include user authentication, CRUD operations, REST API integration, and database management. I am comfortable working with tools like Git and GitHub for version control and collaboration, and I follow clean coding practices to ensure maintainable and efficient code.
              </p>
              <p>
                I enjoy solving real-world problems through technology and continuously improving my skills in React.js (Vite), backend development with Node.js & Express.js, and MongoDB database design. I am also quick to adapt to new technologies and frameworks, making me a flexible and growth-oriented developer.
              </p>
              
              <div className="pt-2">
                <p className="font-bold text-zinc-800 mb-2">My strengths include:</p>
                <ul className="space-y-1.5 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500">✔</span> Strong problem-solving skills
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500">✔</span> Debugging and performance optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500">✔</span> Team collaboration and communication
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500">✔</span> Quick learning and adaptability
                  </li>
                </ul>
              </div>

              <p className="text-xs font-semibold text-zinc-550 pt-2 border-t border-zinc-100">
                I am actively seeking opportunities as a Full Stack Developer, MERN Stack Developer, Frontend Developer, or Software Developer, where I can contribute to building impactful digital products while growing professionally.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-violet-100 shadow-md shadow-violet-500/5 self-start">
            <h3 className="text-lg font-extrabold bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent mb-5">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skillChips.map((skill) => (
                <span key={skill.name} className={`px-3 py-1.5 border rounded-lg text-xs font-bold transition-transform hover:scale-[1.03] duration-200 cursor-default ${skill.style}`}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Footer */}
        <div className="bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-650 text-white rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left shadow-lg shadow-violet-650/10">
          <div>
            <p className="text-sm font-bold">Ready to review react challenges?</p>
            <p className="text-xs text-violet-100 mt-1">Navigate to the Assignments section to view day-by-day tasks.</p>
          </div>
          <Link
            to="/task"
            className="px-5 py-2.5 bg-white text-violet-700 hover:bg-violet-50 rounded-xl text-xs font-bold transition-all shadow-md active:scale-98"
          >
            Review Assignments
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;