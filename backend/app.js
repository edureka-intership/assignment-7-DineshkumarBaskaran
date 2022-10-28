const express=require('express')
const mongoose=require('mongoose')
const bodyparse=require('body-parser')
const restaurantsRoutes=require('./routes/restaurant')
const cityRoute=require('./routes/cityroute')
const mealtypeRoutes=require('./routes/mealtype')
const cors=require('cors')



const port=9094;





const DBSTRING="mongodb://127.0.0.1:27017/zomato"

mongoose.connect(DBSTRING,
                ()=>{
                    console.log("mongodb connected")
                },
                e=>console.log("error occured while connecting to db:",e) )



                let app=express();

                app.use(cors())


                app.use(bodyparse.json())
                
                app.use('/restaurant',restaurantsRoutes);
                app.use('/city',cityRoute)
                app.use('/mealtype',mealtypeRoutes)
                            




app.listen(port,()=>{

    console.log('the server is running on port : ${port}')
})
 