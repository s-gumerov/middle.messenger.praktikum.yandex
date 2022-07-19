import btnsGroupStyles from './btnsGroup.module.sass';
import BtnsGroupTmpl from './btnsGroup.hbs';

const styles = {
    btnsGroup: btnsGroupStyles.btnsGroup,
    btnsGroup__btn: btnsGroupStyles.btnsGroup__btn,
    btnsGroup__anchor: btnsGroupStyles.btnsGroup__anchor,
};

export const BtnsGroup = (props) => BtnsGroupTmpl({ ...styles, ...props });