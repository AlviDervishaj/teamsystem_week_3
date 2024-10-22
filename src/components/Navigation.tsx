import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { Avatar } from 'primereact/avatar';
import { Link } from 'react-router-dom';

export function Navigation() {
  const itemRenderer = (item: MenuItem) => (
    <Link to={item.data} className="flex items-center align-center p-menuitem-link">
      <i className={item.icon} />
      <span className="mx-2">{item.label}</span>
    </Link>
  );
  const items: MenuItem[] = [
    {
      label: 'Home',
      data: "/",
      icon: 'pi pi-home',
      template: itemRenderer,
    },
    {
      label: 'Projects',
      data: "/projects",
      icon: 'pi pi-microchip',
      template: itemRenderer
    },
    {
      label: 'Contact',
      data: "/contact",
      icon: 'pi pi-envelope',
      template: itemRenderer
    }
  ];

  const startNavigationItem = <img alt="logo" src="/alvi-logo-transparent-black.svg" height={80} width={80} className="p-0.5" />;
  const endNavigationItem = (
    <div className="flex items-center align-center flex-row gap-2 cursor-pointer">
      {/* https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png */}
      <Avatar className="w-16 h-16" image="/shrek.jpg" shape="circle" />
    </div>
  );

  return (
    <div className="card">
      <Menubar model={items} start={startNavigationItem} end={endNavigationItem} />
    </div>
  )
}

