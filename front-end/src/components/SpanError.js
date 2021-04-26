import React from 'react';
import PropTypes from 'prop-types';

const SpanError = (props) => {
  const { error } = props;
  return <span>{error}</span>;
};

const { string } = PropTypes;

SpanError.propTypes = {
  error: string.isRequired,
};

export default SpanError;
