import Head from 'next/head'
//import styles from '@/styles/Home.module.css'
import Todo from './todo';

export default function Home() {
  return (
    <>
      <Head>
        <title>Todo App</title>
      </Head>
      <h1>Simple Todo App</h1>
      <Todo></Todo>
    </>
  )
}
