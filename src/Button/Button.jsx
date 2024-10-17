import styles from './Button.module.css'


function Button(){
	const handleClick = (event) => event.target.textContent = "Click me";
	const handleClickTwo = (event) => event.target.textContent = "Ouch";

	return(
		 <button onDoubleClick={(event) => handleClick(event)} 
		 	onClick={(event) => handleClickTwo(event)} 
			className={styles.button}>
				click me!</button>
	);
}

export default Button