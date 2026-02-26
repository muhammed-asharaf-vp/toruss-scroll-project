import "./globals.css"
import ScrollProvider from "@/components/scroll/ScrollProvider"

export const metadata = {
  title: "Name Card",
  description: "Cinematic Scroll Experience",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ScrollProvider>{children}</ScrollProvider>
      </body>
    </html>
  )
}