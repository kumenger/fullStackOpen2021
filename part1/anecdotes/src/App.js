import React, { useState } from "react";
const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients",
  ];

  const strToobj = (str) => {
    return { text: str, votes: 0 };
  };
  let changed = anecdotes.map((x) => strToobj(x));

  const [selected, setSelected] = useState({ index: 0, data: changed });

  const handleClick = () => {
    let ramdom = Math.ceil(Math.random() * (selected.data.length - 1));
    let updated = { ...selected, index: ramdom };

    setSelected(updated);
  };
  const voteHandleClick = () => {
    let updatedVote = (selected.data[selected.index].votes = selected.data[selected.index].votes + 1);
    let lastVote = { ...selected, updatedVote };
    setSelected(lastVote);
  };
  const findMaxVotesIndex=(arr)=>{
    let x=0

for(let i=0;i<arr.length;i++){
  if(arr[i].votes>x){
        x=arr[i].votes
        
       
  }
  
}
return arr.filter(y=>y.votes===x)[0]
}
const maxData=findMaxVotesIndex(selected.data)  
  return (
    <div className="main">
      <div className="primary">
      <h3>Anecdoted of the day</h3>
        <p>{selected.data[selected.index].text}</p>
        <div>
         
          <p>has <strong style={{color:"brown",fontSize:"20px"}}>{selected.data[selected.index].votes}</strong>  votes</p>
        </div>{" "}
        <button onClick={()=>voteHandleClick()}>Vote this anecdotes </button>
        <button onClick={()=> handleClick()}>Next anecdotes</button>
        <h3>Anecdoted with most Votes</h3>
        <p>{maxData.text}</p>
        <p> has <strong style={{color:"brown",fontSize:"20px"}}>{maxData.votes} Votes</strong></p>
          
      </div>
    </div>
  );
};
export default App;
