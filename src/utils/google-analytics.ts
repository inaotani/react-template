export const pageview = (url: string) => {
  if(window?.gtag){
    window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ?? '', {
      page_path: url,
    })
  }
}

export const eventGa = (action: string, params: {[key: string]: string}) => {
  if(window?.gtag){
    window.gtag('event', action, params)
  }
}