import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

async function main() {
  const source = 'Some **mdx** text, with a component <Test />'
  const mdxSource = await serialize(source)
  return { props: { source: mdxSource } }
}

main()