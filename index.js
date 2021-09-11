import express    from 'express'
import cors       from 'cors'
import log        from 'morgan'
import adminRoute from './backend/routes/admin'
import tableRoute from './backend/routes/table'
import mockRoute  from './teste/mock'

const port = 8003
const app  = express()

app.use(log('dev'))
app.use(express.json())
app.use(cors({origin:'*'}))
app.use(express.urlencoded({extended:true}))

app.use('/table',tableRoute)
app.use('/admin',adminRoute)
app.use('/mock',mockRoute)

app.listen(port,()=>console.log(`online into port: ${port}`))