import { useParams } from 'react-router-dom'
import './PlaceholderPage.scss'

export function PlaceholderPage() {
  const { slug } = useParams()

  return (
    <div className="placeholder-page">
      <h1 className="placeholder-page__title">Страница: {slug}</h1>
      <p className="placeholder-page__text">Добавьте новую страницу в слой <code>pages/</code>.</p>
    </div>
  )
}
