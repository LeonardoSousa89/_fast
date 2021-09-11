import express    from 'express'
import log        from 'morgan'

const port = 3003
const app  = express()

app.use(log('dev'))

app.get('/table-page',(req,res)=>{
    res.sendFile(__dirname + '/frontend/tabledata.html')
})

app.get('/admin-page',(req,res)=>{
        res.sendFile(__dirname + '/frontend/admin.html')
})

app.get('/admin-page/mock',(req,res)=>{
    res.sendFile(__dirname + '/teste/adminMock.html')
})

app.get('/tabledata-page/mock',(req,res)=>{
    res.sendFile(__dirname + '/teste/tabledataMock.html')
})

app.listen(port,()=>console.log(`online into port: ${port}`))