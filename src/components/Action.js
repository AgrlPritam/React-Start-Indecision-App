import React from 'react'

//Converting Previous Class based component to stateless component - Action
export const Action = (props) => (
    <div>
        <button 
        className="big-button"
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        >
            What Should I do?
        </button>
    </div>
)
// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button 
//                 onClick={this.props.handlePick}
//                 disabled={!this.props.hasOptions}
//                 >

//                     What Should I do?
//                 </button>
//             </div>
//         )
//     }
// }