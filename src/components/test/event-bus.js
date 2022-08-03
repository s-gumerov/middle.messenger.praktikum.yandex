class EventBus {
    constructor() {
        this.listeners = {};
    }

    on(event, callback) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    off(event, callback) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event] = this.listeners[event].filter(
            listener => listener !== callback
        );
    }

    emit(event, ...args) {
        if (!this.listeners[event]) {
            throw new Event(`Нет события: ${event}`);
        }

        this.listeners[event].forEach(listener => {
            listener(...args);
        });
    }
}


const eventBus = new EventBus();

const callback = () => {
    console.log('Event emitted');
}

eventBus.on('myEvent', callback);

// Так как мы передаём новую функцию (а значит, новую ссылку), оригинальный обработчик не будет отписан
eventBus.off('myEvent', () => { console.log('Event emitted'); });

// Теперь передаём правильную ссылку, обработчик будет отписан
eventBus.off('myEvent', callback);

const data = {
    _test: 1,
};

const proxyData = new Proxy(data, {
    get(target, prop) {
        if (prop.indexOf('_') === 0) {
            throw new Error('Отказано в доступе');
        }

        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
    },
    deleteProperty() {
        throw new Error('Отказано в доступе');
    },
});

proxyData._test; // Error: Отказано в доступе
proxyData.newProp = 'string'; // Не дойдёт сюда 