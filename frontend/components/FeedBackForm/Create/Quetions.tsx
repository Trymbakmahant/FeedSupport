import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuestionsProps {
  quetions: string[];
  setFeedBackFormData: React.Dispatch<React.SetStateAction<string[]>>;
}

const Quetions: React.FC<QuestionsProps> = ({
  quetions,
  setFeedBackFormData,
}) => {
  const handleInputChange = (index: number, newQuestion: string) => {
    setFeedBackFormData((prev) => {
      const updatedQuestions = [...prev];
      updatedQuestions[index] = newQuestion;
      console.log("Updated Questions:", updatedQuestions);
      return updatedQuestions;
    });
  };

  const handleAddTextQuestion = () => {
    const newQuestion: string = "";
    setFeedBackFormData((prev) => {
      const newQuestions = [...prev, newQuestion];
      console.log("New Text Question Added:", newQuestions);
      return newQuestions;
    });
  };

  const handleRemoveQuestion = (index: number) => {
    setFeedBackFormData((prev) => {
      const updatedQuestions = prev.filter((_, i) => i !== index);
      console.log("Question Removed:", updatedQuestions);
      return updatedQuestions;
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <Label>Add your Questions</Label>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            className="rounded-lg flex gap-1"
            type="button"
            onClick={handleAddTextQuestion}
          >
            <Plus /> Add Text Que.
          </Button>
        </div>
      </div>
      {quetions.map((question, index) => (
        <div key={index} className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Input
              type="text"
              value={question}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
            <Button
              variant="outline"
              className="rounded-lg text-sm flex gap-1"
              type="button"
              onClick={() => handleRemoveQuestion(index)}
            >
              <X size={16} />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Quetions;
