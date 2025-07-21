import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SolutionComponent: React.FC = () => {
  const [solution, setSolution] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState<"correct" | "incorrect" | null>(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (solution.trim() === "3") {
      setAlertType("correct");
      setShowAlert(true);
      setTimeout(() => {
        navigate("/products");
      }, 2000);
    } else {
      setAlertType("incorrect");
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
  };

  return (
    <div className="w-full flex items-center flex-col max-w-2xl bg-black border border-white/10 p-6 rounded-xl shadow-[0_0_15px_#00BFFF] text-white relative">
      {showAlert && (
        <div
          className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 text-white px-6 py-3 rounded-lg shadow-lg ${
            alertType === "correct" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {alertType === "correct" ? "Correct solution!" : "Incorrect solution!"}
        </div>
      )}

      <textarea
        className="w-full h-40 p-3 mb-4 text-white bg-gray-900 border border-white/10 rounded resize-none focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
        placeholder="Type your solution here..."
        value={solution}
        onChange={(e) => setSolution(e.target.value)}
      ></textarea>

      <button
        onClick={handleSubmit}
        className="bg-[#00BFFF] hover:bg-blue-400 transition px-6 py-2 rounded-lg font-semibold text-black hover:scale-105 transform"
      >
        Submit
      </button>
    </div>
  );
};

export default SolutionComponent;
