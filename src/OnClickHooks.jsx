import react, {useState} from 'react';

function MyComponent(){
	const[name, setName] = useState("Guest");
	const[age, setAge] = useState(0);
	const[isEmployed, setIsEmployed] = useState('unknown')
	const updateName = () => {
		setName("Iver");
	}
	const updateAge = () => {
		setAge(age+1)
	}
	const updateIsEmplyed = () => {
		setIsEmployed(!isEmployed)
	}
	

	return(<div>
		<p>Name: {name}</p>
		<button onClick={updateName}>Set Name</button>

		<p>age: {age}</p>
		<button onClick={updateAge}>Set Age</button>

		<p>is employed: {isEmployed ? 'yes' : 'no'}</p>
		<button onClick={updateIsEmplyed}>Toggle status</button>
	</div>)
}

export default MyComponent