import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#080808',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '20%',
          border: '1px solid #3B82F6',
          color: '#F8F8F8',
          fontSize: '18px',
          fontWeight: 600,
          fontFamily: 'sans-serif',
        }}
      >
        S
      </div>
    ),
    { ...size }
  )
}
