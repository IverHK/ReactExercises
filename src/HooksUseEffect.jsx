import React, { useState, useEffect } from "react";

function HooksUseEffect(){
	const [count, setCount] = useState(0);
	const [color, setColor] = useState("green")

	useEffect(() => {
		document.title = `Count: ${count} ${color}`;
	}, [count, color]);

	function subtractCount(){
		setCount(c => c - 1);
	}
	function addCount(){
		setCount(c => c + 1);
	}
	function changeColor(){
		setColor(c => c == "green" ? "red" : "green");
	}


	const [width, setWidth] = useState(window.innerWidth);
	const [heigth, setHeight] = useState(window.innerHeigth);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		console.log('EVENT LISTENER ADDED')

		return () => {
			window.removeEventListener('reSize', handleResize);
			console.log('EVENT LISTENER REMOVED')

		}
	},[]);

	useEffect(() => {
		document.title = `Size: ${width} x ${heigth}`;
	}

	)


	function handleResize(){
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	}

	return (
		<>
		<p style={{color:color}}>count: {count}</p>
		<button onClick={addCount}>Add</button>
		<button onClick={subtractCount}>Subtract</button>
		<br></br>
		<button onClick={changeColor}>Change color</button>
		<br></br><br></br><br></br>

		<p>Window width: {width}px</p>
		<p>Window heigth: {heigth}px</p>

		
		<br></br><br></br><br></br>
		</>
		
	)
}

export default HooksUseEffect;