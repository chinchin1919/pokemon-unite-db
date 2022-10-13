const Chat = () => {
  return <>This page is not imprimented!</>;
};

const getChatRoom = () => {
  let chatRoom = {};
  const beWrapped = () => {
    const res = fetch('')
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        return response.blob(); // あるいは response.json()
      })
      .then((blob) => {
        chatRoom = JSON.stringify(blob);
      });
  };
  beWrapped();
  return chatRoom;
};
