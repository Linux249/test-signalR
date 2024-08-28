"use client"
import signalR from "use-signalr-hub";

signalR.setDefaults({
    httpTransportTypeOrOptions: {
        accessTokenFactory: () => TOKEN
    },
    automaticReconnect: false
})

const TOKEN = "ADD A VALID JWT TOEKN"
// const URL = "https://roboverse-platform-sbox.azurewebsites.net/telemetry"
const URL = "https://roboverse-statekeeping-sbox.greenocean-0b5e85b4.westeurope.azurecontainerapps.io/hub/twin"

export default function TestSignalR() {

    const signalRHub = signalR.useHub(URL, {
        onConnected: (hub) => {
            console.log('CONNECTED', hub)
            // Connected to hub
            hub.on("ReceiveMessage", (user, message) => {
                // Listen to "ReceiveMessage" on hub
            })
        },
        onDisconnected: (error) => {
            // Disconnected from hub
            console.log('DIS', error)
        },
        onError: (error) => {
            // Failed to connect to hub
            console.log('ERROR', error)
        }
    })

    console.log('signalRHub',signalRHub)
    // const handleSubmit = (user, message) => {
    //     signalRHub.invoke("SendMessage", user, message)
    //         .catch((error) => {
    //             // Failed to invoke "SendMessage" on hub
    //         })
    // }
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

        </main>
    );
}
