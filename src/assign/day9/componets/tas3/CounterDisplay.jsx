import React from "react";

const CounterDisplay = ({ count, increment, decrement }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      
      <h2 className="text-lg font-semibold text-zinc-800">
        Count : {count}
      </h2>

      <div className="flex gap-4">
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          +
        </button>

        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          -
        </button>
      </div>

    </div>
  );
};

export default CounterDisplay;