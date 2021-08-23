// /src/App.tsx
import * as React from 'react';
import { DatePicker } from 'antd';

type Props = {
    toWhat: string;
};
type State = {

};

class App extends React.Component<Props, State>  {
    render(): JSX.Element {
        return <div>
            Hello {this.props.toWhat}
            <div>
                <DatePicker></DatePicker>
            </div>
        </div>;
    }
}

export default App;