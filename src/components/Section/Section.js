import PropTypes from 'prop-types';
import { Title, Content } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <div>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};