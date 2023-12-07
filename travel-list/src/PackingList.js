import { useState } from "react";
import Item from "./Item";

const PackingList = ({ items, setItems, onClickDelete, onToggle }) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            onClickDelete={onClickDelete}
            item={item}
            key={item.id}
            onToggle={onToggle}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={() => setItems([])}>Clear list</button>
      </div>
    </div>
  );
};

export default PackingList;
