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
        <Button id="button-1" text="Hello World" event={function() {}}/>
        <Button id="button-info" text="Github" event={function(){window.open('https://github.com/mikhail-zh-2009/React-Page-5')}}/>
    </div>
}

root.render(<App/>)