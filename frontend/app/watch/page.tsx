'use client';

import { useSearchParams } from 'next/navigation'

export default function Watch() {
  const videoPrefix = 'https://storage.googleapis.com/processed-videos-bucket-12323/';
  const videoSrc = useSearchParams().get('v');

  return (
    <div>
      <h1>Watch Video</h1>
      { <video controls src={videoPrefix + videoSrc}/> }
    </div>
  );
}
