import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styled-components';

const Button = ({ type, id, label, disabled, onClick }) => (
  <StyledButton
    type={ type }
    data-testid={ id }
    label={ label }
    disabled={ disabled }
    onClick={ onClick }
  >
    { label }
  </StyledButton>
);

const { string, bool, func } = PropTypes;

Button.propTypes = {
  type: string.isRequired,
  id: string.isRequired,
  label: string.isRequired,
  disabled: bool.isRequired,
  onClick: func.isRequired,
};

export default Button;
