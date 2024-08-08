import { useState } from "react";
export default function Form({ onAddItems }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
  
    //If i write handleClick function on button onclick event then it will only call function when we hit the button . But instead if we want to submit form on pressing enter also we should go gor onSubmit event.
    function handleSubmit(e) {
      e.preventDefault();
      if (!description) {
        return
      }
  
      const newItem = { description, quantity, packed: false, id: Date.now() }
      onAddItems(newItem)
      setDescription("");
      setQuantity(1)
    }
  
    return (<form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip? </h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
          return <option value={num} key={num}>{num}</option>
        })}
      </select>
      <input type="text" placeholder="Item...." value={description}
        onChange={(e) => setDescription(e.target.value)}></input>
      <button>Add</button>
    </form>);
  }