import { serialize } from 'next-mdx-remote/serialize'

async function main() {
  const source = 'Some **mdx** text'
  const mdxSource = await serialize(source)
  return mdxSource
}

main()