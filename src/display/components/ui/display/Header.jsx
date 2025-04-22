import React from 'react'
import Image from '../../utils/base/Image'
import { Link } from 'react-router-dom'
import Icon from '../../utils/Icon'

const Header = () => {
	return (
		<>
			<header id="header">
				<div className="container lyt_container">

					<div className="header__logo">
						<div className="flex gap1 a_center">
							<Icon type="hexagon" size="1.2rem" />
							<h4>Element</h4>

						</div>
					</div>
					<nav>
						<ul className="header__nav">
							<li><Link>home</Link></li>
							<li><Link>components</Link></li>
							<li><Link>home</Link></li>
							<li><Link>home</Link></li>
						</ul>

					</nav>
				</div>
			</header>
		</>
	)
}

export default Header