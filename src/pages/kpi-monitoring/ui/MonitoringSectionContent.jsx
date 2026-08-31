const SECTION_TITLES = {
  answers: 'Ответы',
  documents: 'Документы',
  history: 'История',
  collection: 'Сбор данных',
}

export function MonitoringSectionContent({ section }) {
  const title = SECTION_TITLES[section] ?? section

  return (
    <div className="monitoring-section-content">
      <p className="monitoring-section-content__hint">
        Раздел «{title}» — заглушка под отдельную страницу в FSD (<code>pages/</code> или{' '}
        <code>widgets/</code>).
      </p>
    </div>
  )
}
