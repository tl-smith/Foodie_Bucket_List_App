import { useRef } from "react";

export default function BucketList(props) {
    const dialogRef = useRef("");

    return (
        <dialog>
            <p>Hello it's me</p>
            <button onClick={() => dialogRef.current.close()}>Close Me</button>
        </dialog>
    );
}