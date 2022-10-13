const Chat = () => {
  return <>This page is not imprimented!</>;
};

const getChatRoom = () => {
  let chatRoom = {};
  const beWrapped = () => {
    const res = fetch(
      'https://script.google.com/a/macros/f-sapporo.ed.jp/s/AKfycbyGRApn5hMMSRMsCX3rmuQHv9EQ8QTZE9Sh7uFnuCXxhcGqgEA5v2ChsjDzqFeNXCtMKQ/exec'
    )
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

export default Chat;
