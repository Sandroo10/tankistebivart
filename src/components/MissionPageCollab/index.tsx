import React from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

const ImageCard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white px-4">
      <div className="flex flex-col items-center p-6 rounded-2xl shadow-2xl backdrop-blur-sm bg-opacity-10 border border-white/10">

        <Loader2
          className="w-20 h-20 text-[#00BFFF] animate-spin mb-6 drop-shadow-[0_0_10px_#00BFFF]"
        />

        <p className="text-lg font-semibold mb-6 animate-pulse text-[#00BFFF] drop-shadow-[0_0_8px_#00BFFF]">
          Joining queue...
        </p>

        <button
          onClick={() => navigate("/products")}
          className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-xl font-semibold shadow-md hover:scale-105 transform"
        >
          Leave Queue
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
