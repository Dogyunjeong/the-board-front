class SocketClient {
  constructor(options) {
    const { host, protocol } = options;
    if (!host || typeof host !== 'string') {
      throw new Error('socket host is not specified');
    }
    this.socket = new WebSocket(host, protocol);
    this.obj = {};
    if (!this.emitQue) this.emitQue = [];

    this.socket.onmessage = (msg) => {
      const message = JSON.stringify(msg.data);
      if (message.route && this.obj[message.route]) {
        this.obj[message.route](message.data);
      }
    };

    this.socket.onopen = () => {
      console.log('onopen arguemtns');
      console.log(...arguments);  // eslint-disable-line
      this.releaseEmitQue();
    };
  }

  on(event, handler) {
    this.obj[event] = handler;
  }

  emit(event, data) {
    console.log('event: ', event, '  /  data: ', data);
    if (!this.socket) {
      this.addEmitQue(event, data);
    } else if (this.socket.readyState === 1) {
      const message = {
        route: event,
        data,
      };
      console.log('before stringify: ', message);
      this.socket.send(JSON.stringify(message));
    } else {
      this.addEmitQue(event, data);
    }
  }

  addEmitQue(event, data) {
    if (!this.emitQue) this.emitQue = [];
    this.emitQue.push({ event, data });
  }

  releaseEmitQue() {
    this.emitQue.forEach((obj) => {
      console.log('obj:', obj);
      this.emit(obj.event, obj.data);
    });
  }

  close() {
    this.socket.close();
  }
}

export default SocketClient;
