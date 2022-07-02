
function InputAuth( props ) {
    const { icon, value, placeholder, onChange, errValidate } = props;

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
            {
                errValidate &&
                <span className='validate-mess'>
                    {placeholder + " không được để trống"}
                </span>
            }
        </div>
        
    )
}

export default InputAuth;