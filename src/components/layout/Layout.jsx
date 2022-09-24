import { NAV_LIST, HEAD } from "../../styles/styles"
export default function Layout() {
    return (
        <div className="fixed">
            <div className={HEAD}></div>
            <div className="w-full h-1px bg-zinc-900 fixed top-20"></div>
            <div className="">
                <div className="flex flex-row">
                    <div className={NAV_LIST}></div>
                    <div className="h-screen w-1px bg-zinc-900"></div>
                    <div className="flex-1 bg-gray-200 h-full"></div>
                </div>
            </div>
        </div>
    )
}