"use client";

import { useState } from "react";

export default function CoinFlipPage() {
  const [columns, setColumns] = useState<string[][]>([]);
  const [selection, setSelection] = useState<"H" | "T" | "">("");

  const handleSelect = () => {
    if (selection === "") return;

    const newColumns = [...columns];

    if (newColumns.length === 0) {
      setColumns([[selection]]);
      return;
    }

    const lastColumn = newColumns[newColumns.length - 1];
    const lastValue = lastColumn[0];

    if (lastValue === selection) {
      lastColumn.push(selection);
    } else {
      newColumns.push([selection]);
    }

    setColumns(newColumns);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Coin Flip Tracker
        </h1>

        <div className="flex items-center gap-4 mb-8">
          <select
            value={selection}
            onChange={(e) => setSelection(e.target.value as "H" | "T")}
            className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select H or T</option>
            <option value="H">H</option>
            <option value="T">T</option>
          </select>

          <button
            onClick={handleSelect}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Add
          </button>
        </div>

        <div className="flex gap-6 overflow-x-auto">
          {columns.map((col, colIndex) => (
            <div
              key={colIndex}
              className="bg-white rounded-md shadow-md p-4 min-w-[60px] text-center"
            >
              {col.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="text-lg font-semibold text-gray-700 py-1 border-b border-gray-200"
                >
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
