import React, { useState } from "react"
import Menu from "./Menu";
import Catagori from "./Catagori";
import items from "./Data"
import './App.css';

function App() {
  const [menuItem, setMenuItem]=useState(items);

  const filteritem =(categoryO)=>{
    if(categoryO === 'all'){
      setMenuItem(items)
      return ;
    }
    const fitlercate= items.filter((item)=>item.category === categoryO)
     setMenuItem(fitlercate)
    
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2> Our Menu</h2> 
        </div>
        <Catagori filteritem={filteritem} />
        <Menu  item={menuItem} />
      </section>
      
    </main>
  );
}

export default App;
