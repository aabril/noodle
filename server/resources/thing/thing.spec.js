export default (test, server, supertest) => {
  test.serial('things:GET get all with an empty array as a result', async t => {
    t.plan(3);
    const res = await supertest(server).get('/things')
    t.is(res.status, 200);
    t.is(Array.isArray(res.body), true)
    t.is(res.body.length, 0)
  })
}
