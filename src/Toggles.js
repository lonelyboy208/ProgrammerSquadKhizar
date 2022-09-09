import React from 'react';
import ReactDOM from 'react-dom/client';

function WarningBanner(props) {
  if (!props.warn) {
    return null;  
  }
  
  return (
    <div className="warning">
      <p className='display-1'>Warning!</p>
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {

    super(props);
    this.state = {showWarning: true};
    
    //Binding 
    this.handleToggleClick = this.handleToggleClick.bind(this);

  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleToggleClick} className='btn btn-lg btn-light'>
          {this.state.showWarning ? '1' : '0'}
        </button>
        <WarningBanner warn={this.state.showWarning} />
      </div>
    );
  }
}

export default Page;