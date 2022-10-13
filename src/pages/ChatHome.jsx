const Chat = () => {
  getChatRoom();
  return <>This page is not imprimented!</>;
};

const getChatRoom = () => {
  let chatRoom = {};
  const beWrapped = () => {
    const res = fetch(
      'https://script.googleusercontent.com/a/macros/f-sapporo.ed.jp/echo?user_content_key=BH8Kv2-HKQYYjlY7IqN45V38lEL1SzoVswu9259GzCNqdZheAUGElDH3UAFpbK1dMbrZjzC6hxqRxGzjnLYTBDnLNLb8gvf3OJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKD69xnUh-IhrsfB63eL3TaQ1djiqESLJYkXNcZoe1zwbJVFMimvbwDGwkl1xMkIUh9GcDqYzi69rNwOzl2svdDzwiMeXCzRPHnYlXVu6ZSvRTMBkFmQ3nSn6aEFGJJrzo5cy6pr-Oj0FQ&lib=McovRLwPv54_SYyI5iluMo5-ZE1Y-KuHf',
      { method: 'GET', mode: 'no-cors', 'Access‐Control‐Allow‐Origin': '*' }
    )
      .then((response) => {
        return response; // あるいは response.json()
      })
      .then((blob) => {
        console.log(blob);
        chatRoom = JSON.stringify(blob);
      });
  };
  beWrapped();
  console.log(JSON.stringify(chatRoom));
  return chatRoom;
};

export default Chat;
