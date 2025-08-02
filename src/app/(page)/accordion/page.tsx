"use client";

import React, { useState } from "react";
import useAccordion from "./useAccordion";

const AccordionItem: React.FC<{ entry: any }> = ({ entry }) => {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState(entry.phone);

  return (
    <div className="pl-4 mt-2">
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition"
      >
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{entry.title}</span>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            className="font-semibold text-blue-700 bg-transparent border-b border-blue-300 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {open && entry.children.length > 0 && (
        <div className="ml-4 mt-2">
          {entry.children.map((child: any, idx: number) => (
            <AccordionItem key={idx} entry={child} />
          ))}
        </div>
      )}
    </div>
  );
};

const NestedAccordion: React.FC = () => {
  const { accordionItem } = useAccordion();

  return (
    <div className="p-6 bg-white shadow-lg rounded-md max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">📂 Phone Tree</h2>
      {accordionItem.map((entry, index) => (
        <AccordionItem key={index} entry={entry} />
      ))}
    </div>
  );
};

export default NestedAccordion;
