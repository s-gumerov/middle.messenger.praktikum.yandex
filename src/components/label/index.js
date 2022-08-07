import label from "./Label";

export const label = ({ id, to, className, message }) => {
    return new label(
        'div',
        {
            id: id,
            to: to,
            className: className ?? '',
            message: message ?? ''
        }
    );
};



