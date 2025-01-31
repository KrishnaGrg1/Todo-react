import Joi from "joi";


const addTodo= Joi.object().keys({
        title:Joi.string().min(1).required(),
        description:Joi.string().min(1).required()
    })


const updateTodo=
    Joi.object().keys({
        id:Joi.string().required()
    })


const todoValidation={
    addTodo,updateTodo
}

export default todoValidation