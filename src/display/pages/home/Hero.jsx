import React from 'react'
import Image from '../../components/utils/base/Image'
const Hero = () => {
	return (
		<>

			<section id="hero">
				<div className="gradient_mask">
					<div className="image_background">
					</div>
				</div>

				<div className="flex column gap2">
					<div className="wrapper">
						<h1 className='t_center'>Most appreciated content of the year.</h1>
					</div>
					<div className="wrapper">
						<p className='t_center text_color02'>Discover the most appreciated and highly rated content of the year, carefully <br />curated and handpicked just for you to enhance your experience.</p>
					</div>
				</div>
			</section>
		</>
	)
}

export default Hero