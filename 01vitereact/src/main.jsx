import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>custom app</h1>
        </div>
    )
}


// const ReactElement = {
//     type : 'a',
//     props : {
//         href : 'https://www.google.com',
//         target : '_blank'
//     },
//     children : 'click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>visit google</a>
)

const anotherUser = "chai aur react"

const reactElement = React.createElement(
    'a', //tag
    {href: 'https://google.com',target: '_blank'},  //attributes
    'click me to visit google', //text or children
    anotherUser //other user add
)

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)
