const Label = (props) => {
    const {
        forHtml,
        className = 'block text-slate-700 text-sm font-bold my-2',
        children,
    } = props;
    return (
        <div>
            {/* <label>{children}</label> */}
            <label htmlFor={forHtml} className={className}>
                {children}
            </label>
        </div>
    );
};

export default Label;
