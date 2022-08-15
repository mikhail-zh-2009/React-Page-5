const root = ReactDOM.createRoot(document.getElementById('root'))

// Button main class
class Button extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    // Click event that will be executed when button clicked
    handleClick() {
        this.props.event()
    }

    render() {
        return (
            <button id={this.props.id} className="simple-button" onClick={this.handleClick}>
                {this.props.text}
            </button>
        )
    }
}

function App() {
    //Buttons that will be on page
    return <div id="main">
        <Button id="button-1" text="Hello World"/>
        <Button id="button-info" text="Hello World"/>
    </div>
}

root.render(<App/>)