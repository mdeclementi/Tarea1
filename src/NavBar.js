import { Menubar } from 'primereact/menubar';

function NavBar() {
  const items = [];

  const start = <div className="nav-logo"><span className="pi pi-bolt" style={{ fontSize: '1.5rem' }}></span><span> Three Pics</span></div>;
  const end = <span className="pi pi-user" style={{ fontSize: '1.5rem' }}></span>;

  return (
    <div className="card">
      <Menubar model={items} start={start} end={end} />
    </div>
  )
}

export default NavBar;
