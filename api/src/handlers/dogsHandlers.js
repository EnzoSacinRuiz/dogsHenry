const {
    createDriverDB,
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


const postDogsHandler = async (req, res) => {
    try {
        const { name, height, weight, life_span, url, temperamentName } = req.body;

        if (!name || !height || !weight || !life_span || !url || !temperamentName) {
            return res.status(400).json({ error: "All fields are required." });
        }

        await createDriverDB(name, height, weight, life_span, url, temperamentName)
        

        

        // Send a success response upon successful creation
        res.status(201).json({ message: "Dog created successfully." });

    } catch (error) {
        // Handle any errors that occur during dog creation
        res.status(500).json({ error: error.message });
    }
};





module.exports= {
    getDogsHandlers, 
    getDetailHandler, 
    postDogsHandler
}

    