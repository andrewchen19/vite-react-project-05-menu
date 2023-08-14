// import custom Hook
import { useAppContext } from "./App";

const MenuItem = ({ title, category, price, img, desc }) => {
  // use custom Hook
  const { type } = useAppContext();

  // conditional rendering
  let filter;
  if (type === "all") {
    filter = true;
  } else {
    filter = category === type;
  }

  return (
    <>
      {filter && (
        <article className="menu-item">
          <img src={img} alt={title} className="img" />
          <div className="item-info">
            <header>
              <h5>{title}</h5>
              <span className="item-price">{price}</span>
            </header>
            <p className="item-text">{desc}</p>
          </div>
        </article>
      )}
    </>
  );
};

export default MenuItem;
