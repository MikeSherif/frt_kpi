export function DocumentIcon({ className }) {
  return (
    <svg
      className={className}
      width="20"
      height="24"
      viewBox="0 0 20 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 1H4a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7l-6-6Z"
        fill="#EEF2F8"
        stroke="#8FA3BF"
        strokeWidth="1.2"
      />
      <path d="M12 1v6h6" stroke="#8FA3BF" strokeWidth="1.2" />
      <path d="M6 12h8M6 15.5h8M6 19h5" stroke="#5B7394" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}
