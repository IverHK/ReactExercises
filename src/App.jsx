import Header from './Header.jsx'
import Footer from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card.jsx';
import Button from './Button/Button.jsx';
import Student from './student.jsx';
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx';
import MyComponent from './OnClickHooks.jsx';
import Counter from './Counter.jsx';
import NextComponent from './OnChangeInputHooks.jsx';
import UpdateObject from './UpdateObjects.jsx';
import UpdateStateArray from './UpdateArrayState.jsx';
import ArrayObjectState from './UpdateArrayObjectsState.jsx';
import HooksUseEffect from './HooksUseEffect.jsx';
import HooksUseContext from './HooksUseRef.jsx';
import ComponentA from './componentA.jsx';
import HooksUseRef from './HooksUseRef.jsx';

function App() {
  const fruits = [
    {id: 1, name: 'apple', calories: 95,}, 
    {id: 2, name: 'banana', calories: 45,},
    {id: 3, name: 'orange', calories: 75,},
    {id: 4, name: 'coconut', calories: 85}, 
    {id: 5, name:'pinapple', calories: 137}];

    const vegtables = [
      {id: 6, name: 'potatos', calories: 395,}, 
      {id: 7, name: 'corn', calories: 145,},
      {id: 8, name: 'carrot', calories: 725,},
      {id: 9, name: 'broccoli', calories: 185}, 
      {id: 10, name:'tomatoes', calories: 197}];

  return (
    <>
      <Header />
      <UserGreeting isLoggedIn={true} username="Iver"/>
      <UserGreeting isLoggedIn={true}/>
      <HooksUseRef />
      <ComponentA />
      <HooksUseContext />
      <HooksUseEffect />
      <ArrayObjectState />
      <UpdateStateArray />
      <UpdateObject />

      <NextComponent />
      <Counter />
      <MyComponent />
     {fruits.length > 0 
     && <List items={fruits} category='fruits'/>}
     {vegtables.length >0 
     ?  <List items={vegtables} category='vegtables'/> 
     : null}

      <Card />
      <Card />
      <Student />
      <Student name="Iver" age={31} isStudent={true}/>
      <Student name="Sarah" age={30} isStudent={false}/>
      <Student name="Tyo" age={7} isStudent={false}/>
      <Food />
      <Button />
      <Footer />
    </>
  ); 
}

export default App
