const SECTION_TITLES = {
  documents: 'Документы',
  history: 'История',
}

export function EmployeeSectionContent({ section }) {
  const title = SECTION_TITLES[section] ?? section

  return (
    <div className="employee-section-content">
      <p className="employee-section-content__hint">
        Раздел «{title}» — заглушка для интерфейса сотрудника.
      </p>
    </div>
  )
}
