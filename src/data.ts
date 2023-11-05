export const conversations = [
  {
    id: 1,
    email: "kansal061998@gmail.com",
    messages: [
      {
        sender: "customer",
        text: "what is exchange reset period?",
      },
      {
        sender: "bot",
        text: "Hello, let me investigate this for you.",
      },
      {
        sender: "bot",
        text: `Hey,
        Good question about the exchange reset period. In the world of futures trading, this is a brief window when the exchange halts trading to reconcile all trades, positions, and ensure margin requirements are met. Once that’s done, trading kicks off again for the next session.
        For instance, let’s take the E-mini S&P 500 futures. These contracts trade on the CME Globex platform, starting at 6:00 p.m. U.S. Eastern Time and running until 5:00 p.m. U.S. Eastern Time the following day. At around 5:00 p.m., trading is momentarily paused for the exchange reset. After this short break, trading resumes at 6:00 p.m., marking the beginning of a new session.
        Hope this clears things up. If you’ve got more questions, feel free to ask.
        `,
      },
    ],
  },
  {
    id: 2,
    email: "someguy@google.com",
    messages: [
      {
        sender: "customer",
        text: "Can I get rich using your services?",
      },
      {
        sender: "bot",
        text: "Hello, let me investigate this for you.",
      },
      {
        sender: "bot",
        text: "No.",
      },
    ],
  },
];
