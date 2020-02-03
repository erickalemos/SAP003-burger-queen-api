import models from'../src/models';

const getAll = async (req, res)=>{
    const products = await models.products.findAll({raw:true})
    res.json(products)
}

const getId = async (req, res)=>{
    const {id}= req.params
    const products = await models.products.findOne({where:{id:Number(id)}})
    res.json(products)
}

const postProduct = async (req, res) => {
    const products =  await models.products.create(req.body)
    res.json(products)
}

const updatedProduct = async (req, res) => {
    const { id } = req.params
    const products = await models.products.update(req.body,{where:{id:Number(id)}})
    res.json(products)
}

const deleteProduct = async (req,res) => {
    const {id} = req.params
    const products = await models.products.destroy({where:{id:Number(id)}})
    res.json(products) 
}

export default {getAll, getId, postProduct, updatedProduct, deleteProduct}