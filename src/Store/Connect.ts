import Store, { StoreEvents } from './Store';
import { Component as Block } from '../services/Component';
import { isEqual } from '../utils/isEqual';

export type Indexed = Record<string, any>;

export function connect(mapStateToProps: (state: Indexed) => Indexed) {

	return function (Component: typeof Block) {
		return class extends Component {
			constructor(props: any) {
				// сохраняем начальное состояние
				let state = mapStateToProps(Store.getState());

				super({ ...props, ...state });

				// подписываемся на событие
				Store.on(StoreEvents.Updated, () => {
					console.log('Updated');

					// при обновлении получаем новое состояние
					const newState = mapStateToProps(Store.getState());

					// если что-то из используемых данных поменялось, обновляем компонент
					if (!isEqual(state, newState)) {
						this.setPropsToChilds({ ...newState });
					};

					// не забываем сохранить новое состояние
					state = newState;
				});
			}
		}
	}
}



// export default function connect(Component: any, mapStateToProps: Function) {

// 	return class extends Component {
// 		constructor(tag = 'div', props = {}) {

// 			const store = new Store();

// 			// super(tag, { ...props, ...mapStateToProps(store.getState()) });
// 			super({ ...props, ...state });

// 			store.on(`${Store.EVENT_UPDATE}`, () => {
// 				this.setProps({ ...mapStateToProps(store.getState()) });
// 			});
// 		}
// 	};
// }

