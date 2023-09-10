import Image from 'next/image'
import Todo from '@/app/Component/Todo'
import Head from 'next/head'
import Header from './Component/Header'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center content-center p-24 bg-white w-[100%] h-[45rem] ">
      <Header />
      <Todo />
    </main>
  )
}
