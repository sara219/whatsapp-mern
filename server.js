//  Importing 
import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbMessages.js'
import Pusher from 'pusher'
import cors from 'cors'


//  App config 
const app = express()
const PORT = process.env.PORT || 9000

// pusher : 
//  realtime changes, keep track updating : ) 
//  real time sync between front and back 

var pusher = new Pusher({
    appId: '1080638',
    key: 'a43f72fa78eb808b505d',
    secret: 'be776f3fd92a52cd3ff5',
    cluster: 'eu',
    encrypted: true,
  });

  const db = mongoose.connection

  db.once('open', () => {
      console.log('DB IS CONNECTED');

      const msgCollection = db.collection('messagecontents')
      const changeStream = msgCollection.watch()

      changeStream.on('change', (change) => {
          console.log(change);

        //    if there a change save it at pusher / channel called message and the event called inserted
          if (change.operationType === 'insert') {
              const messageDetails = change.fullDocument
              pusher.trigger('message', 'inserted',
              {
                  name: messageDetails.name,
                  message: messageDetails.message,
              })
          } else {
              console.log('Error Pusher');
          }
      })
  })


// middleware
app.use(express.json())
app.use(cors())

//  secure the message :) 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.setHeader('Access-Control-Allow-Header', '*')
    next(); 
})

// DB Config 
const connection_url = 'mongodb+srv://sara219:219@cluster0.fvzfe.mongodb.net/whatsappdb?retryWrites=true&w=majority'

mongoose.connect(connection_url,  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.catch((err) => {
    console.log(err);
    process.exit(1)
})



//  API routes 
app.get('/', (req,res) => res.status(200).send('HII'))

app.get('/api/v1/message/sync', (req, res) => {
    Messages.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

app.post('/api/v1/message/new', (req, res) => {
    const dbMessage = req.body

    Messages.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

// Listen
app.listen(PORT, () => console.log(`Magic at => ${PORT}`))