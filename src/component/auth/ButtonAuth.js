function ButtonAuth( props ) {
    
    const {onClick, title} = props;

    return(
        <div>
            <button
                onClick={onClick}
                className="button-auth"
            >
                {title}
            </button>
        </div>
    )
}

export default ButtonAuth;