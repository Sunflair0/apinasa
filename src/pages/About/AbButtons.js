import React, { useState, } from 'react';
import { NavLink } from "react-router-dom";

const AbButtons = () => {
	const [selection, setSelection] = useState("")

	return (
		<>
			<div className="content_intro">
				<div className="tab">
					<NavLink style={({ isActive }) => {
						return isActive ? { fontWeight: 'bold', background: '#f5d99d' } : {}
					}} to='intro' onClick={() => setSelection(selection)}><button>Intro</button></NavLink>
					<NavLink style={({ isActive }) => {
						return isActive ? { fontWeight: 'bold', background: '#f5d99d' } : {}
					}} to='addons' onClick={() => setSelection(selection)} ><button>Add Ons</button></NavLink>
					<NavLink style={({ isActive }) => {
						return isActive ? { fontWeight: 'bold', background: '#f5d99d' } : {}
					}} to='game' onClick={() => setSelection(selection)}><button>Game</button></NavLink>
					<NavLink style={({ isActive }) => {
						return isActive ? { fontWeight: 'bold', background: '#f5d99d' } : {}
					}} to='thissite' onClick={() => setSelection(selection)}><button>This Site</button></NavLink>
					<NavLink style={({ isActive }) => {
						return isActive ? { fontWeight: 'bold', background: '#f5d99d' } : {}
					}} to='tours' onClick={() => setSelection(selection)}><button>Tours</button></NavLink>

				</div>
			</div>
		</>
	);
};

export default AbButtons