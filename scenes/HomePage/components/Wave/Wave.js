import styles from './Wave.module.scss'

function Wave() {
  return (
    <div className={styles.container}>
      <svg width='3000' version='1.1' id='Слой_1' xmlns='http://www.w3.org/2000/svg'
           xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px'
           viewBox='0 0 3840 1167.06' enableBackground='new 0 0 3840 1167.06' xmlSpace='preserve'>
        <path className={styles.wave} d='M7038.5,104.75c-332.08,7.62-465.75,164.84-783.5,170.49c-331.08,5.89-652.46-184.59-984-178.8
      c-497.81,8.69-853.07,244.3-1431,137.96l0,0c-188.61-29.4-406-135.05-641.5-129.65c-332.08,7.62-465.75,164.84-783.5,170.49
      c-331.08,5.89-652.46-184.59-984-178.8C933.19,105.13,577.93,340.74,0,234.4v932.66h3840h3840V234.4
      C7491.39,205,7274,99.35,7038.5,104.75z' />
      </svg>
    </div>
  )
}

export default Wave;
