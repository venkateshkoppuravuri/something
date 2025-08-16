import React, { useState } from "react";
import { createRoot } from "react-dom/client";


function App() {
  const [apiResponse, setApiResponse] = useState<string>("");

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const handleTest = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/hello`);
      const data = await res.json();

      setApiResponse(JSON.stringify(data));
    } catch (err) {
      setApiResponse("Error calling API");
    }
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h1>Vertopal MVP — Frontend</h1>
      <p>Backend URL: <strong>{API_BASE_URL}</strong></p>

      <button onClick={handleTest} style={{ marginBottom: 20 }}>
        Test Backend /api/hello
      </button>

      <div>
        <strong>API Response:</strong>
        <pre>{apiResponse}</pre>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
