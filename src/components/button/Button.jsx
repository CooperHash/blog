import BaseButton from "./BaseButton"
import classname from 'classname'
import withLogClick from "../hoc/withLogClick"
export default function Button() {
    const ToButton = withLogClick(BaseButton)
    return (
        <div>
            <ToButton 
                onClick={() => console.log("log click")}
                className={classname('coo-nav')}
            >
                button
            </ToButton>
        </div>
    )
}