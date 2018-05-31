import _ from 'lodash'
import routes from 'routes'

// get menu color
const getColor = (href) => _.get(_.find(routes, { href }), 'color')

// get menu index
const getIndex = (href) => _.findIndex(_.filter(routes, { menu: 1 }), { href })
const getHash = (index) => _.get(routes[index], 'href')

export {
  getColor,
  getIndex,
  getHash,
}
