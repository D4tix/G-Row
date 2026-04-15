type ArrowRightIconProps = {
  className?: string;
};

export function ArrowRightIcon({ className }: ArrowRightIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path
        d="M4.16675 10H15.8334M15.8334 10L10.8334 5M15.8334 10L10.8334 15"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}