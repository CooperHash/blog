import BaseButton from "./BaseButton"
import classname from 'classname'
export default function Button() {
    return (
        <div>
            {/* <BaseButton
                wrapclass={classname('')}
                className={classname('p-32px font-medium text-xl text-light bg-blue-500')} 
                buttonName={'button'}
            /> */}
            <div className='.coo-btn .coo-btn-blue w-20px h-20px font-medium text-xl text-light'>button</div>
        </div>
    )
}