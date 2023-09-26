import Navbar from "../header/Navabr";

function StandadLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default StandadLayout;
