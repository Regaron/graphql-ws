import { createClient } from "graphql-ws";

const client = createClient({
  url: "ws://localhost:4000/graphql",
});

// subscription
(async () => {
  const onNext = (...rest) => {
    console.log(rest);
  };

  let unsubscribe = () => {
    /* complete the subscription */
  };

  await new Promise((resolve, reject) => {
    unsubscribe = client.subscribe(
      {
        query: "subscription { newNotification { id } }",
      },
      {
        next: onNext,
        error: reject,
        complete: resolve,
      }
    );
  });
})();
