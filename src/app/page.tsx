"use client"
import Header from '@/components/sections/header'
import Card from '@/components/card'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Card />
    </main>
  )
}
