import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Container } from './App.styled';

export function App() {
  const [options, setOptions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onButtonClick = mark => {
    setOptions(prevState => {
      return {
        ...prevState,
        [mark]: prevState[mark] + 1,
      };
    });
  };

  const countTotalFeedback = () => {
    return Object.values(options).reduce((acc, value) => acc + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback()) {
      return Math.round((options.good / countTotalFeedback()) * 100);
    }
    return 0;
  };

  const { good, neutral, bad } = options;
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <Container>
      <h1>Cafe Expresso</h1>
      <Section title="Please leave a feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={onButtonClick}
        />
      </Section>

      <Section title="Statitics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
}
