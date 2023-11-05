import { CardList, Text } from "@blueprintjs/core";

import { CardMessage } from "@/components/CardMessage/CardMessage";
import { conversations } from "@/data";

import styles from "./Sidebar.module.css";

type Props = {
  conversations: typeof conversations;
};

export function Sidebar({ conversations }: Props): JSX.Element {
  return (
    <div className={styles.sidebar}>
      <Text>All</Text>

      <CardList>
        {conversations.map((conversation) => (
          <CardMessage key={conversation.email} conversation={conversation} />
        ))}
      </CardList>
    </div>
  );
}
