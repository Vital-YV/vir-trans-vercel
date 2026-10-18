import Image from 'next/image'
import styles from './BrandLogo.module.css'

export default function BrandLogo({ animated = false }: { animated?: boolean }) {
  return <span className={styles.logo}>
    <Image src="/brand/vir-trans-logo-cropped.png" alt="" width={2139} height={471} priority sizes="(min-width: 640px) 288px, 208px" className="block h-auto w-full" />
    {animated && [0, 1, 2].map(index => <span key={index} aria-hidden="true" className={`${styles.letter} ${styles[`letter${index}`]}`} />)}
  </span>
}
