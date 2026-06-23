import React, { useState } from "react";
import UserCard from "./UserCard";
import withBackgroundColor from "./withBackgroundColor";

const ColoredUserCard = withBackgroundColor(UserCard);

const App = () => {
  const [color, setColor] = useState("LightBlue");

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <div className="bg-white rounded-2xl border border-zinc-200 p-6 md:p-8 shadow-sm">
        <h2 className="text-lg font-bold text-zinc-950 mb-2">Task 1: withBackgroundColor HOC</h2>
        <p className="text-zinc-500 text-xs mb-8">
          A Higher-Order Component (HOC) that receives a color prop and applies it as a background to the UserCard, which itself remains free of styling logic.
        </p>

        <div className="mb-6">
          <label htmlFor="color-input" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
            Input field for color
          </label>
          <input
            id="color-input"
            type="text"
            placeholder="Enter color (e.g. Blue, LightPink, #dbeafe)"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-full px-3.5 py-2 border border-zinc-200 rounded-lg text-xs text-zinc-900 bg-zinc-50/50 focus:outline-none focus:border-zinc-950 focus:bg-white transition-all font-mono"
          />
        </div>

        <div className="mt-6">
          <span className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">
            Resulting UserCard (Wrapped by HOC)
          </span>
          <div className="border border-zinc-100 rounded-xl p-6 bg-zinc-50/50 flex justify-center items-center">
            <div className="w-full max-w-sm">
              <ColoredUserCard
                color={color}
                name="Gowtham"
                role="React Developer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;