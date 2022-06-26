
function InputAuth( props ) {
    const { icon, value, placeholder, onChange } = props;

    return (
        <div className="input-auth">
            <div className="icon">
                {icon}
            </div>
            <input
                className="input"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default InputAuth;