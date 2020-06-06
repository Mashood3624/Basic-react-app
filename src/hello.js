import React from 'react';
import "./hello.css"

function hello(props) {
  return <div>
      <p class="hello">This line is from hello.js</p>
<p>this line display <b>{props.name}</b></p>
  </div>
    
}

export default hello;