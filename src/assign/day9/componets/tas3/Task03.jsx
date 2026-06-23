import React from "react";
import CounterDisplay from "./CounterDisplay";
import withCounter from "./withCounter";

const EnhancedCounter = withCounter(CounterDisplay);

const Task03 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-100">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-sm text-center border border-zinc-200">
        
        <h1 className="text-xl font-bold text-zinc-900 mb-6">
          withCounter HOC
        </h1>

        <EnhancedCounter />
        
      </div>
    </div>
  );
};

export default Task03;