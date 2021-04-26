import React from 'react';
import PropTypes from 'prop-types';
import { StyledLabel } from './styled-components';

const Label = ({ text }) => (
  <StyledLabel>
    { text }
  </StyledLabel>
);

const { string } = PropTypes;

Label.propTypes = {
  text: string.isRequired,
};

export default Label;
