'use strict';

//to convert this jsx file to browser readable format we need babel-cli (as global dependencies), babel-preset-env, babel-preset-react to be installed
// then in git terminal run -> babel src/app.js --out-file=public/scripts/app.js --presets=env,react 
//above will convert and export current file to public/scripts/app.js into browser readable format
console.log('Console is up');

//JSX- JavaScript XML
var app = {
    title: 'Indecision App',
    subtitle: 'Put Your Life in the Hands of a Computer',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderIndecisionApp();
    }
};

var removeAll = function removeAll() {
    app.options = [];
    renderIndecisionApp();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
};
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

var appRoot = document.getElementById('app');

var renderIndecisionApp = function renderIndecisionApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here Are Your Options:' : 'No Options'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'What Should I Do?'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            ),
            React.createElement(
                'button',
                { onClick: removeAll },
                'Remove All'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};
renderIndecisionApp();
