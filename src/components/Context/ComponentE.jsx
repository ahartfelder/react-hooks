import { useContext } from "react";
import { ChannelContext, UserContext } from "../../App";
import ComponentF from "./ComponentF";

export default function ComponentE() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <>
            <h1>Component E - {channel} - {user}</h1>
            {/* <ComponentF /> */}
        </>
    )
}