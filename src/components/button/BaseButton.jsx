const BaseButton = ({ children, onClick, className, config }) => {
    return (
        <div onClick={onClick} className={className}>
            <a href={config.url}>{config.content}</a>
        </div>
    )
}


export default BaseButton
