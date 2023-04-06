import NavigationBar from "@/components/navigation.bar";
import Link from "next/link";
import React from "react"
import styles from "@/styles/Home.module.css"

export async function getServerSideProps() {
  const theaterRequest = await fetch("http://localhost:8080/theater/list")
  const theaterData =  await theaterRequest.json()
  console.log(theaterData);
  
  return{
    props:{
      theater:theaterData
    }
  }
}


export default function Home(props:any):JSX.Element {
  console.log(props);

  const side = typeof window ? "client" : "server"


  return (
    
    <div className={"container"}>
      <NavigationBar/>
      welcome

      <div>
        you'r  currently on the {side}-side.
      </div>
      <Link href="/about">About Page</Link>
      <Link href="/contact">Contact Page</Link>
      <Link href="/greeting/Jhon?age=25">Greeting Page</Link>
      {/* <Link href="/post/2021-08-01/first-post">Posts Page</Link> */}
      <Link href={{pathname:"/post/[date]/[slug]",query:{date:"2021-08-01", slug:"first-post"}}}>Posts Page</Link>
    </div>
  )
}
