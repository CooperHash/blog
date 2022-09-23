import BaseButton from "./BaseButton"
import classname from 'classname'
export default function Button() {
    return (
        <div>
            <BaseButton 
                className={classname('w-40px h-20px bg-blue-500')} 
                buttonName={'button'}
            />
        </div>
    )
}