import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './src/Navbar/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className={styles.description}>
        <p>
          Hello.
        </p>
      </div>
    </main>
  )
}
