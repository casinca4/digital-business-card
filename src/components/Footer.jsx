import React from "react";

function Footer() {
	return (
		<footer>
			<div className='footer--icons'>
				<a
					href='https://www.linkedin.com/in/swantje-rigal-antonelli/'
					target='_blank'>
					<img
						className='footer--icon footer--icon__linkedin'
						src='/public/images/linkedin.png'
						alt='linkedin icon'
					/>
				</a>
				<a href='https://github.com/casinca4' target='_blank'>
					<img
						className='footer--icon footer--icon__github'
						src='/public/images/gitHub-icon.png'
						alt='github icon'
					/>
				</a>
			</div>
		</footer>
	);
}

export default Footer;
