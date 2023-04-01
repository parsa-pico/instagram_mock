import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import chatsContext from "../Context/chatsContext";

export default function useUser() {
  const [currentChat, setCurrentChat] = useState();
  const [chats, setChats] = useContext(chatsContext);
  const params = useParams();
  useEffect(() => {
    const id = parseInt(params.id);
    const chat = chats.find((chat) => {
      return chat.id === id;
    });
    setCurrentChat(chat);
  }, []);
  return [chats, setChats, currentChat, setCurrentChat];
}
