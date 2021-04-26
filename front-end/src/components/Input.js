import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput, StyledLabel } from './styled-components';

const Input = ({ type, id, name, label, onChange, readOnly, value }) => (

  <StyledLabel>
    { label }
    <StyledInput
      label={ label }
      type={ type }
      data-testid={ id }
      name={ name }
      onChange={ onChange }
      readOnly={ readOnly }
      value={ value }
    />
  </StyledLabel>

);

const { string, func, bool } = PropTypes;

Input.propTypes = {
  type: string.isRequired,
  id: string.isRequired,
  name: string.isRequired,
  label: string.isRequired,
  onChange: func.isRequired,
  readOnly: bool.isRequired,
  value: string.isRequired,
};

export default Input;
