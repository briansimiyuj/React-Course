const apiRequest = async (url = '', optionObject = null, errMessage = null) =>{

    try{
        
        const response = await fetch(url, optionObject)

        if(!response.ok) throw Error('Please reload the app')

    }catch(error){

        errMessage = error.message
        
    }finally{

        return errMessage

    }

}

export default apiRequest