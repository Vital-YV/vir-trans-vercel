'use client'

import Image from 'next/image'
import styles from './BrandLogo.module.css'

export default function BrandLogo({ animated = true, sizes = '(min-width: 640px) 288px, 208px', priority = true }: { animated?: boolean; sizes?: string; priority?: boolean }) {
  return <span className={styles.logo}>
    <Image src="/brand/vir-trans-logo-cropped.png" alt="" width={2139} height={471} priority={priority} sizes={sizes} className="block h-auto w-full" />
    {/* Alpha is baked into each original letter: a failed CSS mask must never reveal a solid layer. */}
    {animated && [0, 1, 2].map(index => <Image key={index} src={`/brand/vir-letter-${index}.png`} alt="" aria-hidden="true" width={2139} height={471} unoptimized loading="eager" onError={event => { event.currentTarget.style.visibility = 'hidden' }} className={`${styles.letter} ${styles[`letter${index}`]}`} />)}
  </span>
}
