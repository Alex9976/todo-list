import { A, Div, RxDiv } from 'reactronic-front'
import { App } from '../models/App'
import { style } from './AppWindow.css'
import { HomePageView } from './HomePage.view'

const totalImage = 8

export function AppWindow(
  app: App) {
  return (
    Div('AppWindow', e => {
      e.className = style.class.AppWindow
      e.style.backgroundImage = 'url(../assets/'+(Math.floor(Math.random( ) * totalImage) + 1 )+'.jpg)'
      //const crt = GetImg(e) //async api
      RxDiv('Body', null, async e => {
        e.className = style.class.Body
        HomePageView(app)
      })
    })
  )
}

async function GetImg(e: HTMLDivElement)
{
  const url = 'https://api.unsplash.com/photos/random?query=nature&orientation=landscape&client_id=wJQ8LjVThYrSF8a9uPXYnEE68op_IBc5MuY5cRZci7w'
  const res = await fetch(url)
  if (res.ok) {
    const data = await res.json()
    e.style.backgroundImage = `url(${data.urls.regular})`
  }
  else
  {
    e.style.backgroundImage = 'url(../assets/background.jpg)'
  }
}