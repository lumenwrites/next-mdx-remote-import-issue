import { serialize } from 'next-mdx-remote/serialize'

async function main() {
  const source = 'Some **mdx** text, with a component <Test />'
  const mdxSource = await serialize(source)
  return { props: { source: mdxSource } }
}

main()