import * as signalR from "@microsoft/signalr";
import { useEffect, useState } from "react";
import { MessageDto } from "../openapi";

/**
 * A custom React hook that provides a SignalR connection to a specified endpoint.
 * @param endpoint - A string that specifies the SignalR endpoint to connect to.
 * @param listenMethodName - A string that specifies the name of the method to listen for events on.
 * @param sendMethodName - A string that specifies the name of the method to send messages to the server.
 * @returns An object with the following properties:
 * - `isReady` - A boolean that indicates whether the SignalR connection is ready.
 * - `data` - A generic type that represents the data received from the server.
 * - `sendMessage` - A function that sends a message to the server using the specified `sendMethodName`.
 */
export default function useSignalRConnection<T>(endpoint?: string, listenMethodName?: string, sendMethodName?: string) {
  const [connection, setConnection] = useState<signalR.HubConnection | undefined>(undefined)
  const [isReady, setIsReady] = useState(false)
  const [data, setData] = useState<T | undefined>(undefined)
  
  useEffect(() => {
    if(!listenMethodName || !endpoint) {
      return;
    }
    
    const apiUrl = import.meta.env.VITE_API_URL
    if (!apiUrl) {
      throw new Error('VITE_API_URL is not defined')
    }

    const con = new signalR.HubConnectionBuilder()
      .withUrl(`${apiUrl}${endpoint}`)
      .build();

    con.on(listenMethodName, setData);

    con.start().then(() => {
      setIsReady(true);
    });

    setConnection(con)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listenMethodName, endpoint])

  
  const sendMessage = (data: MessageDto) => {
    if (!connection) {
      throw new Error('Connection is not ready')
    } else if (!sendMethodName) {
      throw new Error('sendMethodName is not defined')
    }

    connection?.invoke(sendMethodName, data).catch(function (err) {
      return console.error(err.toString());
    });
  }


  return { isReady, data, sendMessage };
}
