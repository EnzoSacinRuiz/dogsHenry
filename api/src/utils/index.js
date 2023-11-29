const infoCleaner = (arr) => 
    arr.map((dog)=> {
            return {
                id: dog.id,
                name: dog.name,
                height: dog.height?.metric,
                weigth: dog.weigth?.metric,
                life_span: dog.life_span,
                url: dog.reference_image_id,
                temperament: dog.temperament?.split(',').map(templete => templete.trim()).filter((item, index, self) => self.indexOf(item) === index),
                // SE DIVIDE EN UNA CADENA CON UNA ",". LUEGO EL MAP PARA ELIMINAR LOS ESPACION EN BLANCOS Y SE ELIMINA LOS DUPLICADOS
                created:false
            }
        });

module.exports = infoCleaner;