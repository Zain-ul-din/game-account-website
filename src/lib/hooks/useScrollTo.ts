import { useEffect, MutableRefObject, useRef } from "react"

interface IScrollAbleElement {
  scrollIntoView: (arg?: boolean | ScrollIntoViewOptions | undefined) => void;
}

const useScrollTo = <T extends IScrollAbleElement>()=> {
  
  const ref = useRef<T>(null)
  
  useEffect(()=> {
    if(ref.current == null) return;
    let id = setTimeout(()=> {
      (ref.current as T).scrollIntoView({  behavior: 'smooth'  })
    }, 100)
    
    return ()=> clearTimeout(id)
  }, [ref])

  return ref
}

export default useScrollTo;
