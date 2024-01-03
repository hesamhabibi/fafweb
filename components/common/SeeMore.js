import {Button} from "react-bootstrap";

export default function SeeMore({text = 'مشاهده بیشتـر', onClick}) {

    // -----------------------------------------------------------------------------------------------------------------

    return (
        <Button variant="light" className="px-5" onClick={onClick}>{text}</Button>
    );
}