import express from 'express'
import config from '../config.json'
import routes from './routes'
import middlewares from './services/express/middlewares'
import db from './services/db'
import bunyan from 'bunyan'

const log = bunyan.createLogger({name: 'run', level: 'info'});
const app = express();

middlewares(app)
db()
routes(app);

const PORT = process.env.PORT || config.PORT;
const NODE_ENV = process.env.NODE_ENV==="dev" || config.NODE_ENV==='dev' 

app.listen(PORT, () => {
  if(NODE_ENV) {
    log.info('Express server listening on %d', PORT);
  }
})

export default app
