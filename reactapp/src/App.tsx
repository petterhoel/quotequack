import React from 'react';
import './App.css';
import { Header } from "./components/Header";
import Quote from "./components/Quote";
import { getQuote } from './quote-service';

type State = {
    quote: string;
}

class App extends React.Component<any, any> {

    state: State = {
        quote: ''
    };

    updateQuotes = async () => {
        this.setState({
            quote: await getQuote()
        });
    };

    componentDidMount(): void {
        this.updateQuotes();
        const minuteInMS = 60 * 1000;
        setInterval(this.updateQuotes, minuteInMS);
    }

    render() {
        const { quote } = this.state;
        return (
            <div className="App">
                <Header/>
                <main>
                    <Quote quote={quote}/>
                </main>
            </div>)
    };
}
export default App;
