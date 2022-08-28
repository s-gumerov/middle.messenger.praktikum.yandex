import Store from './Store';


export default function connect(Component: any, mapStateToProps: Function) {

	return class extends Component {
		constructor(tag = 'div', props = {}) {

			const store = new Store();

			super(tag, { ...props, ...mapStateToProps(store.getState()) });

			store.on(`${Store.EVENT_UPDATE}`, () => {
				this.setProps({ ...mapStateToProps(store.getState()) });
			});
		}
	};
}
