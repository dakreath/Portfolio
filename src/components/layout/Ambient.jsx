// The soft light behind the whole page. It stays fixed while the content scrolls over it,
// so every section sits on the same continuous background instead of a flat color.
function Ambient() {
  return (
    <div className="ambient" aria-hidden="true">
      <div className="ambient-orb ambient-orb--a" />
      <div className="ambient-orb ambient-orb--b" />
      <div className="ambient-grid" />
    </div>
  )
}

export default Ambient
