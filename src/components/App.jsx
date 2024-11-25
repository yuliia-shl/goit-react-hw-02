import 'modern-normalize';
import '../index.css';
import { useState } from 'react';
import './App.css';
import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';

function App() {
  // Початковий стан
  const initFeedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // Стан для відгуків
  const [feedback, setFeedback] = useState(initFeedback);

  // Функція для обробки відгуків
  const updateFeedback = feedbackType => {
    setFeedback(prev => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };
  // Функція для скидання відгуків
  const handleReset = () => {
    setFeedback(initFeedback);
  };

  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round((good / totalFeedback) * 100);

  return (
    <>
      <Description />

      <Options
        feedback={feedback}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        reset={handleReset}
      />
      {totalFeedback ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
