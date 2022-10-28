const city =require('../model/city')


exports.getAllcity=(req,res)=>{
    city.find()
    .then(
        result=>
        res.status(200).json({
            message:"location fetched",
            data:result
        }))

       .catch(error=>
        res.status(500).json({
            message:"error occoured",
            error:error
        }))


        

}