import {DataAccess} from '../../App'
import Card from '../Card-Slide/Card-Slide';
import './catagory.scss'
type userType ={
    user: DataAccess[]
    
}
const CardCatagory = ({user}:userType)=>{

    
 
    return(
        <div    className='cardCatagory'>
          

            {

                user.map((singlItem, index)=>(
                 


                    <Card key={index} singlItems={singlItem}/>
                )



               
               
                )
              
              
            }
        
        </div>
    )
}

export default CardCatagory;