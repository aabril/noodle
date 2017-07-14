import _ from 'lodash'

function handleError(res, err) {
  return res.status(500).send(err);
}

export function list(req, res) {
  return res.status(200).json([])
}