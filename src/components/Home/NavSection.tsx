
const NavSection = () => {
  return (
    <section className='nav-section'>
      <h1>remindMe</h1>
      <nav>
        <ul id="nav1">
          <li className="active">Today</li>
          <li>Important</li>
          <li>Upcomming Events</li>
          <li>Work</li>
          <li>Profile</li>
        </ul>
        <ul>
          <li>toggle</li>
          <li>Log-out</li>
        </ul>
      </nav>
    </section>
  );
};

export default NavSection;