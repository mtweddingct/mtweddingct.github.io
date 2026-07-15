import { readdir } from "fs/promises"
import path from "path"
import AudioPlayer from "@/app/components/AudioPlayer"

export default async function MessagesPage() {
  let files: string[] = []

  try {
    const messagesDir = path.join(process.cwd(), "public", "messages")
    const dirFiles = await readdir(messagesDir)
    files = dirFiles
      .filter((f) => /\.(mp3|wav|ogg|m4a|aac)$/i.test(f))
      .sort()
  } catch {
    // Directory doesn't exist or is unreadable — show empty state
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-2">Voice Messages</h1>
      <p className="text-muted-foreground mb-8">Personal audio messages left for you.</p>

      {files.length === 0 ? (
        <div className="text-center py-20 rounded-2xl bg-pastel-lavender/30">
          <p className="text-lg text-muted-foreground">No voice messages yet.</p>
          <p className="text-sm text-muted-foreground mt-1">
            Place audio files in <code className="bg-white/60 px-1.5 py-0.5 rounded">public/messages/</code> to see them here.
          </p>
        </div>
      ) : (
        <ul className="flex flex-col gap-4">
          {files.map((file, i) => (
            <li key={file}>
              <AudioPlayer src={`/messages/${file}`} name={file} index={i} />
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
