import { ImageResponse } from 'next/og'

export const alt = 'Kickoff — Zero to production-ready Laravel in one command'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#0e0b07',
          fontFamily: 'monospace',
        }}
      >
        {/* Brand stripe */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 10,
            background: 'linear-gradient(to right, #b01e10, #ff2d20, #ff6252)',
          }}
        />

        {/* Logo row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 48 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 72,
              height: 72,
              borderRadius: 12,
              background: '#d92616',
              color: '#ffffff',
              fontSize: 44,
              fontWeight: 700,
            }}
          >
            K
          </div>
          <div style={{ display: 'flex', color: '#ede6d8', fontSize: 56, fontWeight: 700 }}>
            kickoff<span style={{ color: '#ff6252' }}>_</span>
          </div>
        </div>

        {/* Terminal */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: 900,
            borderRadius: 16,
            border: '2px solid #3a3128',
            background: '#171310',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '16px 24px',
              borderBottom: '2px solid #3a3128',
              background: '#221b14',
            }}
          >
            <div style={{ width: 16, height: 16, borderRadius: 999, background: '#f5655b' }} />
            <div style={{ width: 16, height: 16, borderRadius: 999, background: '#f6bd3b' }} />
            <div style={{ width: 16, height: 16, borderRadius: 999, background: '#43c645' }} />
            <div style={{ display: 'flex', flex: 1, justifyContent: 'center', color: '#9c9184', fontSize: 20 }}>
              ~/projects
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              padding: 32,
              fontSize: 28,
              color: '#c9bfae',
            }}
          >
            <div style={{ display: 'flex' }}>
              <span style={{ color: '#ff6252' }}>~ $&nbsp;</span>
              <span>kickoff start cleaniquecoders my-app</span>
            </div>
            <div style={{ display: 'flex' }}>
              <span style={{ color: '#53d86a' }}>&nbsp;&nbsp;&gt;&nbsp;</span>
              <span>Laravel 13 · Livewire 4 · Pest · PHPStan · CI</span>
            </div>
            <div style={{ display: 'flex', color: '#ff6252' }}>→ Zero to production-ready in one command.</div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
