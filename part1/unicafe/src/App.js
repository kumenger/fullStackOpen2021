import React ,{useState} from 'react'
 const Statistics=(props)=>{
   if(props.good===0&&props.neutral===0&&props.Bad===0){
     return <div style={{color:"red",textAlign:"left"}}><br></br>No feedBack given!!</div>
   }
   return <div>
     <h2 style={{textAlign:"left"}}>Statistics</h2>
     <div style={{textAlign:"left"}}>
       <table  style={{textAlign:"left"}} >
         <tbody><Statistic text="Good" value={props.good} />
         <Statistic text="Neutral" value={props.neutral} />
         <Statistic text="Bad" value={props.Bad} />
         <Statistic text="Total" value={props.total} />
         <Statistic text="Average" value={props.average} />
         <Statistic text="Postive" value={props.postive+"%" } /></tbody>
         
        
       </table>
             </div>

   </div>
 }
 const Statistic=(props)=>{
   return <>
   <tr>
           <td><h3>{props.text}</h3></td>
           <td><strong style={{color:"red",fontSize:"22px"}}>{props.value}</strong></td>
         </tr>
   </>

   
 }
 const Button=(props)=>{
   return <><button onClick={props.handleClick} style={{height:"40px",textAlign:"left"}}>{props.text}</button></>
 }
const App=()=>{
  
  const[feedBack,SetFeedBack]=useState({good:0,Neutral:0,Bad:0})
  
  const handleClickGood=()=>{
   const newFeedBack={...feedBack,good:feedBack.good+1}
   SetFeedBack(newFeedBack)
  }
  const handleClickNeutral=()=>{
    const newFeedBack={...feedBack,Neutral:feedBack.Neutral+1}
    SetFeedBack(newFeedBack)
   }
   const handleClickBad=()=>{
    const newFeedBack={...feedBack,Bad:feedBack.Bad+1}
    SetFeedBack(newFeedBack)
   } 
 let sums=feedBack.good+feedBack.Neutral+feedBack.Bad
  return(<div style={{textAlign:"left"}} >
    <h1 style={{textAlign:"left"}}>Give FeedBack</h1>
    <div style={{padding:"10%,0,10%,0",textAlign:"left"}}>
      
     <Button text="Good" handleClick={handleClickGood}/>&nbsp;
     <Button text="Neutral" handleClick={handleClickNeutral}/>&nbsp;
     <Button text="Bad" handleClick={handleClickBad}/>&nbsp;
    </div>
   
    <Statistics good={feedBack.good } neutral={feedBack.Neutral} Bad={feedBack.Bad}  total={sums} average={sums/3} postive={feedBack.good/sums*100}/>
    
     

     
     
  </div>)
}
export default App