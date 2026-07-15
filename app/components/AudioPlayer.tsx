"use client"

import { useState, useRef } from "react"

interface AudioPlayerProps {
  src: string
  name: string
  index: number
}

const pastelBgs = [
  "bg-pastel-pink",
  "bg-pastel-yellow",
  "bg-pastel-green",
  "bg-pastel-lavender",
  "bg-pastel-orange",
]

export default function AudioPlayer({ src, name, index }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)

  const bg = pastelBgs[index % pastelBgs.length]

  const displayName = name.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ")

  const togglePlay = () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setPlaying(!playing)
  }

  const handleTimeUpdate = () => {
    if (!audioRef.current) return
    setProgress(audioRef.current.currentTime)
  }

  const handleLoadedMetadata = () => {
    if (!audioRef.current) return
    setDuration(audioRef.current.duration)
  }

  const handleEnded = () => setPlaying(false)

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return
    audioRef.current.currentTime = Number(e.target.value)
    setProgress(Number(e.target.value))
  }

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${sec.toString().padStart(2, "0")}`
  }

  return (
    <div className={`${bg} rounded-2xl p-5 flex flex-col gap-3 shadow-sm`}>
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />
      <div className="flex items-center gap-4">
        <button
          onClick={togglePlay}
          className="w-11 h-11 rounded-full bg-white/70 hover:bg-white/90 flex items-center justify-center shadow-sm transition-all duration-200 shrink-0"
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? (
            <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-foreground ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
        <div className="flex-1 min-w-0">
          <p className="font-medium text-foreground truncate capitalize">{displayName}</p>
          <p className="text-xs text-muted-foreground mt-0.5">
            {formatTime(progress)} / {formatTime(duration)}
          </p>
        </div>
      </div>
      <input
        type="range"
        min={0}
        max={duration || 1}
        step={0.1}
        value={progress}
        onChange={handleSeek}
        className="w-full accent-primary h-1.5 rounded-full cursor-pointer"
        aria-label="Seek audio"
      />
    </div>
  )
}
