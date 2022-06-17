import Image from 'next/image'
import classNames from 'classnames'
import styles from './CustomImage.module.scss'

function CustomImage({ src, size }) {
  return (
    <div className={classNames(styles.container, styles[size])}>
      <Image src={src}/>
    </div>
  )
}

export default CustomImage
