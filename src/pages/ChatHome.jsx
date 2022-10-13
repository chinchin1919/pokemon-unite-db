const Chat = () => {
  return <>This page is not imprimented!</>;
};

const getChatRoom = async () => {
  const res = await fetch();
  const room = await res.json();
  return await room;
};

export default Chat;
