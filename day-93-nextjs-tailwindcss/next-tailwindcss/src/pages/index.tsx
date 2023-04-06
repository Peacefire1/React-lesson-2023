import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1 className="text-3x; font-bold underline m-1 text-primary">Day-93-Welocme to TailWindCss Journey</h1>
    </>
  )
}
