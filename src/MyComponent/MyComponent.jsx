import React from 'react';
import ReactDOM from 'react-dom'

import './styles.less';

class MyComponent extends React.Component {
  render() {
    return (
      <div className='whole'>
        <h1>Hello from My Component</h1>
        <div className='text'>
          this is ok
        </div>
      </div>
    )
  }
}

export default MyComponent;