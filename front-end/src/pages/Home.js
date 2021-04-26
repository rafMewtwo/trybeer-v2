import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Home(props) {
  const { history } = props;

  useEffect(() => {
    history.push('./login');
  }, [history]);
  return (
    <div>
      <p>Teste</p>
    </div>
  );
}

Home.propTypes = {
  history: PropTypes.shape().isRequired,
};
