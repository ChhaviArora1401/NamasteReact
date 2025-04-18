import { useState, useEffect } from "react";

const useOnlineStaus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  // check if online

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
        setOnlineStatus(true);
      });
  }, [])
  // boolean value

  return onlineStatus;
}

export default useOnlineStaus