export default function Header() {
    return (
        <div className="">
            <div className="max-w-7xl px-4 mx-auto sm:px-6">
                <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#">
                            <span className="sr-only">Your Company</span>
                            <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                        </a>
                    </div>
                    <nav className="space-x-10 md:flex">
                        <a href="/article">规范</a>
                        <div>语言</div>
                        <a href="/video">视频</a>
                        <div>
                            <a href=""></a>
                        </div>
                    </nav>
                    <div className="items-center justify-end md:flex md:flex-1 lg:w-0">
                        <a href="/login">sign in</a>
                        <a className="ml-8 px-4 py-2 bg-indigo-600 rounded-md text-white text-base">sign up</a>
                    </div>
                </div>
            </div>
        </div>
    )
}