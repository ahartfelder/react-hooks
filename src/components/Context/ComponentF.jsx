import { ChannelContext, UserContext } from "../../App";

export default function ComponentF() {
    return (
        <>
            <UserContext.Consumer>
                { user => { 
                    return (
                        <ChannelContext.Consumer>
                            { channel => {
                                return <h1>Component F - {channel} - {user}</h1>
                            }}
                        </ChannelContext.Consumer>
                    )
                }}
            </UserContext.Consumer>
        </>
    )
}