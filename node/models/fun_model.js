const {ModeloPelicula} = require('./models');

//La función para mostrar todas las instancias
//sql: select * from table

const getAllMovies = async(req,res)=>{
  try{
    const Peliculas = await ModeloPelicula.findAll();
    res.json(pelicula);
  } catch(error){
    res.json({message : 'No se encontraron instancias'})
  }
}

//La función para mostrar solo 1 instancia
//sql : select * from table where id_pelicula = 1;

const getOneMovie = async(req,res)=>{
  try{
    const Pelicula_unica = await ModeloPelicula.findAll({where:{id: req.params.id}});
    res.json(Pelicula_unica);
  }catch (error){
    res.json({message : 'No se encontró instancia'})
  }
}









//La función para crear un registro



//La función para actualizar un registro



//La función para eliminar un registros (= ModeloPelicula)