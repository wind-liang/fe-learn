// /src/main.js
import * as React from 'react';
import * as ReactDOM from 'react-dom';

type Props = {
  toWhat: string;
};
type State = {
 
};

class Hello extends React.Component<Props, State>  {
  render() {
    return <div>Hello {this.props.toWhat}</div>;
  }
}

ReactDOM.render(
  <Hello toWhat="World by jsx" />,
  document.getElementById('app')
);
