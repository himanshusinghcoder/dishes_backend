// import { model, Schema } from "../config/mongo_config.js";

import { model,Schema } from "../mongo_config.js"
const dishSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    ingredients: {
        type: Array,
        required: true,
    },
})

const Dish = model('dishes', dishSchema)

export const countDocuments = async (skip = 0) => {
    const countDocument = await Dish.countDocuments()
    const dishes = await Dish.find().skip(skip).limit(10)
    return {
        dishes , countDocument
    }
} 


export default Dish