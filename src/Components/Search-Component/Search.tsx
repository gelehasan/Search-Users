import { ChangeEvent } from "react";

type Inputs = {
    type: string,
    txtHolder: string,
    changeON: (event:ChangeEvent <HTMLInputElement>)=> void,
    className: string,
    
   
    
}


const SearchBox = ({type, txtHolder, changeON, className}:Inputs)=>{

    return(
         <input className={className} type= {type} placeholder={txtHolder} onChange={changeON} ></input>
        // <h1>Hi</h1>
    )

}


export default SearchBox;