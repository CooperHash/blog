const BaseButton = ({ children, onClick, className }) => {
    return (
        <div onClick={onClick} className={className}>{ children }</div>
    )
}


export default BaseButton
