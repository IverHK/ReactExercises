import React, { useState, useRef, useEffect } from "react";

function HooksUseRef(){
	const inputRef1 = useRef(0);
	const inputRef2 = useRef(0);

	const inputRef3 = useRef(0);



	useEffect(() => {
		console.log('COMPONENT RENDERED')
	})

	function handleClick1(){
		inputRef1.current.focus();
		inputRef1.current.style.backgroundColor = 'yellow';
		inputRef2.current.style.backgroundColor = 'yellow';

	}
	function handleClick2(){
		inputRef2.current.focus();
		inputRef2.current.style.backgroundColor = 'red';
	}
	function handleClick3(){
		inputRef3.current.focus();
		inputRef3.current.style.backgroundColor = 'green';
		inputRef2.current.style.backgroundColor = 'green';

	}

	return (
		<div>
			<button onClick={handleClick1}>Click me1</button>
			<input ref={inputRef1}/>

			<button onClick={handleClick2}>Click me2</button>
			<input ref={inputRef2}/>

			<button onClick={handleClick3}>Click me3</button>
			<input ref={inputRef3}/>
		</div>
	)
}

export default HooksUseRef;