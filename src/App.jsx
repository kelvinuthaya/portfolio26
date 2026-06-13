// App.jsx — racine du portfolio.
// Empile en single-page : Navbar fixe + 5 sections (Présentation, Compétences, Projets, Stages, Bilan) + Footer.
// Fond Frutiger Aero composé de deux couches : gradient aqua dans index.css + bokeh blanc fixed ici.
// Z-index : bokeh = 0 (derrière), contenu = 2 (au-dessus), navbar = 50 (gérée dans Navbar.jsx).

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Presentation from './pages/Presentation'
import Competences from './pages/Competences'
import Projets from './pages/Projets'
import Stages from './pages/Stages'
import Bilan from './pages/Bilan'

// Bulles blanches diffuses fixes — un des deux "ingrédients" Frutiger Aero (avec les gradients aqua).
const bokehSpots = [
  { w: 100, h: 100, top: '30px',    right: '80px',  op: 1    },
  { w: 55,  h: 55,  top: '160px',   right: '220px', op: 0.6  },
  { w: 75,  h: 75,  bottom: '160px', left: '40px',  op: 0.45 },
  { w: 40,  h: 40,  top: '70px',    left: '260px',  op: 0.4  },
  { w: 130, h: 130, bottom: '40px', right: '30px',  op: 0.25 },
]

export default function App() {
  return (
    <>
      {/* Couche 1 — bokeh blanc fixed derrière tout le contenu (pointerEvents:none pour ne pas bloquer les clics) */}
      <div aria-hidden="true" style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        {bokehSpots.map((b, i) => (
          <div
            key={i}
            style={{
              position: 'absolute', borderRadius: '50%',
              width: b.w, height: b.h, top: b.top, right: b.right, bottom: b.bottom, left: b.left,
              opacity: b.op,
              background: 'radial-gradient(circle, rgba(255,255,255,0.50) 0%, rgba(255,255,255,0.04) 55%, transparent 100%)',
            }}
          />
        ))}
      </div>

      {/* Couche 2 — contenu du portfolio, au-dessus du bokeh */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Navbar />
        <Presentation />
        <Competences />
        <Projets />
        <Stages />
        <Bilan />
        <Footer />
      </div>
    </>
  )
}
