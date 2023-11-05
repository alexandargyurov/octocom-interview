import { conversations } from "@/data";

import styles from "./ChatMessage.module.css";

type Props = {
  message: (typeof conversations)[0]["messages"][0];
};

export function ChatMessage({ message }: Props): JSX.Element {
  return (
    <div
      className={`${styles.messageContainer} ${
        message.sender === "bot" && styles.botMessage
      } `}
    >
      {message.text}
    </div>
  );
}
