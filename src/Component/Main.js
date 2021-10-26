import {useState,useEffect} from "react";
export default function Main(props) {
    
    const [price,setPrice]=useState()
    
 
    const getPrice = async()=>{
        const responce = await fetch (`https://v6.exchangerate-api.com/v6/9c391d1d0519c2b8f727de49/latest/${props.value}`);
        const data =await responce.json()
        setPrice( data.conversion_rates)
    }

    useEffect (()=> {getPrice()},[])
    let valu ;
    (()=> {for(let val in price){  
        if (val===props.value && val==='USD'){
           valu = price[val]
        }
        else if (val===props.value && val==='INR'){
            valu =  price[val]
         }  
    }} )()
  
    
  return (
    <main className= 'main'>
        <h2> Products </h2> 
      <div className=' row'>

          {
            props.item.map((val)=> {
              return (
                <div className='item' key= {val.id}>
                  <img className='small' src={val.image} alt={val.pName}/>
                  <h3>{val.pName}</h3>
                  <div >{`${props.value==="USD"?'$':'₹'}  ${val.price * valu}`} </div>
               </div>
              )
            })
            
            
        }
      </div>
    </main>
  );
}
