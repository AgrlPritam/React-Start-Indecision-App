let visibility = false 

const toggleVisibility = () => {
    visibility = !visibility
    render()
}
const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggling</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide Details': 'Show Details'}
            </button>
            {visibility && (
                <div>
                    <h5>Now You See Me!!</h5>
                </div>
            )}
        </div>
    )
    ReactDOM.render(jsx,document.getElementById('app'))
}
render();