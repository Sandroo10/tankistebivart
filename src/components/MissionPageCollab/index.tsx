import React from "react";
import { useNavigate } from "react-router-dom";
import Queue from "@/assets/Queue.png"


const ImageCard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center p-4 rounded-2xl shadow-lg text-center">
        <img src={Queue} alt="Queue" className="w-full h-48 object-cover rounded-lg mb-4" />
        <button
          onClick={() => navigate("/products")}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition w-48"
        >
          Leave Queue
        </button>
      </div>
    </div>
  );
};

export default ImageCard;