export default function VideoCard(props) {
    return (
        <div>
            <div className="max-w-3xl mx-auto bg-white  overflow-hidden md:max-w-271px">

                <div className="2xl:flex">
                    <a className="2xl:flex-shrink-0" href='/videoDetail'>
                        <img className="h-18 w-full object-cover md:h-full md:w-100" src={props.img} alt="Man looking at item at a store" />
                    </a>
                    <div className="pb-5 pt-2 px-2">
                        <a href="/videoDetail" className="leading-video font-medium text-sm">{props.info}</a>
                    </div>
                </div>

            </div>
        </div>
    )
}