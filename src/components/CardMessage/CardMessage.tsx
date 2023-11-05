import { Text, Card, Icon } from "@blueprintjs/core";
import { useAtom } from "jotai";
import { chatAtom } from "@/atoms";
import { conversations } from "@/data";

type Props = {
  conversation: (typeof conversations)[0];
};

export function CardMessage({ conversation }: Props): JSX.Element {
  const [, setChat] = useAtom(chatAtom);

  return (
    <Card onClick={() => setChat(conversation)}>
      <Icon icon="user" />

      <Text>{conversation.email}</Text>
      <Text>{conversation.messages[0].text}</Text>
    </Card>
  );
}
