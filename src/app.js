class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision'
        const subtitle = 'Put Your Life in the Hands of a Computer'
        const options = ['One', 'Two', 'Four']
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handlePick() {

    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What Should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props){
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
    }
    handleRemoveAll() {

    }
    render() {
        return (
            <div>
            <button onClick={this.handleRemoveAll}>Remove All</button>
            {this.props.options.map((option) => <Option key={option} optionText={option}/>)}               
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault()

        const option = e.target.elements.option.value.trim()
        if(option) {
            alert(option)
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" required/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />,document.getElementById('app'))

//Use of Bind

// const obj = {
//     name: 'Jess',
//     getName() {
//         return this.name
//     }
// }
// const getName = obj.getName;
// console.log(getName());     //This will throw an error as getName above tries to re-access the same property. So obj.getName is able to fetch the name but getName function won't be able to fetch it

// const getName = obj.getName.bind(obj)
// console.log(getName());     //THis is correct