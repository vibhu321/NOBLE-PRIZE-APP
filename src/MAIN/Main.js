import React , {useState , useEffect } from 'react';
import {useDispatch , useSelector} from 'react-redux'
import { GetDataAction } from '../Action/vibhanshuaction';
import { GetDataReducer } from '../Reducer/vibhanshureducer';
import './h1.css'
import prize from './prize.json'




const Vibhanshu=()=>{

const [SearchTerm , setSearchTerm] = useState('')
const dispatch = useDispatch()

/*const {prize} = useSelector(state=>state.GetDataReducer)

useEffect( ()=>{
    dispatch(GetDataAction())
} , [dispatch] ) */  

    return(
        <div>
           
<p style={{color:'purple'}} >
    Filter:    

        <select value={SearchTerm} onChange={(e)=>setSearchTerm(e.target.value)}   >
            <option value="Literature"  >Literature</option>
            <option value="Peace" >Peace</option>
            <option value="Economics" >Economics</option>
            <option value="Physics" >Physics</option>
            <option value="Medicine" >Medicine</option>
        </select>
    </p>

  

<table  >
    <tr>
    <th >
        Year
    </th>
    <th >
        Category
    </th>
    <th >
        Winner Name
    </th>  
    </tr>

{
    prize.prizes.filter( (val)=>{
        if(SearchTerm=='')
        {
            return val
        }
        else if( val.category.toLowerCase().includes(SearchTerm.toLowerCase()) )
        {
            return val
        }

    } ) .map((i,tt)=>{

        if(i.year>=1900 && i.year<=2018)
        {
            if(Array.isArray(i.laureates))
            {
                return <tr>
                <td > {i.year} </td>
                <td > {i.category} </td>
               
             <td> {i.laureates.map(ele=>{
                     return <p> {ele.firstname} </p>                                       
                                        
             })} </td>  
            
    
             
              
            </tr>
            }
        }

      
       
    }
    
    )
}

</table>

        </div>
    )

}

export default Vibhanshu ;


