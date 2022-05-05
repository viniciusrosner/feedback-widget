import { FeedbackType, feedbackTypes } from "..";
import CloseButton from "../../CloseButton";

interface FeedbackTypeStepProps{
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

const FeedbackTypeStep = ({ onFeedbackTypeChanged }: FeedbackTypeStepProps) => {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-sky-700 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-white focus:border-white focus:outline-none transition-all text-white"
              type="button"
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default FeedbackTypeStep;
