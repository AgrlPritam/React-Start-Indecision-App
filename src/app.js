//to convert this jsx file to browser readable format we need babel-cli (as global dependencies), babel-preset-env, babel-preset-react to be installed
// then in git terminal run -> babel src/app.js --out-file=public/scripts/app.js --presets=env,react 
//above will convert and export current file to public/scripts/app.js into browser readable format
console.log('Console is up')

//JSX- JavaScript XML
const app = {
    title: 'Indecision App',
    subtitle: 'Put Your Life in the Hands of a Computer',
    options : []
}

const onFormSubmit = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value

    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        renderIndecisionApp()
    }
}

const removeAll = () => {
    app.options = []
    renderIndecisionApp()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}
//Basic Try of templates
// const user = {
//     name: 'Jest',
//     age: 18,
//     location: 'Bengaluru'
// }

// const getLocation = (location) => location?<p>Location: {location}</p>: undefined
// const templateTwo = (
//     <div>
//         <h1>{user.name? user.name:'User Anonymous'}</h1>
//         {(user.age && user.age >=18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );

const appRoot = document.getElementById('app')

const renderIndecisionApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here Are Your Options:' : 'No Options'}</p>
            <button disabled = {app.options.length === 0} onClick={onMakeDecision}>What Should I Do?</button>
            <ol>
                {app.options.map((option) => <li key={option}>{option}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
                <button onClick = {removeAll}>Remove All</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot)
}
renderIndecisionApp()