import PropTypes from 'prop-types';

function List(props){
	const category = props.category;
	const itemList = props.items;
	const listItems = itemList.map((aitem)=><li key={aitem.name}>
																					{aitem.name}: &nbsp;
																					{aitem.calories}</li>);

	
	return (<>
	<h3>{category}</h3>
	<ul>{listItems}</ul>
	</>);
}
List.propTypes = {
	category: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, 
																						name: PropTypes.string,
																						calories: PropTypes.number})),
}

List.defaultProps= {
	category: "Category",
	items: [],
}


export default List