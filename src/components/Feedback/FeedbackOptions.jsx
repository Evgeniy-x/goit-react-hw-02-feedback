import css from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.feedback}>
      <div>
        <button name="good" onClick={onLeaveFeedback}>
          Good
        </button>
        <button name="neutral" onClick={onLeaveFeedback}>
          Neutral
        </button>
        <button name="bad" onClick={onLeaveFeedback}>
          Bad
        </button>
      </div>
    </div>
  );
};

export default FeedbackOptions;
