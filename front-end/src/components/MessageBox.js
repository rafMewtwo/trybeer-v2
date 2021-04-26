import React from 'react';
import PropTypes from 'prop-types';

function MessageBox({ isMine, emailUser, sendAt, message }) {
  const positionClass = (isMine) ? 'right-msg' : 'left-msg';
  return (
    <div className={ `msg ${positionClass}` }>
      <div className="msg-bubble">
        <div className="msg-info">
          <div
            className="msg-info-name"
            data-testid="nickname"
          >
            {emailUser}
          </div>
          <div
            className="msg-info-time"
            data-testid="message-time"
          >
            {sendAt}
          </div>
        </div>
        <div className="msg-text" data-testid="text-message">
          {message}
        </div>
      </div>
    </div>
  );
}

const { string } = PropTypes;

MessageBox.propTypes = {
  isMine: string.isRequired,
  emailUser: string.isRequired,
  sendAt: string.isRequired,
  message: string.isRequired,
};

export default MessageBox;
