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
    <div className="relative w-full">
      {showAlert && (
        <div
          className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 text-white px-6 py-3 rounded-lg shadow-lg ${
            alertType === "correct" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {alertType === "correct" ? "Correct solution!" : "Incorrect solution!"}
        </div>
      )}
      <div className="p-4">
        <textarea
          className="w-full h-40 p-2 border rounded mb-4 text-white bg-gray-800"
          placeholder="Type your solution here..."
          value={solution}
          onChange={(e) => setSolution(e.target.value)}
        ></textarea>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SolutionComponent;
