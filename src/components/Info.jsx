import React from "react";

function Info() {
  return (
			<header>
				<div className='header--info'>
					<img
						src='/public/images/ich.jpeg'
						alt='picture of mine'
						className='header--picture'
					/>
					<h1 className='header--title'>casinca</h1>
					<h2 className='header--subtitle'>Frontend Developer</h2>
					<h3 className='header--website'>my.website</h3>
					<div className='header--btn header--btn__email'>
						<img
							className='header--btn__icon'
							src='/public/images/briefumschlag-icon.png'
							alt=''
						/>
						<a href='mailto:SwantjeRigalAntonelli@vivaldi.net'>Email</a>
					</div>{" "}
					{/* header--btn__email*/}
				</div> {/* header--info */}
			</header>
	);
}

export default Info;