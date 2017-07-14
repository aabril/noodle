import config from '../config.json'

process.env.NODE_ENV = 'test'
process.env.PORT = process.env.TEST_PORT || config.TEST_PORT

import supertest from 'supertest'
import {test} from 'ava'
const server = require('../server/server').default

import thingsSpec from '../server/resources/thing/thing.spec'

test.serial('root:get', async t => {
  t.plan(1);
  const res = await supertest(server).get('/')
  t.is(res.status, 200);
});

thingsSpec(test, server, supertest)