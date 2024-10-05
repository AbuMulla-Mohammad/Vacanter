import { Link } from "react-router-dom";

export default function SectionsHeaderComp({ title, link, linkUrl }) {
    return (
        <div className="w-full flex justify-between items-center mb-[52px]">
            <h2 className="font-semibold text-[36px]">{title}</h2>
            {
                link != "" && <Link to={linkUrl} className="flex gap-3 justify-between items-center">
                    <span className="font-semibold text-[24px]">
                        {link}
                    </span>
                    <div className="iconWraper">
                        <img src="/icons/Arrow.svg" alt="" />
                    </div>
                </Link>
            }
        </div>
    )
}
