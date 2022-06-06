function sucessHandler(msg='',data=null){
    responseObj = {
        error: false,
        message: msg,
        data: data
    }

    return responseObj
}

function errorHandler(msg='',data=null){
    responseObj = {
        error: true,
        message: msg,
        data: data
    }

    return responseObj
}

module.exports = {sucessHandler,errorHandler}