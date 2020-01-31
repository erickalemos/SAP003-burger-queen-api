import models from'../src/models/index';

const getAll = async (req, res)=>{
    const products = await models.products.findAll({raw:true})
    console.log(products)
}

export default {getAll}