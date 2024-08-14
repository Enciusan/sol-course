import React from "react";

export const SendBonus: React.FC = () => {
  return (
    <div>
      <h1>Send Bonus</h1>
      <input type="text" placeholder="Recipient Address" />
      <input type="number" placeholder="Amount" />
      <button>Send</button>
    </div>
  );
};
