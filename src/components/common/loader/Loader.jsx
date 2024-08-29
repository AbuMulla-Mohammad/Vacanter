import { ColorRing } from "react-loader-spinner";

export default function Loader() {
    return (
        <div className=" w-full h-full flex justify-center items-center ">
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#09E5AB', '#28A2ED', '#28E0ED', '#28ED76', '#2863ED']}
            />
        </div>
    )
}
