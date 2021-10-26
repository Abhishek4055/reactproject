

export default function Currency(props) {
     
  return (
    <div className ='dropdown'>
        Currency : 
      <select  value={props.curencyValue} onChange={props.onhandleChange} >
        <option  value='INR'>INR</option>
        <option value="USD"> USD </option>
        
      </select>
    </div>
  );
}
