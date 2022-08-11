type TListeners = Record<string, Function[]>;

export default class EventBus {
    private listeners: TListeners = {};

    // constructor() {
    //     this.listeners = {};
    // }

    public on(event: string, callback: Function) {
        if (!this.listeners[event])
            this.listeners[event] = [];


        this.listeners[event].push(callback);
    }

    public off(event: string, callback: Function) {
        if (!this.listeners[event])
            throw new Error(`Нет события: ${event}`);


        this.listeners[event] = this.listeners[event].filter(
            listener => listener !== callback
        );
    }

    emit(event: string, ...args: unknown[]) {
        if (!this.listeners[event])
            throw new Error(`Нет события: ${event}`);


        this.listeners[event].forEach(function (listener) {
            listener(...args);
        });
    }
}