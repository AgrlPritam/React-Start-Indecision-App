class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put Your Life in the Hands of a Computer</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What Should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <p>Options Components Here</p>
                <Option />
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>Option goes here</p>
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <p>Add Options Here</p>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />,document.getElementById('app'))