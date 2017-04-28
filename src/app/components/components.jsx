import React from 'react';

import Chat from './chat/chat_index';
import Poll from './poll/poll_index';

export default () => {
  return (
    <div>
      <h1>Interactive Components</h1>
      <Chat />
      <Poll />
    </div>
  );
};
