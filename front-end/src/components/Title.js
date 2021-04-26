import React from 'react';
import PropTypes from 'prop-types';
import { TitleHeadingOne } from './styled-components';

const Title = ({ title }) => (
  <TitleHeadingOne>
    { title }
  </TitleHeadingOne>
);

const { string } = PropTypes;

Title.propTypes = {
  title: string.isRequired,
};

export default Title;
