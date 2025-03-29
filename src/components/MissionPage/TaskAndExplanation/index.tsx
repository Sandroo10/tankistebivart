import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

const MathTask: React.FC = () => {
  const [showExplanation, setShowExplanation] = useState(false);

  const task = "Calculate log base 10 of 1000";
  const explanation = "Logarithms are the inverse operation of exponentiation. The base 10 logarithm of a number x is the power to which 10 must be raised to obtain x. For example, log10(1000) = 3 because 10^3 = 1000.";

  return (
    <Card className={`p-4 h-full w-1/2 mt-12 mx-auto transition-all ${showExplanation ? 'h-full' : 'h-1/2'}`}>
      <CardContent>
        <h2 className="text-xl font-semibold mb-2">{task}</h2>
        <Button
          variant="outline"
          className="mt-4 flex items-center"
          onClick={() => setShowExplanation(!showExplanation)}
        >
          {showExplanation ? "Hide Explanation" : "Show Explanation"}
          {showExplanation ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
        </Button>
        {showExplanation && <p className="mt-4 text-gray-600">{explanation}</p>}
      </CardContent>
    </Card>
  );
};

export default MathTask;
