const {
    //createDriverDB,
    getDogById,
    getDogByName,
    getAllDrivers
    } = 
    require("../controllers/dogController")

const getDogsHandlers = async (req,res)=>{
    const {name} = req.query;

    try {
        if(name){
            const driverByName = await getDogByName(name)
            res.status(200).json(driverByName)
        } else {
            const response = await getAllDrivers()
            res.status(200).json(response)
        }
        
    } catch (error) {
        res.status(400).json({error:error.message})        
    }

}


const getDetailHandler= async (req,res)=>{
    const {id} = req.params;

    const source = isNaN(id) ? "bdd":"api"

    try {
        const response = await getDogById(id,source)
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


// const postDriversHandler = async (req,res)=>{
//     const {name , lastName , description , image , nationality , birthDate} = req.body
//     //res.status(200).send(`Usuario ${name} creado con el user ${username} y tiene el teléfono ${phone}`)
//     try {
//         const response = await createDriverDB(name,lastName , description , image , nationality , birthDate)
//         res.status(200).json(response)
        
//     } catch (error) {
//         res.status(400).json({error:error.message})
        
//     }
// }



module.exports= {
    getDogsHandlers, 
    getDetailHandler, 
    // postDriversHandler
}

    