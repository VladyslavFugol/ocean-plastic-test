import Link from 'next/link'

function LinkTo({ children, href, target, className }) {
  return (
    <Link href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={className} target={target}>{children}</a>
    </Link>
  )
}

export default LinkTo
