import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();
  const userName = "Gowtham.B";
  const userEmail = "bkgowtham04@example.com";
  const userRole = "Student & Full Stack Developer";

  const stats = [
    { label: "Total Tasks", value: "7 Assignments", description: "Structured React learning modules" },
    { label: "Completion Status", value: "In Progress", description: "Completing daily react labs" },
    { label: "Framework Version", value: "React 19 & Vite", description: "Modern React setup with SPA routing" }
  ];

  const skillChips = [
    { name: "💻 Full Stack Developer (MERN)" },
    { name: "⚛️ React.js" },
    { name: "🟢 Node.js" },
    { name: "🍃 MongoDB" },
    { name: "🌐 REST APIs" },
    { name: "📱 Responsive Web" },
    { name: "💻 HTML5" },
    { name: "🎨 CSS3⚡" },
    { name: "JavaScript (ES6)" },
    { name: "🔗 Git" },
    { name: "🐙 GitHub" }
  ];

  return (
    <div className="min-h-screen bg-zinc-50/50 text-zinc-900 py-12 px-4 md:px-12">
      <div className="w-full">
        {/* Profile Card Header */}
        <div className="bg-white border border-zinc-200 rounded-xl p-8 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-full bg-zinc-950 text-white flex items-center justify-center text-xl font-bold">
                GB
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight text-zinc-900">{userName}</h1>
                <p className="text-zinc-550 text-sm">{userRole}</p>
                <p className="text-zinc-400 text-xs mt-0.5">{userEmail}</p>
              </div>
            </div>

            <div className="flex gap-3 w-full md:w-auto">
              <Link
                to="/task"
                className="flex-1 md:flex-none text-center px-5 py-2.5 bg-zinc-950 hover:bg-zinc-900 text-white rounded-lg text-sm font-semibold transition-colors"
              >
                View Assignments
              </Link>
              <Link
                to="/profile"
                className="flex-1 md:flex-none text-center px-5 py-2.5 bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-700 rounded-lg text-sm font-semibold transition-colors"
              >
                Profile
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 border border-zinc-200 shadow-sm flex flex-col justify-between">
              <div>
                <p className="text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-2">{stat.label}</p>
                <p className="text-lg font-bold text-zinc-900 mb-1">{stat.value}</p>
              </div>
              <p className="text-zinc-500 text-xs mt-2">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* About & Skills sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl p-8 border border-zinc-200 shadow-sm">
            <h3 className="text-base font-bold text-zinc-900 mb-4">About</h3>
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
                <p className="font-bold text-zinc-850 mb-2 text-zinc-900">My strengths include:</p>
                <ul className="space-y-1.5 font-medium">
                  <li className="flex items-center gap-2 text-zinc-700">
                    <span className="text-zinc-950 font-bold">✔</span> Strong problem-solving skills
                  </li>
                  <li className="flex items-center gap-2 text-zinc-700">
                    <span className="text-zinc-950 font-bold">✔</span> Debugging and performance optimization
                  </li>
                  <li className="flex items-center gap-2 text-zinc-700">
                    <span className="text-zinc-950 font-bold">✔</span> Team collaboration and communication
                  </li>
                  <li className="flex items-center gap-2 text-zinc-700">
                    <span className="text-zinc-950 font-bold">✔</span> Quick learning and adaptability
                  </li>
                </ul>
              </div>

              <p className="text-xs font-semibold text-zinc-400 pt-2 border-t border-zinc-150">
                I am actively seeking opportunities as a Full Stack Developer, MERN Stack Developer, Frontend Developer, or Software Developer, where I can contribute to building impactful digital products while growing professionally.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-zinc-200 shadow-sm self-start">
            <h3 className="text-base font-bold text-zinc-900 mb-4">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skillChips.map((skill) => (
                <span key={skill.name} className="px-3 py-1.5 border border-zinc-200 bg-zinc-50 rounded-md text-xs font-medium text-zinc-800">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Footer */}
        <div className="bg-zinc-950 text-white rounded-xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div>
            <p className="text-sm font-semibold">Ready to review react challenges?</p>
            <p className="text-xs text-zinc-400 mt-1">Navigate to the Assignments section to view day-by-day tasks.</p>
          </div>
          <Link
            to="/task"
            className="px-5 py-2 bg-white text-zinc-950 hover:bg-zinc-100 rounded-lg text-xs font-bold transition-colors"
          >
            Review Assignments
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;