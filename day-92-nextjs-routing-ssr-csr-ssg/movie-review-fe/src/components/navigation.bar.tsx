import React from "react";
import styles from "@/styles/navigation.module.css"
import Link from "next/link";

export default function NavigationBar():JSX.Element{
    return(
        <div className="container bg-orange-500 flex">
            <div className={styles.headL}>
            <img className={styles.logo} src="https://images.fandango.com/cms/assets/2d5a3340-be84-11ed-9d20-83ee649e98bd--rt25-logo-mainnav-161x50.svg" alt="logo" />
            <input className={styles.search} type="search" placeholder="Search movie, TV, actors, more..."/>
            </div>
            <div className={styles.headR}>
                <ul className={styles.list}>
                    <li><Link href="#">What's the Tomatometer@?</Link></li>
                    
                    <li><Link href="#">Critics</Link></li>
                    <li><Link href="#">Login</Link>/<Link href="#">SIGNUP</Link></li>
            
                    
                </ul>
                <ul className={styles.list}>
                    <Link href="/movies"><li>MOVIES</li></Link> 
                    <li>TV SHOWS</li>
                    <li>MOVIE TRIVIA</li>
                    <li>NEWS</li>
                    <li>SHOWTIMES</li>
                </ul>

            </div>
            
        </div>
    )
}