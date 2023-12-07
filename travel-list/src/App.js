import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import State from "./State";
import PackingList from "./PackingList";

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItems = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (item_id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === item_id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <PackingList
        items={items}
        setItems={setItems}
        onClickDelete={handleDeleteItems}
        onToggle={handleToggleItem}
      />
      <State items={items} />
    </div>
  );
};

export default App;
