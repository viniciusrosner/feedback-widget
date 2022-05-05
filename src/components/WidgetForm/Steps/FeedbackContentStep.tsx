import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import CloseButton from "../../CloseButton";
import ScreenshotButton from "../ScreenshotButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRequested: () => void;
  onFeedbackSent: () => void;
}

const FeedbackContentStep = ({
  feedbackType,
  onFeedbackRequested,
  onFeedbackSent,
}: FeedbackContentStepProps) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState("");

  const feedbackTypesInfo = feedbackTypes[feedbackType];

  const handleSubmitFeedback = (e: FormEvent) => {
    e.preventDefault();

    console.log(comment, screenshot);

    onFeedbackSent();
  };

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            className="w-6 h-6"
            src={feedbackTypesInfo.image.source}
            alt={feedbackTypesInfo.image.alt}
          />
          {feedbackTypesInfo.title}
        </span>

        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-sky-700 focus:ring-sky-700 focus:ring-1 resize-none focus:outline-none  scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={(event) => setComment(event.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            onScreenshotTook={setScreenshot}
            screenshot={screenshot}
          />

          <button
            disabled={comment.length === 0}
            type="submit"
            className="p-2 bg-sky-700 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-sky-700"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
};

export default FeedbackContentStep;
