import Filter from "./Filter";
import Title from "./Title";

export default function Top(props) {
    return (
        <div className="flex flex-row justify-between mx-5 items-top">
            <Title/>
            <Filter/>
        </div>
    )
}