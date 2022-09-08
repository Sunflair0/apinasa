import React, { useState, } from 'react';
import { NavLink } from "react-router-dom";

export default function AbButtons() {
	const [selection, setSelection] = useState("")

	return (
			<div className="content_intro tab">				
					<NavLink className={({ isActive }) => {
						return isActive ?  "tabOn"  : ""
					}} to='intro' onClick={() => setSelection(selection)}><button>Intro</button></NavLink>
					<NavLink className={({ isActive }) => {
						return isActive ?  "tabOn"  : ""
					}} to='addons' onClick={() => setSelection(selection)} ><button>Add Ons</button></NavLink>
					<NavLink className={({ isActive }) => {
						return isActive ?  "tabOn"  : ""
					}} to='game' onClick={() => setSelection(selection)}><button>Game</button></NavLink>
					<NavLink className={({ isActive }) => {
						return isActive ?  "tabOn"  : ""
					}} to='thissite' onClick={() => setSelection(selection)}><button>This Site</button></NavLink>
					<NavLink className={({ isActive }) => {
						return isActive ?  "tabOn"  : ""
					}} to='tours' onClick={() => setSelection(selection)}><button>Tours</button></NavLink>
				</div>			
	);
};