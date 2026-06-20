import { useNavigate } from "react-router-dom";

const Profile = () => {
  const nav = useNavigate();

  return (
    <div className="min-h-screen bg-zinc-50/50 text-zinc-900 flex flex-col items-center justify-center py-12 px-4">
      <div className="w-full max-w-lg">
        <button
          onClick={() => nav("/")}
          className="mb-6 text-zinc-500 hover:text-zinc-900 transition-colors flex items-center gap-2 text-xs font-semibold self-start cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Dashboard
        </button>

        <div className="bg-white rounded-2xl border border-zinc-200/80 p-6 md:p-8 shadow-sm">
          <div className="flex flex-col items-center text-center mb-6 pb-6 border-b border-zinc-100">
            <div className="w-20 h-20 rounded-full bg-zinc-950 flex items-center justify-center mb-4 text-xl font-semibold text-white shadow-sm ring-4 ring-zinc-50">
              GB
            </div>
            <h1 className="text-xl font-bold tracking-tight text-zinc-950">Gowtham B</h1>
            <p className="text-zinc-500 text-xs mt-1 font-medium">React Developer & Student</p>
          </div>

          <div className="space-y-3.5 text-zinc-600 text-sm">
            <div className="flex items-center gap-3">
              <span className="text-zinc-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </span>
              <span className="font-medium text-zinc-750">bkgowtham04@example.com</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-zinc-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </span>
              <span className="font-medium text-zinc-750">Chennai, India</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-zinc-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </span>
              <span className="font-medium text-zinc-750">React Developer</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-zinc-400">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.478-10-10-10z" />
                </svg>
              </span>
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-medium text-zinc-700 hover:text-zinc-950 hover:underline transition-colors"
              >
                GitHub Profile
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-zinc-400">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </span>
              <a 
                href="https://www.linkedin.com/jobs/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-medium text-zinc-700 hover:text-zinc-950 hover:underline transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          <p className="mt-6 p-4 bg-zinc-50 border border-zinc-100/80 rounded-xl text-xs leading-relaxed text-zinc-500 text-center font-medium">
            Passionate React developer focused on building clean, modular, and functional web applications with simple interfaces.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;