import React from 'react'
import AddOption from './AddOption'
import {Options} from './Options'
import {Action} from './Action'
import {Header} from './Header'

export default class IndecisionApp extends React.Component {
    state = {
        options:[]
    }
    //Below constructor is not required as we are using class-properties of babel webpack and have tweaked the functions after lifecycle method to use arrow functions
    // constructor(props) {
    //     super(props)
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    //     this.handlePick = this.handlePick.bind(this)
    //     this.handleAddOption = this.handleAddOption.bind(this)
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this)
    //     this.state = {
    //         options: []     //options: props.options if using defaultProps
    //     }
    // }

    //handle delete options
    handleDeleteOptions = () => {
        this.setState(() => ({options: []}))
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option
            )
        }))
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        alert(option)
    }

    handleAddOption = (option) => {
        if(!option){
            return 'Enter Valid Value to Add Item'
        } else if(this.state.options.indexOf(option)>-1) {
            return 'This Option Already Exists'
        }
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }))
    }

    //Lifecycle methods- Exact name is important. Below methods are class based only. Won't work in stateless components. Thats why staeless components are fast
    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if(options) {
                this.setState(() => ({ options }))
            }
        }catch (e) {
            //Do Nothing
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options',json)
        }
    }

    componentWillUnmount(){
        console.log("Component will unmount");
    }
    //end of lifecycle methods. Check Mobile bookmarks React Lifecycle

    render() {
        //const title = 'Indecision'
        const subtitle = 'Put Your Life in the Hands of a Computer'
        return (
            <div>
                <Header subtitle={subtitle} /*title={title} "this is now a default prop.check below header stateless*//>    
                <Action 
                    hasOptions={this.state.options.length>0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        )
    }
}

// IndecisionApp.defaultProps = {
//     options: []
// }


//props is a one way communication from parent to child and we use functions(hasDeleteOptions,handlePick) to reverse the flow from child to parent
//stateless functional component
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }
// ReactDOM.render(<User name="Horns" age={24} />,document.getElementById('app'))


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