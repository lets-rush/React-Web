export const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://cdn.dribbble.com/userupload/13436509/file/original-2c3ff409e8a468dd18f8da0397be234e.png?resize=752x&vertical=center"
          className="logo"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
