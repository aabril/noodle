import router from 'express'
import thingResource from './resources/thing'

const Router = router()

const indexRequest = (req, res) => { 
  return res.status(200).json({title: 'Hey', message: 'Hello there!'})
}

const notFoundRequest = (req, res) => { 
  res.status(404).send('404 PAGE NOT FOUND')
}

Router.get('/', indexRequest);
Router.use('/things', thingResource)
Router.use('*', notFoundRequest)

export default Router