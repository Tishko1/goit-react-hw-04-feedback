import PropTypes from 'prop-types';
import { FBOptionsSection, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FBOptionsSection>
      {options.map(optionEl => {
        return (
          <li key={optionEl}>
            <Button type="button" onClick={() => onLeaveFeedback(optionEl)}>
              {optionEl}
            </Button>
          </li>
        );
      })}
    </FBOptionsSection>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
