import router from 'express'
import * as controller from './thing.controller'

const Router = router();

Router.get('/', controller.list);

export default Router