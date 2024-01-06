import "./StartingScreen.css"

const StartingScreen = () => {
    return (
        <>
            <div className="auth_wrapper">
                <div className="auth_image">
                    <img src="/images/AuthLogo.svg" alt="logo"/>
                </div>
                <div className="app_Name">
                    <p>yuMMer</p>
                </div>
            </div>
        </>
    ) 
}

export default StartingScreen;