import BaseButton from "./BaseButton"
import classname from 'classname'
import withLogClick from "../hoc/withLogClick"
export default function Button(props) {
    const ToButton = withLogClick(BaseButton)
    return (
        <div>
            <ToButton 
                config={props.config}
                onClick={props.onClick}
                className={classname('nav flex items-center text-center justify-center')}
            >
            </ToButton>
        </div>
    )
}