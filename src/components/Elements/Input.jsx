import { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
    const {
        classname = 'text-sm border ring-2 ring-blue-300/50 border-blue-400/50 rounded-md w-full py-2 px-4 text-slate-700 placeholder:opacity-50',
        type,
        name,
        placeHolder,
        id,
    } = props;
    return (
        <div>
            <input
                id={id}
                className={classname}
                type={type}
                name={name}
                placeholder={placeHolder}
                autoComplete='off'
                ref={ref}
            />
        </div>
    );
});
Input.displayName = 'Input';

export default Input;
