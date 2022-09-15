import EventBus from "../services/EventBus";

export type TState = Record<string, any>;

export enum StoreEvents {
	Updated = 'updated',
}

class Store extends EventBus {

	static _instance: Store;
	static readonly STORE_NAME = 'myAppStore';

	_state: TState = {};

	constructor() {

		if (Store._instance) {
			return Store._instance;
		}
		super();

		const savedState = window.localStorage.getItem(Store.STORE_NAME);

		this._state = savedState ? (JSON.parse(savedState) ?? {}) : {}

		Store._instance = this;

		this.on(`${StoreEvents.Updated}`, () => {
			window.localStorage.setItem(Store.STORE_NAME, JSON.stringify(this._state))
		});

	}

	getState() {
		return this._state;
	}

	removeState() {
		this._state = {};
		this.emit(`${StoreEvents.Updated}`);
	}

	set(id: string, value: unknown) {
		this._state[id] = value;
		this.emit(`${StoreEvents.Updated}`);
		return this;
	}
}

export default new Store();
