import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Introduction from './Components/Introduction/Introduction'
import ProjectsPreview from './Components/ProjectsPreview/ProjectsPreview'


export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <Introduction />
      </div>
      <ProjectsPreview />
      <Footer />
      
      <div className={styles.description}>
      </div>

    </main>
  )
}
