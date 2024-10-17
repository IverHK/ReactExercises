import ProfilePic from './assets/picture.webp'

function Card(){
	const handleClick = (e) => e.target.style.display= "none";

	return(
		<div className="card">
			<img onClick={(e) => handleClick(e)} className="card-image" src={ProfilePic} alt="Profile picture" />
			<h2 className='card-title'>Iver</h2>
			<p className='card-text'>I code and play</p>
		</div>
	);
}

export default Card