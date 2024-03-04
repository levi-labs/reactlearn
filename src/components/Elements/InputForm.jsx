import { forwardRef } from 'react';
import Input from './Input';
import Label from './Label';

const InputForm = forwardRef((props, ref) => {
    const { type, name, forHtml, id, placeHolder, label } = props;
    return (
        <div>
            <Label for={forHtml} name={name}>
                {label}
            </Label>
            <Input
                id={id}
                type={type}
                name={name}
                placeHolder={placeHolder}
                ref={ref}
            />
        </div>
    );
});
InputForm.displayName = 'InputForm';

export default InputForm;
