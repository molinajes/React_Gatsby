import _ from 'lodash'
// import routes from 'routes'

const routes = []

// get menu color
const getColor = (href) => _.get(_.find(routes, { href }), 'color')

// get menu index
const getIndex = (href) => _.findIndex(_.filter(routes, { menu: 1 }), { href })
const getHash = (index) => _.get(routes[index], 'href')

// Page Transitions
// const getTransitionStyles = timeout => {
//   return {
//     entering: {
//       opacity: 0,
//     },
//     entered: {
//       transition: `opacity ${timeout}ms ease-in-out`,
//       opacity: 1,
//     },
//     exiting: {
//       transition: `opacity ${timeout}ms ease-in-out`,
//       opacity: 0,
//     },
//   }
// }
//
// const getTransitionStyle = ({ timeout, status }) =>
//   getTransitionStyles(timeout)[status]

const hexToHSL = (hex) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex),
    r = parseInt(result[1], 16),
    g = parseInt(result[2], 16),
    b = parseInt(result[3], 16);
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
    if(max == min){
      h = s = 0; // achromatic
    }else{
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch(max){
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
  var HSL = new Object();
  HSL['h']=h;
  HSL['s']=s;
  HSL['l']=l;
  return HSL;
}

export {
  hexToHSL,
  // getTransitionStyle,
  getColor,
  getIndex,
  getHash,
}
