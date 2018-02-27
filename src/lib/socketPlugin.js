import Socket from './Socket';

const socketPlugin = {};

socketPlugin.install = (Vue, options) => {
  Vue.prototype.$socket = new Socket(options); // eslint-disable-line
  console.dir(Vue.prototype.$socket);
};

export default socketPlugin;
