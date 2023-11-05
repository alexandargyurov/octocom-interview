import {
  Card,
  Text,
  ButtonGroup,
  Button,
  Spinner,
  InputGroup,
} from "@blueprintjs/core";

import { useAtom } from "jotai";
import { chatAtom } from "@/atoms";

import styles from "./Chat.module.css";
import { ChatMessage } from "../ChatMessage/ChatMessage";

export function Chat(): JSX.Element {
  const [chat] = useAtom(chatAtom);

  function sendMessage(message: string): void {
    console.log(message);
  }

  if (!chat) {
    return <Spinner />;
  }

  return (
    <div className={styles.chatContainer}>
      <Card className={styles.navbar}>
        <Text>{chat.email} </Text>

        <ButtonGroup>
          <Button icon="star" minimal />

          <Button icon="star" minimal />
          <Button icon="star" minimal />
          <Button icon="star" minimal />
          <Button icon="star" minimal intent="primary" />
        </ButtonGroup>
      </Card>

      <div className={styles.chatMessages}>
        {chat.messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>

      <div className={styles.inputContainer}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e.currentTarget);
          }}
        >
          <InputGroup />
        </form>
      </div>
    </div>
  );
}
