import { DataAccess } from "../../App"

type cardType={
    singlItems: DataAccess,
   
}
const Card = ({singlItems}:cardType)=>{
// // let name =singlItems.singleItems.name;
// let {gender,cell,email}= singlItems.singleItems;
// console.log(name);
// console.log(singlItems.Picture.medium)
console.log(singlItems)
// let user= name;
return(
    <div>
       <h1>{singlItems.gender}</h1>
       <img src={singlItems.Picture} />
       <h1>{singlItems.name}</h1>

    </div>
)

}

export default Card;