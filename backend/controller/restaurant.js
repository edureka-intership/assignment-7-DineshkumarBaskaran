const Restaurants=require('../model/restaurant')


exports.getAllRestaurants=(req,res)=>{
    Restaurants.find()
       .then(
        result=>{
            res.status(200).json({
                message:"restaurants fetchrd sucessfullu",
                data:result
            })

        })
        .catch(error=>{
            res.status(500).jason({message:"error in database",error:error})
        })
}
 
exports.getRestaurantsBycity=(req,res)=>{
    let filter={city_name:req.params.cName}

    Restaurants.find(filter)
    .then(
        result=>{
            res.status(200).json({
                message:"restaurants fetchad sucessfullu",
                data:result
            })

        })
        .catch(error=>{
            res.status(500).jason({message:"error in database",error:error})
        })
}

exports.getRestaurantsByFilter=(req,res)=>{
 let filter={}



if(req.body.city){
    filter.city=req.body.city
}
if(req.body.cuisine && req.body.cuisine.length >0){
    filter['Cuisine.name']={ $in:[req.body.cuisine]}
}

if(req.body.lcost && req.body.hcost ){
    if(req.body. lcost==0){
        filter.cost={$lte: req.body.hcost}

    }
    else{
        filter.cost={
            $lt:req.body.hcost,
            $gt:req.body.lcost
        }
    }
}



    console.log(filter)
    Restaurants.find(filter)
    .then(result=>{
        console.log(result)
            res.status(200).json({
                message:"restaurants fetchwd sucessfullu",
                data:result
            })

        })
        .catch(error=>{
            res.status(500).jason({message:"error in database",error:error})
        })

}

exports.getRestaurantsBycityID=(req,res)=>{
    let filter={city:req.params.cID}

    Restaurants.find(filter)
    .then(
        result=>{
            res.status(200).json({
                message:"restaurants fetched sucessfullu",
                data:result
            })

        })
        .catch(error=>{
            res.status(500).jason({message:"error in database",error:error})
        })
}

exports.getRestaurantsByName=(req,res)=>{
    let filter={name:req.params.rName}

    Restaurants.findOne(filter)
    .then(
        result=>{
            res.status(200).json({
                message:"restaurants fetched sucessfullu",
                data:result
            })

        })
        .catch(error=>{
            res.status(500).jason({message:"error in database",error:error})
        })


}