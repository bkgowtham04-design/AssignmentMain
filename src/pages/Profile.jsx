import { useNavigate } from "react-router-dom";

const Profile = () => {
  const nav = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50/50 via-fuchsia-50/30 to-sky-50/50 text-zinc-950 py-12 px-6">
      <div className="mx-auto max-w-2xl">
        <button
          onClick={() => nav("/")}
          className="mb-8 text-violet-600 hover:text-violet-800 transition-colors flex items-center gap-2 text-xs font-bold"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Dashboard
        </button>

        <div className="bg-white rounded-2xl border border-violet-100 p-8 md:p-10 shadow-lg shadow-violet-500/5 relative overflow-hidden">
          {/* Accent decoration inside card */}
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500" />
          
          <div className="flex flex-col items-center text-center mb-8 pb-8 border-b border-zinc-100">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-violet-500 via-purple-500 to-pink-500 flex items-center justify-center mb-4 text-2xl font-black text-white shadow-md shadow-purple-500/25">
              GB
            </div>
            <h1 className="text-xl font-bold tracking-tight text-zinc-900">Gowtham B</h1>
            <p className="text-violet-600 text-xs font-bold mt-0.5">React Developer & Student</p>
          </div>

          <div className="space-y-4 text-zinc-700 text-sm">
            <div className="flex items-center gap-3">
              <span className="p-1.5 rounded-lg bg-pink-50 text-pink-600 border border-pink-100">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </span>
              <span className="text-zinc-650 font-medium">bkgowtham04@example.com</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </span>
              <span className="text-zinc-650 font-medium">Chennai, India</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="p-1.5 rounded-lg bg-violet-50 text-violet-600 border border-violet-100">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg>
              </span>
              <span className="text-zinc-650 font-medium">Member since 2026</span>
            </div>
          </div>

          <div className="mt-8 p-4 bg-violet-50/50 border border-violet-100 rounded-xl text-xs leading-relaxed text-violet-750 text-center font-medium">
            Passionate React developer focused on building clean, modular, and functional web applications with simple interfaces.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;