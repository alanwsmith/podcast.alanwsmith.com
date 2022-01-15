import Link from 'next/link'

// TODO: Switch over to using components/MetaData

export default function LayoutMain(props) {
  return (
    <main className="pb-16 mx-auto container pt-3 px-6 max-w-prose">
      {props.content}
    </main>
  )
}
