import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './src/Navbar/Navbar'
import Introduction from './src/Introduction/Introduction'
import Footer from './src/Footer/Footer'


export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <Introduction/>
      </div>
      <Footer />
      <div className={styles.description}>
      </div>

    </main>
  )
}
