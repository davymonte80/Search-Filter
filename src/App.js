// Import React and useState hook from the 'react' library
import React, { useState } from "react";

// Import the styles from the external CSS file
import "./styles.css";
//main component
function App() {
// list of fruits
  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
    "Juice",
    "Avocado"

  ];
  // useState hook to manage the state of the filtered list
  const [filterList, setFilterList] = useState(list);
  // useState hook to manage the state of the new item input
  const [newItem, setNewItem] = useState("");

   // Event handler function for the search input
  const handleSearch = (event) => {

// If the search input is empty, reset the filter list to the original list
    if (event.target.value === "") {
      setFilterList(list);
      return;
    }
     // Filter the list based on the search input (case-insensitive)
    const filteredValues = list.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );

    // Update the state with the filtered list
    setFilterList(filteredValues);
  };
// Event handler function for adding a new item
const handleAddItem = () => {
  setFilterList([...filterList, newItem]);
  setNewItem("");
}

  //Render the component
  return (
    <div className="app">
      <div>
        Search: <input name="query" type="text" onChange={handleSearch} />
      </div>
      {filterList &&
        filterList.map((item, index) => (
          <div key={index}>{item}</div> //Display each item
        ))}
    </div>

   {/* Form for adding a new item */}
   <div>
   <div>
     Add Item: 
     <input
       type="text"
       value={newItem}
       onChange={(e) => setNewItem(e.target.value)}
     />
     <button onClick={handleAddItem}>Add</button>
   </div>
 </div>

 {/* Display the filtered list of items */}
 {filterList &&
   filterList.map((item, index) => (
     <div key={index}>{item}</div> // Display each item
   ))}
</div>
);
}

// ... (export statement)
export default App;