import React, { useEffect } from "react";

import { setRefClassName} from "../../utilities/refHelpers";

const navStyles = {
    right: "3%",
    top: '20%',
    height: '220px',
    width: '190px',
    backgroundColor: "#F3F3F3",
}

const clearRefs = (refs) => {
    refs.forEach(ref => {
        setRefClassName(ref, "cursor-pointer")
    });
}

const updateNav = (sectionRefs, refs) => {
    if(refs.length < 1) return;
    const selectedRef = sectionRefs.reduce((previousRef, currentRef, index) => {
        return refs[index].current && window.scrollY > refs[index].current.offsetTop - 50 ? currentRef : previousRef;
    }, [sectionRefs[0]])
    clearRefs(sectionRefs)
    setRefClassName(selectedRef, "text-red-700 font-bold")
}

const SideNav = ({refs, sectionNames}) => {
    let sectionRefs = refs.map(() => React.createRef())

    useEffect( () => {
        window.addEventListener('scroll', () => updateNav(sectionRefs, refs))
    }, [sectionRefs, refs])
    
  return (
    <section className="fixed rounded-xl p-2 align-center z-10" style={navStyles}>
        <nav className="h-full w-full" >
            <ul className="flex flex-col justify-around items-center h-full w-full text-center text-lg">
            {
                sectionNames.map( (title, i) => {
                return(
                    <li  key={i + 1} className="" >
                        <a aria-hidden="true" ref={sectionRefs[i]} href={`#section${i + 1}`}>{title}</a>
                    </li>
                )
                })
            }
            </ul>
        </nav>
    </section>
  );
};

export default SideNav;
