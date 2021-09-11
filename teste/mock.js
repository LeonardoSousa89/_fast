import express    from 'express'

const mockRouter = express.Router()

let Msg = []

mockRouter.route('/').get((req,res)=>{

        /*res.status(200).json([
                {msg:" hello world! there's a table here!"},
                {msg:" hello world! there's a table here again!"},
                {msg:" hello world! there's a table here again and again!"}
        ])*/

        
        res.status(200).json(Msg)

}).post((req,res)=>{
        
       try{

                let data = {
                        msg:req.body.msg
                }

                Msg.push(data)
                return res.status(201).json(data) 

       }catch(err){
                res.status(400).json(err)
       }

})

export default mockRouter