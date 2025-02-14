const menus = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Schedules',
    href: '/schedule',
  },
  {
    label: 'Settings',
    href: '/settings',
  },
];

const MenuBar = () => {
  return (
    <div className="flex items-center gap-30">
      {menus.map(menu => (
        <div key={menu.label} className="body-14-500 text-gray-800">
          {menu.label}
        </div>
      ))}
    </div>
  );
};

export default MenuBar;
