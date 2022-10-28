const  mealtypes=require('../model/mealtype')


exports.getAllmealtypes=(req,res)=>{
    mealtypes.find()
    .then(
        result=>
        res.status(200).json({
            message:"mealtypes fetched",
            data:result
        }))

       .catch(error=>
        res.status(500).json({
            message:"error occoured",
            error:error
        }))


        

}