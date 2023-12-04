import Image from 'next/image';
import Link from 'next/link';
import { getVideos } from './firebase/functions';
import styles from './page.module.css'


export default async function Home() {
  const videos = await getVideos();

  return (
    <main>
      {
        videos.map((video, i) => (
          <Link key={i} href={`/watch?v=${video.filename}`}>
            <Image src={'/favicon.ico'} alt='video' width={120} height={80}
              className={styles.thumbnail}/>
          </Link>
        ))
      }
    </main>
  )
}
