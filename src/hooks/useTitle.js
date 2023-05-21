import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(()=>{
        document.title = `EduJoyToy | ${title}`;
    }, [title])
}

export default useTitle;