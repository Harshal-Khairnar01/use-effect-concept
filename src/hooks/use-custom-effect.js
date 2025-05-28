import { useRef } from "react";

const useCustomEffect = (cb, deps) => {
  const isFirstRender = useRef(true);
  const prevDeps = useRef([]);
  // First Render
  if (isFirstRender.current) {
    isFirstRender.current = false;
    const cleanup=cb();
    return ()=>{
        if(cleanup && typeof cleanup === 'function'){
            cleanup();
        }
    };
  }

  // Deps Changes and No dependency array
  const depsChanged = deps
    ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current)
    : true;

    if(depsChanged){
       const cleanup= cb();
       return ()=>{
        if(cleanup && typeof cleanup === 'function' && deps){
            cleanup();
        }
    };
    }

  // cleanUp
  prevDeps.current=deps||[];
};

export default useCustomEffect;
