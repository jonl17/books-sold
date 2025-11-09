"use client";

import { useState, useEffect } from "react";
import { entries } from "./data/entries"; // <-- or paste inline

type SortKey = "name" | "item" | "address";

export default function ChecklistPage() {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [sortBy, setSortBy] = useState<SortKey>("name");

  // Load saved state
  useEffect(() => {
    const saved = localStorage.getItem("checklist");
    if (saved) setChecked(JSON.parse(saved));
  }, []);

  // Save on updates
  useEffect(() => {
    localStorage.setItem("checklist", JSON.stringify(checked));
  }, [checked]);

  const toggle = (id: number) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const sorted = [...entries].sort((a, b) => {
    const A = (a[sortBy] || "").toString();
    const B = (b[sortBy] || "").toString();
    return A.localeCompare(B, "is");
  });

  return (
    <div style={{ padding: 24 }}>
      <h1>Checklist</h1>

      <div style={{ marginBottom: 16 }}>
        <label>
          Sort by:{" "}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortKey)}
          >
            <option value="name">Name</option>
            <option value="item">Item</option>
            <option value="address">Address</option>
          </select>
        </label>
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: 15,
        }}
      >
        <thead>
          <tr>
            <th style={th}>Done</th>
            <th style={th}>Name</th>
            <th style={th}>Item</th>
            <th style={th}>Address</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((entry) => (
            <tr key={entry.id} style={row}>
              <td style={cell}>
                <input
                  type="checkbox"
                  checked={!!checked[entry.id]}
                  onChange={() => toggle(entry.id)}
                />
              </td>
              <td style={cell}>{entry.name}</td>
              <td style={cell}>{entry.item}</td>
              <td style={cell}>{entry.address || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ✅ small shared styles
const th: React.CSSProperties = {
  borderBottom: "2px solid #ddd",
  textAlign: "left",
  padding: "6px 8px",
};

const cell: React.CSSProperties = {
  borderBottom: "1px solid #eee",
  padding: "6px 8px",
};

const row: React.CSSProperties = {
  background: "transparent",
};
