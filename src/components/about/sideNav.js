import React, {useEffect} from "react";
// import { motion, AnimatePresence } from "framer-motion";

const navStyles = {
    right: "3%",
    top: '20%',
    height: '220px',
    width: '190px',
    backgroundColor: "#F3F3F3",
}

const setRefClassName = (ref, className) => {
    if (ref.current) {
      ref.current.className = className;
    }
  };

const SideNav = (props) => {
    // console.log(props.sectionHeight, 'height')
    // const navBarRef = React.createRef();
    let sectionRefs = []
    for (let i = 0; i <= 4; i++) {
        sectionRefs[i] = React.createRef();
    }
    
    const clearNav = () => {
        for (let i = 0; i <= 4; i++) {
            setRefClassName(sectionRefs[i], "cursor-pointer")
        }
    }

    const updateNav = () => {

        console.log(window.scrollY)
        // console.log(window.screen.height)
        if (window.scrollY < window.screen.height + 695){
            clearNav()
            setRefClassName(sectionRefs[0], "text-red-700 font-bold")
        }
        else if(window.scrollY < window.screen.height + 695 + 695){
            clearNav()
            setRefClassName(sectionRefs[1], "text-red-700 font-bold")
        }
        else if(window.scrollY < 2611){
            clearNav()
            setRefClassName(sectionRefs[2], "text-red-700 font-bold")
        }
        else if(window.scrollY < window.screen.height * 4){
            clearNav()
            setRefClassName(sectionRefs[3], "text-red-700 font-bold")
        }
        else if(window.scrollY < window.screen.height * 5){
            clearNav()
            setRefClassName(sectionRefs[4], "text-red-700 font-bold")
        }
        else{
            clearNav()
        }
    }


    useEffect( () => {
        window.addEventListener('scroll', () => updateNav())
        // window.addEventListener('hashchange', (event) => navigateHash(event))
    })


  return (
    <section className="fixed rounded-xl p-2 align-center z-10" style={navStyles}>
        <nav className="h-full w-full" text-blue-900>
            <ul className="flex flex-col justify-around items-center h-full w-full text-center text-lg">
                <li className="hover:text-red-500 hover:font-bold">
                    <a aria-hidden="true" ref={sectionRefs[0]} href="#section1">Values</a>
                </li>
                <li className="hover:text-red-500 hover:font-bold">
                    <a aria-hidden="true" ref={sectionRefs[1]} href="#section2">Engineering</a>
                </li>
                <li className="hover:text-red-500 hover:font-bold">
                    <a aria-hidden="true" ref={sectionRefs[2]} href="#section3">People over everything</a>
                </li>
                <li className="hover:text-red-500 hover:font-bold">
                    <a aria-hidden="true" ref={sectionRefs[3]} href="#section4">Transparent Communication</a>
                </li>
                <li className="hover:text-red-500 hover:font-bold">
                    <a aria-hidden="true" ref={sectionRefs[4]} href="#section5">Continous evolution, active curiosity</a>
                </li>
            </ul>
        </nav>
    </section>
  );
};

export default SideNav;
