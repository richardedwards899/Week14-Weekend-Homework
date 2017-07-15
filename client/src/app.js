import React from 'react';
import ReactDOM from 'react-dom';

import GuessWhoBoard from './components/GuessWhoBoard.jsx';

window.addEventListener('load', function () {
  ReactDOM.render(
    <GuessWhoBoard/>,
    document.getElementById('app')
  );
});
