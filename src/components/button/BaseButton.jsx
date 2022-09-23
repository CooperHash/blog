export default function BaseButton(props) {
    return (
        <div >
            <div className={props.className}>{props.buttonName}</div>
        </div>
    )
}