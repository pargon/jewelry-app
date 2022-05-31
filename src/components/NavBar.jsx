function NavBar() {
  return (
    <>
      <div className="container">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg"
            alt=""
            width="30"
          />
        </div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Catalog</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">About</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
