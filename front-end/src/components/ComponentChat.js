import React from 'react';

export default function ComponentChat() {
  return (
    <header className="msger-header">
      <div className="msger-header-title">
        <i className="fas fa-comment-alt" />
        {' '}
        SimpleChat
      </div>
      <div className="msger-header-options">
        <span>
          <i className="fas fa-cog" />
        </span>
      </div>
    </header>
  );
}
