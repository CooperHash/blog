import BaseButton from "./BaseButton"
import classname from 'classname'
import withLogClick from "../hoc/withLogClick"
export default function Button(props) {
    const ToButton = withLogClick(BaseButton)
    return (
        <div>
            <ToButton 
                onClick={props.onClick}
                className={classname('coo-nav')}
            >
                button
            </ToButton>
        </div>
    )
}