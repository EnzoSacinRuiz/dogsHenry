const infoCleaner2 = (arr) => 
    arr.map((dog)=> {
            return {
                id: dog.id,
        name: dog.name,
        height: dog.height,
        weight: dog.weight,
        life_span: dog.life_span,
        url: dog.url,
                
            }
        });

module.exports = infoCleaner2;