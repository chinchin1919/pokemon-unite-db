import { useEffect, useRef, useState } from 'react';
const Chat = (props) => {
  const [chatInfo, setChatInfo] = useState([]);
  useEffect(() => {
    const poling = setInterval(() => {
      fetch('')
        .then((response) => response.json())
        .then((json) => setChatInfo(json[datas][data]));
    }, props.interval); // props.interval : useRef
  });
  return clearInterval(poling);
};

export default Chat;
