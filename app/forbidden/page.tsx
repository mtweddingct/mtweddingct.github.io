import Link from "next/link"

export default function ForbiddenPage() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center bg-pastel-pink/30 rounded-3xl px-10 py-14 max-w-md">
        <div className="text-6xl mb-4">🔒</div>
        <h1 className="text-2xl font-bold mb-3">Access Restricted</h1>
        <p className="text-muted-foreground mb-8">
          This page is only accessible from an authorized network. If you believe you should have
          access, please connect from the correct location.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Back to Gallery
        </Link>
      </div>
    </main>
  )
}
