import React, { useRef} from 'react';
import BigCube from './BigCube';


export default function App() {
const cubeRef =useRef();

const openCube = () => {
cubeRef.current.openCube()
};

return (
<div className="App">
<button onClick={openCube}>Open Modal</button>
<BigCube ref={cubeRef}>
<h1>Modal Header</h1>
<p>
<span>More words</span>
</p>
<button onClick ={() => cubeRef.current.closeModal}>close Modal</button>
</BigCube>
</div>
);}

