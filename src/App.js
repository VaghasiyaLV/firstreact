import logo from './logo.svg';
import './App.css';

function App() {
  
 let arr = [10,20,30,40,50];
 let arr1 = [...arr];
 let arr2 = [99,98,...arr1,97,96,95]
 let arr3 = [...arr2,5,6,7]

 return(
   arr3.map((a,i) => {
     return(
       <div key = {i}>
         <p>{i+1}</p>
         <p>{a}</p>
         
       </div>
     )
   })
 );
}

export default App;
