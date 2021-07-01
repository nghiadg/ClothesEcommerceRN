import { useEffect, useState } from "react";
import { Event, getHomeEvents } from "../../services/eventServices";

export const useHomeEvent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Array<string>>([]);
  const [eventList, setEventList] = useState<Array<Event>>([]);

  async function fetchHomeEvent() {
    try {
      const res = await getHomeEvents();
      setEventList(res.events);
    } catch (err) {
      setIsLoading(false);
      setErrors(["Request failed."]);
    }
  }

  useEffect(() => {
    fetchHomeEvent();
  }, []);

  return { isLoading, errors, eventList };
};
