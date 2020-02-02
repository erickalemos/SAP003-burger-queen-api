import models from'../src/models';

const getAll = async (req, res)=>{
    const orders = await models.orders.findAll({raw:true})
    res.json(orders)
};

const getId = async (req, res)=>{
    const {id}= req.params
    const orders = await models.orders.findOne({where:{id:Number(id)}})
    res.json(orders)
};

const postorders = async (req, res) => {
    const orders =  await models.orders.create(req.body)
    res.json(orders)
};

const updatedorders = async (req, res) => {
    const { id } = req.params
    const orders = await models.orders.update(req.body,{where:{id:Number(id)}})
    res.json(orders)
};

const deleteorders = async (req,res) => {
    const {id} = req.params
    const orders = await models.orders.destroy({where:{id:Number(id)}})
    res.json(orders) 
};

export default {getAll, getId, postorders, updatedorders, deleteorders};