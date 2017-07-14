import bodyParser from 'body-parser'
import config from '../../../config.json'

export default (app) => {
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());
}