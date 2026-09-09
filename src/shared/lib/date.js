const MONTHS = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
]

const WEEKDAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

function pad(n) {
  return String(n).padStart(2, '0')
}

export function parseDisplayDate(value) {
  if (!value) return null
  const match = String(value).match(/^(\d{2})\.(\d{2})\.(\d{4})$/)
  if (!match) return null
  const day = Number(match[1])
  const month = Number(match[2]) - 1
  const year = Number(match[3])
  const date = new Date(year, month, day)
  if (date.getFullYear() !== year || date.getMonth() !== month || date.getDate() !== day) {
    return null
  }
  return date
}

export function formatDisplayDate(date) {
  if (!date) return ''
  return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()}`
}

export function isSameDay(a, b) {
  if (!a || !b) return false
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

export function getMonthLabel(year, month) {
  return `${MONTHS[month]} ${year}`
}

export function getWeekdays() {
  return WEEKDAYS
}

export function getCalendarCells(year, month) {
  const first = new Date(year, month, 1)
  const startDow = (first.getDay() + 6) % 7
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const daysInPrev = new Date(year, month, 0).getDate()
  const cells = []

  for (let i = 0; i < startDow; i += 1) {
    const day = daysInPrev - startDow + 1 + i
    cells.push({
      key: `prev-${day}`,
      day,
      current: false,
      date: new Date(year, month - 1, day),
    })
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push({
      key: `cur-${day}`,
      day,
      current: true,
      date: new Date(year, month, day),
    })
  }

  const rest = (7 - (cells.length % 7)) % 7
  for (let day = 1; day <= rest; day += 1) {
    cells.push({
      key: `next-${day}`,
      day,
      current: false,
      date: new Date(year, month + 1, day),
    })
  }

  return cells
}

export { MONTHS, WEEKDAYS }
