import React, { useState, } from 'react';
import { Link } from "react-router-dom";

const AbButtons = () => {
	const [selection, setSelection] = useState("")

	return (
		<>
			<div className="content_intro">
				<div className="tab">
					<Link to='intro' onClick={() => setSelection(selection)}><button>Intro</button></Link>
					<Link to='addons' onClick={() => setSelection(selection)} ><button>Add Ons</button></Link>
					<Link to='game' onClick={() => setSelection(selection)}><button>Game</button></Link>
					<Link to='thissite' onClick={() => setSelection(selection)}><button>This Site</button></Link>
					<Link to='tours' onClick={() => setSelection(selection)}><button>Tours</button></Link>
				</div>
			</div>
		</>
	);
};

export default AbButtons