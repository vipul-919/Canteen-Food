import React, { useState } from 'react';
import img2 from "../../assets/menu/our-menu-bg.jpg";
import Layout from '../../components/Layouts/Layout';
import Categories from './Categories';
import items from './Data';
import Menu from './Menucard';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <Layout>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <Categories categories={categories} filterItems={filterItems} />
          <Menu items={menuItems} />
        </section>
      </main>
      <div className="about-us-image" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', zIndex: -1 , objectFit: 'cover'}}>
        <img
          src={img2}
          alt="Canteen"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </div>
    </Layout>
  );
}

export default App;

