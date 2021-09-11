import express    from 'express'
import knex       from '../../database/db'

const tableRouter = express.Router()

tableRouter.route('/').get(async(req,res)=>{
   
        await knex.select(['produto','quantidade','valor'])
                  .table('items')
                  .then(item => res.status(200).json(item))
                  .catch(err => res.status(500).json(err))

})

export default tableRouter