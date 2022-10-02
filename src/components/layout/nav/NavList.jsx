import Button from "../../button/Button"
import store from "../../../store/configStore"
import { click } from "../../../store/actions/actions"
export default function NavList() {
    return (
        <div className="fixed top-100px z-88">
            <div className="flex flex-col justify-between items-center h-60 w-50 bg-red-200">
                <Button config={{ content: '文章', url: '/artilce' }} onClick={() => store.dispatch(click())} />
                <Button config={{ content: '规范', url: '/artilce' }} />
                <Button config={{ content: '视频', url: '/artilce' }} />
                <Button config={{ content: '阅读', url: '/artilce' }} />
            </div>
        </div>
    )
}