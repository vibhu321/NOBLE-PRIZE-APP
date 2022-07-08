import axios from 'axios';

export const  GetDataAction=()=>dispatch=>{


    dispatch({type:'GET_Prize_REQUEST'})

    axios.get('/https://api.nobelprize.org/v1/prize.json').then(res=>{
        console.log(res)
       

        dispatch({type:'GET_Prize_SUCCESS' , payload:res.data })

    }).catch(err=>{
        console.log(err)
        dispatch({type:'GET_Prize_FAILED' , payload:err })
    })

}