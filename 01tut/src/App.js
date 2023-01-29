import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
function App() {
    const [items , setitems] =useState(JSON.parse(localStorage.getItem("shoppinglist")) || []);
    const [newItem, setNewItem] =useState('')
    const [search, setSearch]= useState('')

    useEffect(()=>{
      localStorage.setItem("shoppinglist", JSON.stringify(items));
    },[items])
    
    const addItem =(item) => {
      const id = items.length ? items[items.length - 1].id +1 : 1; 
      const myNewitems = {id, checked:false, item};
      const litItems = [...items, myNewitems];
      setitems(litItems)
      
    }
    const handleCheck=(id)=>{
      const listItems = items.map((item)=> item.id === id ? {...item,checked:!item.checked} : item);
      setitems(listItems)
    }
    const handleDelete=(id) =>{
          const listItems = items.filter((item) => item.id !== id);
          setitems(listItems)
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      if(!newItem) return;
      addItem(newItem)
      setNewItem('')
    }

  return (
    <div className="App">
      <Header title="Groceries List"/>
      <SearchItem 
        search={search}
        setSearch={setSearch}/>
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit= {handleSubmit}/>
      <Content 
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}/>
      <Footer lenght={items.length} />
    </div>
  );
}

export default App;
