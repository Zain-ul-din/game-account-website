import Markdown from 'react-markdown'
import { readFileSync } from 'fs'

export default function Page() {
  return (
    <div className="w-full py-16 px-4 bg-white">
      <div className="max-w-screen-xl mx-auto flex flex-col prose prose-sm prose-blue md:prose-lg">
        <Markdown>
          {readFileSync(`${process.cwd()}/src/docs/privacy.md`, 'utf-8')}
        </Markdown>
      </div>
    </div>
  )
}
