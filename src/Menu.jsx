import MenuItem from "./MenuItem";

const Menu = ({ menu }) => {
  return (
    <section className="section-center">
      {menu.map((item) => {
        // object spread out
        return <MenuItem key={item.id} {...item} />;
      })}
    </section>
  );
};

export default Menu;
