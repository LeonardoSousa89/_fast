import express    from 'express'
import knex       from '../../database/db'

const adminRouter = express.Router()

adminRouter.route('/').get(async(req,res)=>{
     
     res.status(200).json([])

}).post(async(req,res)=>{
     
     let data = { 
                    produto:req.body.produto, 
                    quantidade:req.body.quantidade, 
                    valor:req.body.valor 
               }

     await knex.insert(data)
               .table('items')
               .then(item => res.status(201).json(item))
               .catch(err => res.status(400).json(err))


})

export default adminRouter


