import React from 'react'

export const Option = (props) => (
    <div>
        {props.optionText}
        <button 
            className="button button--link"
            onClick={(e) => {
                props.handleDeleteOption(props.optionText)
            }}
        >
        Remove
        </button>
    </div>
)
// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         )
//     }
// }