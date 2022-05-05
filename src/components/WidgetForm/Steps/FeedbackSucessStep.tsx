import CloseButton from "../../CloseButton";

import successImageUrl from "../../../assets/success.svg";

interface FeedbackSuccessStepProps {
  onFeedbackRequested: () => void;
}

const FeedbackSuccessStep = ({
  onFeedbackRequested,
}: FeedbackSuccessStepProps) => {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successImageUrl} />

        <span className="text-xl mt-2">Agradecemos o feedback!</span>

        <button
          type="button"
          onClick={onFeedbackRequested}
          className="py-2 px-6 mt-8 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
};

export default FeedbackSuccessStep;
