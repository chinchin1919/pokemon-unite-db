const Chat = () => {
  getChatRoom();
  return <>This page is not imprimented!</>;
};

const getChatRoom = () => {
  let chatRoom = {};
  const beWrapped = () => {
    const res = fetch(
      'https://script.googleusercontent.com/a/macros/f-sapporo.ed.jp/echo?user_content_key=hu0dAmzw-rTt1h9EX_LURVq91fWcmCTVZqnqipAdzvx_XwASidJ5nxWu9-XMFGW88UWLnhN7NTlfvPsAim-eUG3fWq7la9ajOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKD69xnUh-IhrsfB63eL3TaQ1djiqESLJYkXNcZoe1zwbJVFMimvbwDGwkl1xMkIUh9GcDqYzi69rNwOzl2svdDzwiMeXCzRPHnYlXVu6ZSvRTMBkFmQ3nSn6aEFGJJrzo5cy6pr-Oj0FQ&lib=McovRLwPv54_SYyI5iluMo5-ZE1Y-KuHf'
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
