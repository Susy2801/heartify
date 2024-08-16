import "./Starting.css";
function Starting() {
  return (
    <div className="start__container">
      <div className="start__content">
        <img
          className="start__logo"
          src="https://e7.pngegg.com/pngimages/615/342/png-clipart-red-heart-illustration-love-heart-love-heart-romance-symbol-love-symbol-love-heart-thumbnail.png"
          alt="logo"
        ></img>
        <div className="start__header">Welcome to Heartify</div>
        <div className="start__action">
          <button
            type="button"
            className="action__signup btn btn-outline-light"
          >
            Sign up free
          </button>
          <button type="button" className="action__login btn btn-outline-light">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Starting;
