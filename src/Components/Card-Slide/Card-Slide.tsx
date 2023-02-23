import { DataAccess } from "../../App"
import './Slide.scss';
type cardType={
    singlItems: DataAccess,
   
}
const Card = ({singlItems}:cardType)=>{
// // let name =singlItems.singleItems.name;
// let {gender,cell,email}= singlItems.singleItems;
// console.log(name);
// console.log(singlItems.Picture.medium)

// let user= name;

let Color= ['lightcyan','cyan','darkcyan',
            'darkblue','lightskyblue', 'magenta',
            'blueviolet','darkmagenta','indigo',
            'purple','hotpink','sandybrown','maroon'];


let colorGanerator = (): string=>{
let number = Math.floor(Math.random()*12) ;

    return Color[number]
}
colorGanerator()
return(
    <div    className="catagorySlide">
        
        <div    className="info"> 
        <img src={singlItems.Picture} />
       <h1>{singlItems.name}</h1>

        </div>
      <div  className="desc" >
         <h1> Email: {singlItems.email}</h1>
       <h1> Cell: {singlItems.cell}</h1>
       <h1>Gender: {singlItems.gender}</h1>
      </div>

     
    </div>
)

}

export default Card;