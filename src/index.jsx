import React from 'react';
import ReactDOM from 'react-dom';


var App = () => {
    return <div>
                <h1>I work</h1>
           </div>;
}
// for a class document.querySelector(".content")
ReactDOM.render(<App />, document.getElementById('content'));