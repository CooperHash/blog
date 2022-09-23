export default function BaseButton(props) {
    return (
        <div className={props.wrapclass}>
            <div className={props.className}>{props.buttonName}</div>
        </div>
        // <div className="btn">button</div>
    )
}