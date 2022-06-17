function RightArrow({ onClick, color, className }) {
  return (
    <svg className={className} width='32' height='32' viewBox='0 0 32 32'
         xmlns='http://www.w3.org/2000/svg' onClick={onClick}>
      <path
        d='M29.7071 15.2929C30.0976 15.6834 30.0976 16.3166 29.7071 16.7071L23.3431 23.0711C22.9526 23.4616 22.3195 23.4616 21.9289 23.0711C21.5384 22.6805 21.5384 22.0474 21.9289 21.6569L27.5858 16L21.9289 10.3431C21.5384 9.95262 21.5384 9.31946 21.9289 8.92893C22.3195 8.53841 22.9526 8.53841 23.3431 8.92893L29.7071 15.2929ZM29 17H2V15H29V17Z'
        fill={color}
      />
    </svg>
  );
}

export default RightArrow;
