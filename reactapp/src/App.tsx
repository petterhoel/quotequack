import React from 'react';
import './App.css';
import { clients } from './http/httQuack'
import { Header } from "./components/Header";
import Quote from "./components/Quote";

type State = {
    joke: string;
}

class App extends React.Component<any, any> {

    state: State = {
        joke: ''
    };

    getJoke = async () => {
        const { jokes } = clients;
        return await jokes.get('');
    };

    updateQuotes = async () => {
        const { data } = await this.getJoke();
        this.setState({
            joke: data.joke
        });
    };

    componentDidMount(): void {
        this.updateQuotes();
        const minuteInMS = 60 * 1000;
        setInterval(this.updateQuotes, minuteInMS);
    }

    render() {
        const { joke } = this.state;
        return (
            <div className="App">
                <Header/>
                <main>
                    <Quote quote={joke}/>
                </main>
            </div>)
    };
}
export default App;
