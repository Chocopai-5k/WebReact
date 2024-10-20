// import React, { useState } from 'react';
// import axios from 'axios';
// import { Widget, addResponseMessage } from 'react-chat-widget';
// import 'react-chat-widget/lib/styles.css';

// interface MessageResponse {
//   response: string;
// }

// const ChatBox: React.FC = () => {
//   const [loading, setLoading] = useState<boolean>(false);

//   const handleNewUserMessage = async (newMessage: string) => {
//     setLoading(true);
//     try {
//       const response = await axios.post<MessageResponse>('http://localhost:5000/api/chat', { message: newMessage });
//       addResponseMessage(response.data.response);
//     } catch (error) {
//       console.error('Error sending message to backend:', error);
//       addResponseMessage('Đã xảy ra lỗi, vui lòng thử lại!');
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="ChatBox">
//       <Widget
//         handleNewUserMessage={handleNewUserMessage}
//         title="Hỗ trợ trực tuyến"
//         subtitle="Chat với chúng tôi"
//       />
//       {loading && <p>Đang xử lý...</p>}
//     </div>
//   );
// };

// export default ChatBox;
