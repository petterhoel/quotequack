import React from 'react';
import logo from './logo.svg';
import './App.css';
import { clients } from './http/httQuack'

type State = {
    joke: string;
}

class App extends React.Component<any, any> {
        //
    state: State = {
        joke: ''
    };

    async getJoke(): Promise<any> {
        const { jokes } = clients;
        return await jokes.get('');
    }

    async componentDidMount(): Promise<any> {
        const { data } = await this.getJoke();
        this.setState({
            joke: data.joke
        });
    }

    render() {
        const { joke  } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                </header>
                { joke && <main>{joke}</main>}
            </div>)
    };
}
export default App;
