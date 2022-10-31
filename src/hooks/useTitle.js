import {useEffect} from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Shamim Docs`;
    }, [title]);
};

export default useTitle;