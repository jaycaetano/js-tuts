 import React from 'react';
 import ReactDOM from 'react-dom';

 const tasks = ['take out the trash', 'shovel the driveway', 'walk the dog'];
 
 const element = <ol>
     {tasks.map((task, index) => <li key={index}>{task}</li>)}
 </ol>

 ReactDOM.render(element, document.getElementById('root'));
