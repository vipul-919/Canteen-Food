import Image2 from "../../assets/menu/Biryani.jpg";
import Image5 from "../../assets/menu/Roti.jpg";
import Image8 from "../../assets/menu/butter naan.jpg";
import image1 from "../../assets/menu/item-1.jpeg";
import Image3 from "../../assets/menu/item-3.jpeg";
import Image4 from "../../assets/menu/item-4.jpeg";
import Image6 from "../../assets/menu/item-6.jpeg";
import Image7 from "../../assets/menu/item-7.jpeg";
import Image9 from "../../assets/menu/item-9.jpeg";
import Image15 from "../../assets/menu/Cold milkshakes.jpg";
import Image14 from "../../assets/menu/Crunchy cookie cream.jpg";
import Image16 from "../../assets/menu/Dal rice.jpg";
import Image18 from "../../assets/menu/Samosa.jpg";
import Image10 from "../../assets/menu/burger-13.jpg";
import Image11 from "../../assets/menu/burger-14.jpg";
import Image17 from "../../assets/menu/butter paneer.jpg";
import Image19 from "../../assets/menu/cake-2.jpg";
import Image20 from "../../assets/menu/cake.jpg";
import Image22 from "../../assets/menu/franch fry.jpg";
import Image12 from "../../assets/menu/kadai paneer.jpg";
import Image23 from "../../assets/menu/pasta.jpg";
import Image24 from "../../assets/menu/pav-bhaji.jpg";
import Image25 from "../../assets/menu/pizza-2.jpg";
import Image26 from "../../assets/menu/pizza.jpg";
import Image13 from "../../assets/menu/strawberry milkshake.jpg";
import Image21 from "../../assets/menu/wada-pav.jpg";


const menu = [
    {
      id: '0001',
      title: 'buttermilk pancakes',
      category: 'breakfast',
      price: 15.99,
      img: image1,
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: '0002',
      title: 'Biryani',
      category: 'lunch',
      price: 13.99,
      img: Image2,
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: '0003',
      title: 'godzilla milkshake',
      category: 'shakes',
      price: 6.99,
      img: Image3,
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: '0004',
      title: 'country delight',
      category: 'breakfast',
      price: 20.99,
      img: Image4,
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: '0005',
      title: 'Roti',
      category: 'lunch',
      price: 22.99,
      img: Image5,
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: '0006',
      title: 'oreo dream',
      category: 'shakes',
      price: 18.99,
      img: Image6,
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: '0007',
      title: 'bacon overflow',
      category: 'breakfast',
      price: 8.99,
      img: Image7,
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: '0008',
      title: 'Butter Naan',
      category: 'lunch',
      price: 12.99,
      img: Image8,
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: '0009',
      title: 'quarantine buddy',
      category: 'shakes',
      price: 16.99,
      img: Image9,
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    
    {
      id: '0010',
      title: 'Crispy Chiken',
      category: 'breakfast',
      price: 15.99,
      img: Image10,
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: '0011',
      title: 'Vegan Burger',
      category: 'breakfast',
      price: 13.99,
      img: Image11,
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: '0012',
      title: 'Bouble Burger',
      category: 'lunch',
      price: 6.99,
      img: Image12,
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: '0013',
      title: 'Strawberry Milkshake',
      category: 'shakes',
      price: 20.99,
      img: Image13,
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: '0014',
      title: 'Crunchy Cookie Cream',
      category: 'shakes',
      price: 22.99,
      img: Image14,
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: '0015',
      title: 'Cold Milkshake',
      category: 'shakes',
      price: 18.99,
      img: Image15,
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
   
    {
      id: '0016',
      title: 'Dal Rice',
      category: 'lunch',
      price: 15.99,
      img: Image16,
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: '0017',
      title: 'butter paneer',
      category: 'lunch',
      price: 13.99,
      img: Image17,
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: '0018',
      title: 'Samosa',
      category: 'breakfast',
      price: 6.99,
      img: Image18,
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: '0019',
      title: 'Chocolate Cake',
      category: 'breakfast',
      price: 20.99,
      img: Image19,
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: '0020',
      title: 'Chocolate Strawberry Cake',
      category: 'breakfast',
      price: 22.99,
      img: Image20,
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: '0021',
      title: 'Wada Pav',
      category: 'breakfast',
      price: 18.99,
      img: Image21,
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: '0022',
      title: 'Franch Fry',
      category: 'breakfast',
      price: 18.99,
      img: Image22,
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: '0023',
      title: 'Pasta',
      category: 'breakfast',
      price: 20.99,
      img: Image23,
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: '0024',
      title: 'Pav Bhaji',
      category: 'lunch',
      price: 22.99,
      img: Image24,
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: '0025',
      title: 'Pizza marinara',
      category: 'breakfast',
      price: 18.99,
      img: Image25,
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: '0026',
      title: 'Margherita Pizza',
      category: 'breakfast',
      price: 18.99,
      img: Image26,
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
  ];
  export default menu;