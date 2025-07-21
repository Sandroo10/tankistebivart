import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

const MathTask: React.FC = () => {
  const [showExplanation, setShowExplanation] = useState(false);

  const task = "Calculate log base 10 of 1000";
  const explanation =
    "Logarithms are the inverse operation of exponentiation. The base 10 logarithm of a number x is the power to which 10 must be raised to obtain x. For example, log10(1000) = 3 because 10^3 = 1000.";

  return (
    <Card className="w-full max-w-2xl bg-black border border-white/10 text-white shadow-[0_0_15px_#00BFFF]">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row items-center sm:justify-around gap-5">
          <h2 className="text-2xl font-semibold text-[#00BFFF] drop-shadow-[0_0_6px_#00BFFF]">
            {task}
          </h2>
          <Button
            variant="outline"
            className="text-black flex items-center bg-neutral-200 hover:text-[#00BFFF] hover:drop-shadow-[0_0_6px_#00BFFF] transition"
            onClick={() => setShowExplanation(!showExplanation)}
          >
            {showExplanation ? "Hide Explanation" : "Show Explanation"}
            {showExplanation ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
          </Button>
        </div>
        {showExplanation && (
          <p className="mt-4 text-gray-300 leading-relaxed">{explanation}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default MathTask;
