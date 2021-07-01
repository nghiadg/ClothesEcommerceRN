export type Event = {
  link: string;
  image: string;
};

/* eslint-disable @typescript-eslint/no-unused-vars */
export const getHomeEvents = (): Promise<{ events: Array<Event> }> => {
  return new Promise((resolve, reject) => {
    resolve({
      events: [
        {
          link: "",
          image:
            "https://images.unsplash.com/photo-1572584642822-6f8de0243c93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        },
        {
          link: "",
          image:
            "https://images.unsplash.com/photo-1594969155368-f19485a9d88c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        },
        {
          link: "",
          image:
            "https://images.unsplash.com/photo-1546502208-81d149d52bd7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
        },
      ],
    });
  });
};
