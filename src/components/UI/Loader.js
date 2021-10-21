import ReactDom from 'react-dom'

const Loader = () => {
    return (
        ReactDom.createPortal(
            <>
            <div className="loader-overlay"></div>
            <div className="loading-dots">
                <div>Loading</div>
                <div className="loading-dots--dot"></div>
                <div className="loading-dots--dot"></div>
                <div className="loading-dots--dot"></div>
            </div>
            </>,
            document.getElementById("loader-root")
        )
    )
}

export default Loader