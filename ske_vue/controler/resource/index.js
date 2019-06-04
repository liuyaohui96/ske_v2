
const createResource = require('./createResource')
const updateResource= require('./updateResource')
const searchResource= require('./searchResource')

module.exports ={
  ...createResource,
  ...updateResource,
  ...searchResource
}