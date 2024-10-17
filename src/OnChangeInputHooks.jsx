import react, {useState} from 'react';

function NextComponent(){
	const[name, setName] = useState("");
	const [quantity, SetQuantity] = useState();
	const [comment, SetComment] = useState();
	const [payment, SetPayment] = useState("")
	const [shipping, SetShipping] = useState("Delivery")


	const handleNameChange = (event) => {setName(event.target.value)};
	const handleQuantityChange = (event) => {SetQuantity(event.target.value)};
	const handleCommentChange = (event) => {SetComment(event.target.value)};
	const handlePaymentChange = (event) => {SetPayment(event.target.value)};
	const handleShippingChange = (event) => {SetShipping(event.target.value)};

	return(
		<div>
			<input value={name} onChange={handleNameChange}></input>
			<p>name: {name}</p>

			<input value={quantity} onChange={handleQuantityChange} type='number' />
			<p>Quantity:{quantity}</p>


			<textarea value={comment} placeholder='Enter Delivery instructions' 
				onChange={handleCommentChange} type='number' />
			<p>Comment:{comment}</p>

			<select value={payment} onChange={handlePaymentChange}>
				<option value="">Select an option</option>
				<option value="Visa">Visa</option>
				<option value="MasterCard">MasterCard</option>
				<option value="GiftCard">GiftCard</option>
			</select>
			<p>Payment:{payment}</p>

			<label>
				<input type='radio' value="Pick Up" 
				checked={shipping === "Pick Up"}
				onChange={handleShippingChange}/>
				Pick Up
			</label>
			<label>
			<input type='radio' value="Delivery" 
				checked={shipping === "Delivery"}
				onChange={handleShippingChange}/>
				Delivery
			</label>
			<p>Deliver: {shipping}</p>
		</div>)
}

export default NextComponent