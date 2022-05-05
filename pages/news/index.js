import Link from 'next/Link'

function NewsPage () {
  return (
    <div> 
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href='/news/1'> 1st Article
          </Link>
        </li>
        <li>
          <Link href='/news/2'> 2nd Article
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NewsPage 