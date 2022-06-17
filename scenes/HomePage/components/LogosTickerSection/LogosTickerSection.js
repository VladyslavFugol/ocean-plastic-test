import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { partners } from '../../../../constants/partners'
import styles from './LogosTickerSection.module.scss'

function LogosTickerSection() {
  return (
    <Marquee className={styles.marquee} speed={50} gradient={false}>
      {partners.map(({ name, src }) => <Image src={src} alt={name} key={name}/>)}
    </Marquee>
  )
}

export default LogosTickerSection
