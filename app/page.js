import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './src/Navbar/Navbar'
import Introduction from './src/Introduction/Introduction'


export default function Home() {
  return (
    <main>
      <Navbar />
      <Introduction/>
      <div className={styles.description}>
        <p className="titleName">
          Aditya Ajay
        </p>
      </div>
    </main>
  )
}
