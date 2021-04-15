import * as React from 'react';

function SvgGift(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0)" fillRule="evenodd" clipRule="evenodd">
        <path d="M3 9.25a.75.75 0 01.75.75v6.75h10.5V10a.75.75 0 011.5 0v7.5a.75.75 0 01-.75.75H3a.75.75 0 01-.75-.75V10A.75.75 0 013 9.25z" />
        <path d="M.75 6.25a.75.75 0 01.75-.75h15a.75.75 0 01.75.75V10a.75.75 0 01-.75.75h-15A.75.75 0 01.75 10V6.25zm1.5.75v2.25h13.5V7H2.25z" />
        <path d="M9 5.5a.75.75 0 01.75.75V17.5a.75.75 0 01-1.5 0V6.25A.75.75 0 019 5.5z" />
        <path d="M5.625 3.25a1.125 1.125 0 000 2.25h2.366a6.15 6.15 0 00-.351-.764C7.168 3.88 6.52 3.25 5.625 3.25zM9 6.25l.735-.148v-.006l-.003-.012-.01-.04a7.962 7.962 0 00-.166-.607 8.02 8.02 0 00-.602-1.423c-.56-1.018-1.6-2.264-3.329-2.264a2.625 2.625 0 000 5.25H9a.75.75 0 00.735-.897L9 6.25z" />
        <path d="M9.046 4.014c.56-1.018 1.6-2.264 3.329-2.264a2.625 2.625 0 010 5.25H9a.75.75 0 01-.735-.897L9 6.25a101.52 101.52 0 01-.735-.148v-.006l.003-.012.01-.04a7.977 7.977 0 01.166-.607c.12-.382.314-.899.602-1.423zm.963 1.486h2.366a1.125 1.125 0 000-2.25c-.895 0-1.543.629-2.015 1.486a6.15 6.15 0 00-.35.764zm-.274.898z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h18v18H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgGift;
