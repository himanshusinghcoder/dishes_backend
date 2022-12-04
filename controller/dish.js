import Dish, { countDocuments } from "../model/dishes.js"

export const getAllDishes = async (req,res) => {
    const { page } = req.query
    const skipCount = (page - 1) * 10
    const dishes = await countDocuments(skipCount)
    res.json({status: 'success', data: dishes})
}

export const addOrUpdateDish = async (req,res) => {
    const dishData = req.body
    if(dishData?._id){
       await Dish.updateOne({_id: dishData._id},dishData)
       res.json({status: 'success'})
    }else{
       await Dish.create(dishData)
       res.json({status: 'success'})
    }
}


