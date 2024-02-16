import "./Overlay.css";

const Overlay = (props) => {
    return (
        <div className={`overlay ${props.showOverlay}`}>
            <div className="overlay-content">
                {props.children}
            </div>
        </div>
    )
};

export default Overlay;