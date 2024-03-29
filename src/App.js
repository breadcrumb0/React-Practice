import { useState } from "react";
import Content from "./Content";
import Header from "./Header";
import AddItem from "./AddItem";
import Footer from "./Footer";
function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "ITems1 ",
    },
    {
      id: 2,
      checked: false,
      item: "ITems2 ",
    },
    {
      id: 3,
      checked: true,
      item: "ITems3 ",
    },
  ]);
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };
  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem/>
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
