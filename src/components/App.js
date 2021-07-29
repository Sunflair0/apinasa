import React, { forwardRef } from 'react';
import './App.js';

export default function App() {
const cubeRef =useRef();



const openCube = () => {
setDisplay(true)
};

const closeCube =()=> {
setDisplay(false);
};
if(display) {
ReactDOM.createPortal()

return (
<div className="App">

<button onClick={openCube}>Items on menu</button>
<Modal>
<h1>Big header</h1>

<p>The rest of the content</p>
</Modal>
</div>
);
}

