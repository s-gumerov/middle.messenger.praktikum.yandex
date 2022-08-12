import { Label } from "./Label";
import { ILableProps } from "./interfaces";

export const label = ({ id, to, className, message }: ILableProps) => {
    return new Label(
        'div',
        {
            id: id,
            to: to,
            className: className,
            message: message
        }
    );
};



