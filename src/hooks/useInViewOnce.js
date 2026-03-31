import { useEffect, useRef, useState } from "react";

export function useInViewOnce({
    threshold = 0.18,
    rootMargin = "0px 0px -10% 0px"
}={}){

    const elementRef = useRef(null);
    const[isInView, setIsInView] = useState(false);

    useEffect(() => {
        const element = elementRef.current;
        if(!element || isInView) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting){
                    setIsInView(true);
                    observer.unobserve(element);
                }
            },
            {
                threshold,
                rootMargin
            }
        );

        observer.observe(element);

        return() => {
            observer.disconnect();
        };
    }, [isInView, threshold, rootMargin]);

    return { elementRef, isInView };
}