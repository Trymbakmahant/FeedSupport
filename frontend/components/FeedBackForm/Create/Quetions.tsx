import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface IFeedbackQuetions {
  quetionType: "text" | "mcq";
  quetion: string;
  options?: string[];
}

interface QuestionsProps {
  quetions: IFeedbackQuetions[];
  setFeedBackFormData: React.Dispatch<
    React.SetStateAction<IFeedbackQuetions[]>
  >;
}

const Quetions: React.FC<QuestionsProps> = ({
  quetions,
  setFeedBackFormData,
}) => {
  const handleInputChange = (index: number, newQuestion: IFeedbackQuetions) => {
    setFeedBackFormData((prev) => {
      const updatedQuestions = [...prev];
      updatedQuestions[index] = newQuestion;
      console.log("Updated Questions:", updatedQuestions);
      return updatedQuestions;
    });
  };

  const handleAddTextQuestion = () => {
    const newQuestion: IFeedbackQuetions = {
      quetionType: "text",
      quetion: "",
    };
    setFeedBackFormData((prev) => {
      const newQuestions = [...prev, newQuestion];
      console.log("New Text Question Added:", newQuestions);
      return newQuestions;
    });
  };

  const handleAddMCQQuestion = () => {
    const newQuestion: IFeedbackQuetions = {
      quetionType: "mcq",
      quetion: "",
      options: [""],
    };
    setFeedBackFormData((prev) => {
      const newQuestions = [...prev, newQuestion];
      console.log("New MCQ Question Added:", newQuestions);
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

  const handleOptionChange = (
    qIndex: number,
    optIndex: number,
    newOption: string
  ) => {
    setFeedBackFormData((prev) => {
      const updatedQuestions = [...prev];
      const updatedOptions = updatedQuestions[qIndex].options!.map((opt, i) =>
        i === optIndex ? newOption : opt
      );
      updatedQuestions[qIndex].options = updatedOptions;
      console.log("Option Changed:", updatedOptions);
      return updatedQuestions;
    });
  };

  const handleAddOption = (qIndex: number) => {
    setFeedBackFormData((prev) => {
      const updatedQuestions = [...prev];
      if (!updatedQuestions[qIndex].options) {
        updatedQuestions[qIndex].options = [];
      }
      updatedQuestions[qIndex].options!.push("");
      console.log("Option Added:", updatedQuestions[qIndex].options);
      return updatedQuestions;
    });
  };

  const handleRemoveOption = (qIndex: number, optIndex: number) => {
    setFeedBackFormData((prev) => {
      const updatedQuestions = [...prev];
      const updatedOptions = updatedQuestions[qIndex].options!.filter(
        (_, i) => i !== optIndex
      );
      updatedQuestions[qIndex].options = updatedOptions;
      console.log("Option Removed:", updatedOptions);
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
          <Button
            size="sm"
            variant="outline"
            className="rounded-lg text-sm flex gap-1"
            type="button"
            onClick={handleAddMCQQuestion}
          >
            <Plus /> Add MCQ Que.
          </Button>
        </div>
      </div>
      {quetions.map((question, index) => (
        <div key={index} className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Input
              type="text"
              value={question.quetion}
              onChange={(e) =>
                handleInputChange(index, {
                  ...question,
                  quetion: e.target.value,
                })
              }
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
          {question.quetionType === "mcq" && (
            <div className="flex flex-col gap-1 pl-4">
              {question.options?.map((option, optIndex) => (
                <div key={optIndex} className="flex items-center gap-2">
                  <Input
                    type="text"
                    value={option}
                    onChange={(e) =>
                      handleOptionChange(index, optIndex, e.target.value)
                    }
                  />
                  <Button
                    variant="outline"
                    className="rounded-lg text-sm flex gap-1"
                    type="button"
                    onClick={() => handleRemoveOption(index, optIndex)}
                  >
                    <X size={16} />
                  </Button>
                </div>
              ))}
              <Button
                size="sm"
                variant="outline"
                className="rounded-lg text-sm flex gap-1 mt-1"
                type="button"
                onClick={() => handleAddOption(index)}
              >
                <Plus /> Add Option
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Quetions;
