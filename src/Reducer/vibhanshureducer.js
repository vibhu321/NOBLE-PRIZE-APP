export const GetDataReducer = ( state ={} , action )=>{

   
    switch(action.type)
    {
        case 'GET_Prize_REQUEST' : return {
            loading : true 
        }

        case 'GET_Prize_SUCCESS' : return {
            prize : action.payload ,
            loading : false 

        }

        case 'GET_Prize_FAILED' : return {
            prizes : action.payload ,
            loading : false 
        }

        default : return  state
    }

}