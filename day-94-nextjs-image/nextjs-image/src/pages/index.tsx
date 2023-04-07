import Image from 'next/image'
import { Inter } from 'next/font/google'
import Button from '@/components/Button'
import FanceButton from '@/components/FancyButton'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Image src="https://images-ext-1.discordapp.net/external/9Tywj1N9AzqAioaRvbhPb-i52zg1R8bdv8qVr1OZFeU/https/images.unsplash.com/photo-1605460375648-278bcbd579a6?width=1746&height=1164"
      alt='Dog'
      width={300}
      height={300}

      />
      <Button>Click me</Button>
      <FanceButton>click me</FanceButton>
    </div>
  )
}
