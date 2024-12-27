/*It will give me the online status of a particular User.
The eventListeners will keep track of when the internet is online and when it is offline. These eventListeners are super powers given to us by window objects and browsers.

I will put eventListeners onto the web page only once.
*/

import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });

    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
  }, []);

  return onlineStatus;
};
export default useOnlineStatus;
