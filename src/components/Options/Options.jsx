import s from './Options.module.css';

const Options = ({ feedback, updateFeedback, totalFeedback, reset }) => {
  // const { good, neutral, bad } = feedback;

  return (
    <div className="wrapper">
      <div className={s.optionsList}>
        <button onClick={() => updateFeedback('good')}>Good</button>
        <button onClick={() => updateFeedback('neutral')}>Neutral</button>
        <button onClick={() => updateFeedback('bad')}>Bad</button>
        {totalFeedback ? (
          <button type="button" onClick={reset}>
            Reset
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Options;
