import { Link } from "react-router-dom"
export default function Card(props) {
    return (
        <div className="mt-10">
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl">
                <Link to="/article/name">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-18 w-full object-cover md:h-full md:w-100" src={props.img} alt="Man looking at item at a store" />
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{props.title}</div>
                            <div className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</div>
                            <p className="mt-2 text-gray-500">{props.info}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}