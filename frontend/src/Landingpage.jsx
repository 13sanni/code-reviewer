import { useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";
import Markdown from "react-markdown";
const Landingpage = () => {
  const [code, setCode] = useState(`write your code here
  `

  );
  const [review, setReview] = useState("");

  async function fetchCodeReview() {
    try {
      const response = await axios.post("http://localhost:3000/ai", { code });
      setReview(response.data.response);
      console.log("Code review response:", response.data.response);
    } catch (error) {
      console.error("Error fetching code review:", error);
    }
  }

  return (
    <div className="grid grid-cols-2 gap-4 h-screen">
      <div className="border-2 border-gray-400 rounded-2xl bg-black h-screen">
      <div  className="m-1 border border-white rounded-2xl p-1">
          <Editor
            height="97vh"
            language="css"
            value={code}
            onChange={setCode}
            theme="vs-dark"
            options={{
              fontSize: 14,
              minimap: { enabled: false },
              lineNumbers: "on",
              wordWrap: "on",
              
            }}
            />
            <button className="bg-red-700 border-2 absolute bottom-3 left-140 rounded-2xl w-30 font-bold justify-center"
            onClick={fetchCodeReview}>Review</button>
        </div>

      </div>

      <div className="border-2 border-gray-400 rounded-3xl bg-gray-900 p-4 text-white">
        <Markdown>{review}</Markdown>
      </div>
    </div>
  );
};

export default Landingpage;
