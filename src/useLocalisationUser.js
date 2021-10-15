import { useState, useEffect } from "react";

const useLocalisationUser = () => {
    const [userLocalisation, setUserLocalisation] = useState({});
    const [localLoading, setLocalLoading] =useState(true);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(location) {
            setUserLocalisation({
               latitude : location.coords.latitude,
                longitude : location.coords.longitude,
                accuracy : location.coords.accuracy
            });
            setLocalLoading(false);
        });
    }, []);

    return {local: userLocalisation, load: localLoading}

}

export default useLocalisationUser;