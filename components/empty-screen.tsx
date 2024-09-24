import { systemPrompt } from '@/lib/system-prompt'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Current system prompt
        </h1>
        <pre className="bg-muted p-2 rounded whitespace-pre-wrap">
          {systemPrompt}
        </pre>
      </div>
    </div>
  )
}
