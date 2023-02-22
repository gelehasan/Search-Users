import {DataAccess} from '../../App'
import Card from '../Card-Slide/Card-Slide';
type userType ={
    user: DataAccess[]
    
}
const CardCatagory = ({user}:userType)=>{

    console.log('from Card',user)
 
    return(
        <div>
          

            {

                user.map((singlItem)=>(
                 


                    <Card  singlItems={singlItem}/>
                )



               
               
                )
              
              
            }
        
        </div>
    )
}

export default CardCatagory;