import { useEffect } from 'react'

type MusicProps = {
  url: string
}

export default function Music({ url }: MusicProps) {
  let visual = ''

  const sourceUrl = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${url}&color=%2300a19a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&frameborder=no${visual}`

  return (
    <iframe
      width='100%'
      height='166'
      scrolling='no'
      allow='autoplay'
      src={sourceUrl}
      frameBorder='none'
    ></iframe>
  )
}
