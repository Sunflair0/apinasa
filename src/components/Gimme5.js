import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Gimme5() {
	return (
		<>
			<div className="banner center">


				<NavLink
					to="/apod"
					style={{
						height: "120px",
						width: "100px",
						backgroundImage: "url(./assets/today.png)",
						borderRadius: "50px",
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat'

					}}
				>
				</NavLink>

				<NavLink
					to="/chooseApod"
					style={{
						height: "120px",
						width: "100px",
						backgroundImage: "url(./assets/choose.png)",

						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat'
					}}
				>
				</NavLink>

				<NavLink
					to="/gimme5"
					style={{
						height: "120px",
						width: "100px",
						borderRadius: "50px",
						backgroundImage: "url(./assets/gimme.png)",
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat'
					}}
				>
				</NavLink>

			</div>
		</>
	)
}
