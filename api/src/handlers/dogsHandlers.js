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
        console.log("handlerPassed");

        await createDriverDB(name, height, weight, life_span, url, temperamentName)
                res.status(201).json({ message: "Dog created successfully." });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// const postDogsHandler = async (req, res) => {
//     try {
//       const { name, height, weight, life_span, url, temperamentName } = req.body;
  
//       if (!name || !height || !weight || !life_span || !url) {
//         return res.status(400).json({ error: "All fields are required." });
//       }
  
//       let createdDog;
//       let createdTemperaments;
  
//       if (Array.isArray(temperamentName)) {
//         createdDog = await Dog.create({ 
//           name: name,
//           height: height,
//           weight: weight,
//           life_span: life_span,
//           url: url,
//         });
  
//         createdTemperaments = await Promise.all(temperamentName.map(async (tempName) => {
//           return await Temperament.create({ name: tempName });
//         }));
  
//         await createdDog.addTemperament(createdTemperaments);
//       } else if (typeof temperamentName === 'string') {
//         createdDog = await Dog.create({ 
//           name: name,
//           height: height,
//           weight: weight,
//           life_span: life_span,
//           url: url,
//         });
  
//         const singleTemperament = await Temperament.create({ name: temperamentName });
//         await createdDog.addTemperament(singleTemperament);
//       } else {
//         return res.status(400).json({ error: "Invalid temperamentName format. Should be either a string or an array." });
//       }
  
//       return res.status(201).json({ message: "Dog and Temperaments created successfully", dog: createdDog });
//     } catch (error) {
//       return res.status(500).json({ error: "Internal server error" });
//     }
//   };
  




module.exports= {
    getDogsHandlers, 
    getDetailHandler, 
    postDogsHandler
}

    