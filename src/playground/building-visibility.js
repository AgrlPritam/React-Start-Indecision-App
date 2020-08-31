class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleTogglevisibility = this.handleTogglevisibility.bind(this)
        this.state ={
            visibility: false
        }
    }
    handleTogglevisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleTogglevisibility}>{this.state.visibility? 'Hide Details': 'Show Details'}</button>
                {this.state.visibility && (
                    <div><h5>Now You See Me</h5></div>
                )}
            </div>
        )

    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

// let visibility = false 

// const toggleVisibility = () => {
//     visibility = !visibility
//     render()
// }
// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggling</h1>
//             <button onClick={toggleVisibility}>
//                 {visibility ? 'Hide Details': 'Show Details'}
//             </button>
//             {visibility && (
//                 <div>
//                     <h5>Now You See Me!!</h5>
//                 </div>
//             )}
//         </div>
//     )
//     ReactDOM.render(jsx,document.getElementById('app'))
// }
// render();