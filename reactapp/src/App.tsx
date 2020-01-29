import React from 'react';
import './App.css';
import { clients } from './http/httQuack'
import { Header } from "./components/Header";

type State = {
    joke: string;
}

class App extends React.Component<any, any> {
        
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
                <Header/>
                { joke && <main>{joke}</main>}
            </div>)
    };
}
export default App;
