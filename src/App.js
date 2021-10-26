
import { useState } from "react";
import Header from "./Component/Header";
import Main from "./Component/Main";
import Currency from "./Component/Currency ";
import './App.css'

function App( ) {
  const[value,setValue] = useState('USD')
 const  item = [
    {
       id:'1',
       pName: 'Mochi Shoes',
       price: 30,
       image: 'https://www.pngfind.com/pngs/m/1-17902_download-men-shoes-png-transparent-png.png'
   } , 
   {
       id:'2',
       pName: 'Bag',
       price: 15,
       image: 'https://assets.kogan.com/images/dtrade/DTD-DTD-AMAZING041-BLACK/1-f59fc19500-7rgtodd.jpg?auto=webp&canvas=1200%2C800&fit=bounds&height=800&quality=75&width=1200'
   },  
   {
       id:'3',
       pName: 'Watch',
       price: 40,
       image: 'https://www.vhv.rs/dpng/d/486-4861507_watches-png-images-free-download-smart-watches-png.png'
   }  
]


const  onhandleChange =e =>{
  
  setValue(e.target.value);
 
}

  return (
    <div className="App">
      <Header />
      <Currency curencyValue={value} onhandleChange={onhandleChange} />
      <div className='row'>
        {/* <Main  Price ={Price} item = {item}/> */}
        <Main  value={value} item = {item}/>
      </div> 
    </div>
  );
}

export default App;
