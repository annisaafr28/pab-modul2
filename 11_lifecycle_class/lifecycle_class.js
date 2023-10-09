// Class Component
class Counter extends React.Component {
    constructor(props) {
        super(props);

        // State Declaration
        this.state = { counter: 0 };

        console.log("Ini dari constructor()");
    }

    // Arrow Function
    handleButtonclick = (e) => {
        let val = parseInt(e.target.getAttribute("val"));

        // Change state value
        this.setState({ counter: this.state.counter + val });
    }

    render() {
        console.log("Ini dari render()");

        return (
            <div>
                <h1> {this.state.counter} </h1>
                <button val="+1" onClick={this.handleButtonclick}>Counter +1 </button>
                <button val="-1" onClick={this.handleButtonclick}>Counter -1 </button>
            </div>
        )
    }
    
    componentDidMount() {
        console.log("Ini dari componentDidMount()");
    }

    componentDidUpdate() {
        console.log("Ini dari componentDidUpdate()");
    }

    componentWillUnmount() {
        console.log("Ini dari componentWillUnmount()");
    }
}

// Class Component
class MyApp extends React.Component {
    constructor(props) {
        super(props);

        // State Declaration
        this.state = { showCounter: false };
    }

    handleButtonclick = () => {
        // Change state value
        this.setState({ 
            showCounter: !this.state.showCounter
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleButtonclick}>
                    {this.state.showCounter ? "Hide Counter" : "Show Counter"}
                </button>
                {this.state.showCounter && <Counter />}
            </div>
        )
    }
}

const myElement = <MyApp />;

ReactDOM.createRoot(document.getElementById('root')).render(myElement);