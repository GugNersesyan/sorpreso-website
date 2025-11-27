import { useParams } from "react-router-dom";
import { drinksData } from "../MenuDrinks/MenuDrinks";
import "./MenuCategory.css";


export default function MenuCategoryPage() {
  const { category } = useParams();

  const drinks = drinksData[category as keyof typeof drinksData];

  return (
    <div className="menu_category_page">
      {drinks ? (
    
          <ul className="menu_category_list">
            {drinks.map((drink, i) => (
              <li className="menu_category_item" key={i}>
                <div className="menu_wrap">
                  <div className="text_wrap">
                    <img className="menu_icons" src={drink.img} alt={drink.name} />
                    <p className="menu_text">{drink.name}</p>
                    <p className="menu_price">{drink.price}</p>
                  </div>


                </div>

              </li>
            ))}
          </ul>
       

      )
        : (
          <p>No drinks in this caregory</p>
        )}
    </div>
  );
}
