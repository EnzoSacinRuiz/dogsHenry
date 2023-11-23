const infoCleaner = (arr) => 
    arr.map((dog)=> {
            return {
                id: dog.id,
                name: dog.breeds.name,
                temperament:dog.breeds.temperament ,
                //weight: dog.breeds.weight.metric,
                image: dog.url,
                created:false
            }
        });

module.exports = infoCleaner;