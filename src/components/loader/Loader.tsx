import "./loader.css"
function Loader() {
  return (
    <div className="
      fixed
      inset-0
      bg-black/70
      flex
      items-center
      justify-center
      z-999
    " >
    <span className="loader"></span>
    </div>
  )
}

export default Loader