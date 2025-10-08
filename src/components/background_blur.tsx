export function BackgroundBlur() {
  return (
    <div className="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
      <div
        className="absolute w-96 h-96 bg-purple-300 rounded-full 
        mix-blend-multiply filter blur-3xl opacity-70 
        dark:opacity-30 dark:bg-purple-600"
        style={{ top: "50%", left: "40%", transform: "translate(-50%, -50%)" }}
      />
      <div
        className="absolute w-96 h-96 bg-blue-300 rounded-full 
        mix-blend-multiply filter blur-3xl opacity-70 
        dark:opacity-30 dark:bg-blue-600"
        style={{ top: "50%", left: "60%", transform: "translate(-50%, -50%)" }}
      />
      <div
        className="absolute w-96 h-96 bg-indigo-300 rounded-full 
        mix-blend-multiply filter blur-3xl opacity-70 
        dark:opacity-30 dark:bg-indigo-600"
        style={{ top: "60%", left: "50%", transform: "translate(-50%, -50%)" }}
      />
    </div>
  )
}