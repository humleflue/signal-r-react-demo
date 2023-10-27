import { useQuery } from "react-query";
import { HubMetaDataService, MessageDto } from "../openapi";
import useSignalRConnection from "./useSignalRConnection";

export default function useChatHub() {
  const { data: messageDtoKeys } = useQuery({
    queryKey: "messageDtoKeys",
    queryFn: () => HubMetaDataService.getHubMetaDataChatHub(),
  });
  
  const { data: latestMessage, sendMessage } = useSignalRConnection<MessageDto>(
    messageDtoKeys?.hubName,
    messageDtoKeys?.receiveMessage,
    messageDtoKeys?.sendMessage
  );

  return { latestMessage, sendMessage };
}