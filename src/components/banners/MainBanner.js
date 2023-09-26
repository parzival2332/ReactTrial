import gymbanner from "../../images/gymbanner.jpg";

function MainBanner() {
  return (
    <div className="bg-gray-400 flex items-center justify-center">
      <img src={gymbanner} alt="Main banner" />
    </div>
  );
}

export default MainBanner;
