import * as React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'gatsby'
import logoWhite from '../../assets/images/whiteLogo.svg'
import logoBlue from '../../assets/images/logoBlue.svg'
import * as headerStyles from "./header.module.css"

function Header() {

    const [small, setSmall] = useState(false);

    // useEffect(() => {
    //   if (typeof window !== "undefined") {
    //     window.addEventListener("scroll", () =>
    //       setSmall(window.pageYOffset > 1500)
    //     );
    //   }
    // }, []);
    
  // if(small){
    return (
        <div className={headerStyles.headerStyles2}>
        <div className={headerStyles.headerLogo}>
        <Link to="/"><img src={logoBlue} alt="Innovatily" width='250px' /></Link>
        </div>
        <div className={headerStyles.headerMenuOptions}>
    
            <Link className={headerStyles.headerLinks2} to="/services">Services</Link>
            <Link className={headerStyles.headerLinks2} to="/story">Story</Link>
            <Link className={headerStyles.headerLinks2} to="/work">Work</Link>
            <Link className={headerStyles.headerLinks2} to="/learn">Learn</Link>
            <Link className={headerStyles.headerLinks2} to="/careers">Careers</Link>
            <Link className={headerStyles.headerLinks2} to="/contact">Contact</Link>
        </div>
    
      </div>
      )

  }
//   else{
//     return (
//         <div className={headerStyles.headerStyles}>
//         <div className={headerStyles.headerLogo}>
//         <Link to="/"><img src={logoWhite} alt="Innovatily" width='250px' /></Link>
//         </div>
//         <div className={headerStyles.headerMenuOptions}>
    
//             <Link className={headerStyles.headerLinks} to="/services">Services</Link>
//             <Link className={headerStyles.headerLinks} to="/story">Story</Link>
//             <Link className={headerStyles.headerLinks} to="/work">Work</Link>
//             <Link className={headerStyles.headerLinks} to="/learn">Learn</Link>
//             <Link className={headerStyles.headerLinks} to="/careers">Careers</Link>
//             <Link className={headerStyles.headerLinks} to="/contact">Contact</Link>
//         </div>
    
//       </div>
//       )
//   }
 
// }

export default Header