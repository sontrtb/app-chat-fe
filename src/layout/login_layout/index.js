
function LoginLayout({ children }) {

    return(
        <div className="login-layout">
            <div className="logo-wrap">
                <h1 className="logo">Logo...</h1>
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    )
}

export default LoginLayout;