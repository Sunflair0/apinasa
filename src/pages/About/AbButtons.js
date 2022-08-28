import React, { useState, } from 'react';
import { NavLink } from "react-router-dom";

const AbButtons = () => {
	const [selection, setSelection] = useState("")

	return (
		<>
			<div className="content_intro">
				<div className="tab">
					<NavLink className={({ isActive }) => {
						return isActive ?  "tabOn"  : "tab"
					}} to='intro' onClick={() => setSelection(selection)}><button>Intro</button></NavLink>
					<NavLink className={({ isActive }) => {
						return isActive ?  "tabOn"  : "tab"
					}} to='addons' onClick={() => setSelection(selection)} ><button>Add Ons</button></NavLink>
					<NavLink className={({ isActive }) => {
						return isActive ?  "tabOn"  : "tab"
					}} to='game' onClick={() => setSelection(selection)}><button>Game</button></NavLink>
					<NavLink className={({ isActive }) => {
						return isActive ?  "tabOn"  : "tab"
					}} to='thissite' onClick={() => setSelection(selection)}><button>This Site</button></NavLink>
					<NavLink className={({ isActive }) => {
						return isActive ?  "tabOn"  : "tab"
					}} to='tours' onClick={() => setSelection(selection)}><button>Tours</button></NavLink>
				</div>
			</div>
		</>
	);
};

export default AbButtons