const HeartFilledIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className || ''}
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.32029 2.00499L8.0002 2.63541L8.68011 2.00499C9.38534 1.3511 10.2743 1 11.2057 1C12.1957 1 13.1395 1.3953 13.869 2.13279C15.3787 3.6772 15.3748 6.07012 13.8706 7.60005L13.8704 7.6002L8.0002 13.5733L2.12997 7.6002L2.12982 7.60005C0.625189 6.0697 0.622147 3.67678 2.12818 2.13607C2.86122 1.39495 3.80517 1 4.79471 1C5.72678 1 6.615 1.35104 7.32029 2.00499Z"
        fill="white"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  )
}

export default HeartFilledIcon
