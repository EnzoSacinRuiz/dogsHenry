const infoCleaner2 = (arr) => 
    arr.map((dog)=> {
            return {
                id: dog.id,
                name: dog.name,
                height: dog.height?.metric,
                weight: dog.weight?.metric,
                life_span: dog.life_span,
                url: dog.reference_image_id,
                Temperaments: dog.temperament?.split(',').map(templete => templete.trim()).filter((item, index, self) => self.indexOf(item) === index)
                
            }
        });

module.exports = infoCleaner2;