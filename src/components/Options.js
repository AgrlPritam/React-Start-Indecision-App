import React from 'react'
import {Option} from './Option'

export const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button 
                className="button button--link" 
                onClick={props.handleDeleteOptions}>
                    Remove All
            </button>
        </div>

    {props.options.length === 0 && <p className="widget__message">Please Add an Option to Get Going!!</p>}
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