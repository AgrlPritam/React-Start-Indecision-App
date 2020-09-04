import React from 'react'
import {Option} from './Option'

export const Options = (props) => (
    <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
    {props.options.length === 0 && <p>Please Add an Option to Get Going!!</p>}
    {
        props.options.map((option) => (
            <Option 
                key={option} 
                optionText={option}
                handleDeleteOption={props.handleDeleteOption}
            />
        ))
    }               
    </div>
)

// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//             <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//             {this.props.options.map((option) => <Option key={option} optionText={option}/>)}               
//             </div>
//         )
//     }
// }