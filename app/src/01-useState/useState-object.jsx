import { useState } from "react";

const useStateObject = () => {
  const [person, setPerson] = useState({
    name:'Sumeya',
    age: 21,
    hobby:'playing chess'
  })  ;

  const handleClick=()=>{
    setPerson({ ...person, name:'Peter'});
    
  };

  return(
    
  <>
  <div>
    <h1>{person.name}</h1>
    <h2>{person.age}</h2>
    <h2>Enjoys {person.hobby}</h2>
    <button className="bt" onClick={handleClick} type="button">Change Me</button>
    </div>
  </>
  )
};

export default useStateObject;
