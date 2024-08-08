

export function Item({ item, onDeleteItem, onToggleItems }) {
  return (
    <li>
      <input type="checkBox" value={item.packed} onChange={() => { onToggleItems(item.id); }} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description}  {item.quantity}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
