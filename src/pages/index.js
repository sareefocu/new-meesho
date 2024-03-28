import Layout from '@/componets/Layout';
import { useEffect, useState } from 'react';
import { items } from "../../public/Items.json";
import { Carousel } from "react-bootstrap";
import { IoMdClock } from "react-icons/io";
import Card from '@/componets/Card';
import Link from 'next/link';
// import "bootstrap/dist/css/bootstrap.min.css";
function Home() {
  const initialTime = 700; // 10 minutes in seconds
  const [time, setTime] = useState(initialTime);
  const [mySidenavopen, setmySidenavopen] = useState(true);
  const [data133, setdata133] = useState([]);
  useEffect(() => {
    return () => {
      let data1 = JSON.parse(localStorage.getItem("d1"))
      setdata133(data1)
    }
  }, [])

  console.log(data133);
  const totalMrp = data133?.reduce(
    (sum, product) => sum + parseInt(product?.price * product?.quantity),
    0
  );
  useEffect(() => {
    const timer = setInterval(() => {
      if (time <= 0) {
        clearInterval(timer);
      } else {
        setTime((prevTime) => prevTime - 1);
      }
      if (time < 10) {
        setTime(700)
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [time]);
  const [products, setProducts] = useState([
    {
      "id": 901,
      "title": "Spotzero By Milton Mini Spin Mop, Aqua Green",
      "title2": "Kurti Combo Set's Of 2",
      "cancelprice": "799",
      "dicPersent": "95.01% Off",
      "image": "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231016121644494.png?v=1710321974",
      "slider": [
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231016121644494.png?v=1710321974",
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231016121644494.png?v=1710321974",
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231016121644494.png?v=1710321974",
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231016121644494.png?v=1710321974",
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231016121644494.png?v=1710321974"
      ],
      "price": "99",
      "highlight": "/static/media/1a.8bafb9eb4a34d7fb0a6c.png"
    },
    {
      "id": 902,
      "title": "E-COSMOS Food Chopper 900ml, Steel Large Manual Hand-Press Vegetable Chopper Mixer Cutter to Cut Onion, Salad, Tomato, Potato (Pack of 1) 900ml",
      "title2": "Kurti Combo Set's Of 2",
      "cancelprice": "299",
      "dicPersent": "95.01% Off",
      "image": "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231220154433294.png?v=1710322019",
      "slider": [
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231220154433294.png?v=1710322019"
      ],
      "price": "99",
      "highlight": "/static/media/2a.e76679b25d2abdb4ff25.png"
    },
    {
      "id": 903,
      "title": "Pigeon by Stovekraft Ultra Premium Handy Chopper with 3 Blades for Effortlessly Chopping Vegetables and Fruits for Your Kitchen (Green, 400 ml, 12420)",
      "title2": "Kurti Combo Set's Of 2",
      "cancelprice": "299",
      "dicPersent": "95.01% Off",
      "image": "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231220154323351.png?v=1710322006",
      "slider": [
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231220154323351.png?v=1710322006"
      ],
      "price": "99",
      "highlight": "/static/media/3a.6db61210999d776827d.png"
    },
    {
      "id": 904,
      "title": "NutriPro Juicer Mixer Grinder - Smoothie Maker - 500 Watts (3 Jars 2 Blades)",
      "title2": "Kurti Combo Set's Of 2",
      "cancelprice": "999",
      "dicPersent": "95.01% Off",
      "image": "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224182531736.png?v=1710322437",
      "slider": [
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224182531736.png?v=1710322437"
      ],
      "price": "299",
      "highlight": "/static/media/4a.21f71b30006772fcf1b5.png"
    },
    {
      "id": 905,
      "title": "Milton Pro Lunch Tiffin (3 Microwave Safe Inner Steel Containers, 180/320/450 ml; 1 Plastic Chutney Dabba,100 ml; 1 Aqua Steel Bottle, 750 ml, Steel Spoon and Fork) With Insulated Fabric Jacket, Black",
      "title2": "Kurti Combo Set's Of 2",
      "cancelprice": "849",
      "dicPersent": "95.01% Off",
      "image": "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224182531736.png?v=1710322437",
      "slider": [
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224182531736.png?v=1710322437"
      ],
      "price": "99",
      "highlight": "/static/media/5a.bccdbe8f75b87759afb4.png"
    },
    {
      "id": 906,
      "title": "Pigeon by Stovekraft Amaze Plus Electric Kettle (14289) with Stainless Steel Body, 1.5 litre, used for boiling Water, making tea and coffee, instant noodles, soup etc. (Silver)",
      "title2": "Kurti Combo Set's Of 2",
      "cancelprice": "599",
      "dicPersent": "95.01% Off",
      "image": "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183926357.png?v=1710322577",
      "slider": [
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183926357.png?v=1710322577"
      ],
      "price": "139",
      "highlight": "/static/media/6a.4a3c469902a49859434.png"
    },
    {
      "id": 907,
      "title": "Godrej aer Matic Kit (Machine + 1 Refill) - Automatic Room Fresheners with Flexi Control Spray | Violet Valley Bloom | 2200 Sprays Guaranteed | Lasts up to 60 days (225ml)",
      "title2": "Kurti Combo Set's Of 2",
      "cancelprice": "599",
      "dicPersent": "95.01% Off",
      "image": "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183838782.png?v=1710322574",
      "slider": [
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183838782.png?v=1710322574"
      ],
      "price": "99",
      "highlight": "/static/media/7a.0a2fbf617f1f307359de.png"
    },
    {
      "id": 908,
      "title": "SOPL-OLIVEWARE Teso Pro Lunch Box With Steel Cutlery,3 Microwave Safe Inner Steel Containers With Bpa Free Lids(290Ml,450Ml&600Ml)Plastic Pickle Box(130Ml)Steel Water Bottle(750Ml)-Blue,600 Ml",
      "title2": "Kurti Combo Set's Of 2",
      "cancelprice": "849",
      "dicPersent": "95.01% Off",
      "image": "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183827183.png?v=1710322571",
      "slider": [
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183827183.png?v=1710322571"
      ],
      "price": "99",
      "highlight": "/static/media/8a.74d4e9a1a3c0adbeed60.png"
    },
    {
      "id": 909,
      "title": "Mistri Office Table for Home/Writing Desk for Office/Folding Table for School/Folding Study Table/Work from Home Multipurpose Table (Black) Wood",
      "title2": "Kurti Combo Set's Of 2",
      "cancelprice": "399",
      "dicPersent": "95.01% Off",
      "image": "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183810531.png?v=1710322567",
      "slider": [
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183810531.png?v=1710322567"
      ],
      "price": "99",
      "highlight": "/static/media/9a.13c6f7a44348a6c374ca.png"
    },
    {
      "id": 0.1,
      "title": "GOPI Kitchen Tools For Home Kitchen Items 1000 ML, Color Black",
      "title2": "Kurti Combo Set's Of 2",
      "cancelprice": "299",
      "dicPersent": "95.01% Off",
      "image": "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183724212.png?v=1710322564",
      "slider": [
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183724212.png?v=1710322564"
      ],
      "price": "99",
      "highlight": "/static/media/aa3.3d21b0a9edaa5d0434d9.png",
      "rating": "/static/media/aa4.4c80261e904e1a4dd26a.png"
    },
    {
      "id": 0.2,
      "title": "PYXBE Quick Spin Mop,Easy Wheels & Big Bucket with 2 Microfiber Refills, Floor Cleaning Mop with Bucket, pocha for Floor Cleaning, Mopping Set Grill Basting Mop Long qw (Blue)    ",
      "title2": "Kurti Combo Set's Of 2",
      "cancelprice": "537",
      "dicPersent": "95.01% Off",
      "image": "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183712567.png?v=1710322560",
      "slider": [
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183712567.png?v=1710322560"
      ],
      "price": "99",
      "highlight": "/static/media/bb3.78558b8165beb9bc8550.png",
      "rating": "/static/media/bb2.0824181503dcff93e1c2.png"
    },
    {
      "id": 1,
      "title": "4 SACRED Plastic Grocery Container - 1200 ml  (Pack of 12, Clear)",
      "title2": "Kurti Combo Set's Of 2",
      "cancelprice": "537",
      "dicPersent": "95.01% Off",
      "image": "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183651178.png?v=1710322557",
      "slider": [
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183651178.png?v=1710322557"
      ],
      "price": "99",
      "highlight": "/static/media/a1.6001977a89fd9f467f63.png",
      "rating": "/static/media/a2.adec00952e230de43b6e.png"
    },
    {
      "id": 2,
      "title": "Auspicia Plastic Grocery Container - 750 ml  (Pack of 12, Black)",
      "title2": "Kurti Combo Set's Of 2",
      "cancelprice": "999",
      "dicPersent": "95.01% Off",
      "image": "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183630484.png?v=1710322554",
      "slider": [
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183630484.png?v=1710322554"
      ],
      "price": "299",
      "highlight": "/static/media/b1.2115075724a98aeb164f.png",
      "rating": "/static/media/b2.c8ae0d45435309951309.png"
    },
    {
      "id": 3,
      "title": "Spice Set Plastic  (1 Piece)",
      "title2": "Kurti Combo Set's Of 2",
      "cancelprice": "99",
      "dicPersent": "95.01% Off",
      "image": "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183559536.png?v=1710322547",
      "slider": [
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183559536.png?v=1710322547",
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183559536.png?v=1710322547"
      ],
      "price": "99",
      "highlight": "/static/media/c1.c81b6ed480853c3bf37a.png",
      "rating": "/static/media/c2.cb5b8308284aebe3da24.png"
    },
    {
      "id": 4,
      "title": "OTIZ 3000 ml Cooking Oil Dispenser Set  (Pack of 3)",
      "title2": "Kurti Combo Set's Of 2",
      "cancelprice": "99",
      "dicPersent": "95.01% Off",
      "image": "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183546786.png?v=1710322544",
      "slider": [
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183546786.png?v=1710322544"
      ],
      "price": "99",
      "highlight": "/static/media/d1.2793d9b1f383b3ba6377.png",
      "rating": "/static/media/d2.9ccda78e1018734b9302.png"
    },
    {
      "id": 5,
      "title": "3D METRO SUPER STORE Plastic Fridge Container - 1800 ml  (Pack of 5, Clear)",
      "title2": "Kurti Combo Set's Of 2",
      "cancelprice": "99",
      "dicPersent": "95.01% Off",
      "image": "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183535780.png?v=1710322541",
      "slider": [
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183535780.png?v=1710322541"
      ],
      "price": "99",
      "highlight": "/static/media/e1.b3654dc5cd45420a37f8.png",
      "rating": "/static/media/e2.9e27b045172ea6584f4a.png"
    },
    {
      "id": 6,
      "title": "Sumeet Spice Set Stainless Steel",
      "title2": "Kurti Combo Set's Of 2",
      "cancelprice": "549",
      "dicPersent": "95.01% Off",
      "image": "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183450482.png?v=1710322537",
      "slider": [
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183450482.png?v=1710322537"
      ],
      "price": "99",
      "highlight": "/static/media/f1.7e927282f77be0d6b251.png",
      "rating": "/static/media/f2.9d2a1a4a395fcdbf3709.png"
    },
    {
      "id": 7,
      "title": "Bear Grips 1000 ml Cooking Oil Dispenser  (Pack of 1)",
      "title2": "Kurti Combo Set's Of 2",
      "cancelprice": "999",
      "dicPersent": "95.01% Off",
      "image": "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183439396.png?v=1710322534",
      "slider": [
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183439396.png?v=1710322534"
      ],
      "price": "99",
      "highlight": "/static/media/g1.6e411257753d9cb2f4f9.png",
      "rating": "/static/media/g2.696b82cdd461660be9dd.png"
    },
    {
      "id": 8,
      "title": "ATROCK 1000 ml Cooking Oil Dispenser Set  (Pack of 2)",
      "title2": "Kurti Combo Set's Of 2",
      "cancelprice": "563",
      "dicPersent": "95.01% Off",
      "image": "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183427518.png?v=1710322531",
      "slider": [
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183427518.png?v=1710322531"
      ],
      "price": "99",
      "highlight": "/static/media/h1.b53f9e69b6accd6c65b4.png",
      "rating": "/static/media/h2.8d4ba5ec0b25a376e064.png"
    },
    {
      "id": 9,
      "title": "Anantam homes Spice Set Stainless Steel  (1 Piece)",
      "title2": "Kurti Combo Set's Of 2",
      "cancelprice": "1,217",
      "dicPersent": "95.01% Off",
      "image": "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183347447.png?v=1710322528",
      "slider": [
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183347447.png?v=1710322528"
      ],
      "price": "99",
      "highlight": "/static/media/i1.1a048a00827454762fe9.png",
      "rating": "/static/media/i2.de51a83758880b4113ae.png"
    },
    {
      "id": 35,
      "title": "INFINITY CHOICE Cleaver Cutter-2 in 1 Superior Quality Kitchen Knife with Spring Action Multipurpose Vegetable Scissor 1 pc Vegetable Chopper  (1 CUTTER)",
      "title2": "Kurti Combo Set's Of 2",
      "cancelprice": "184",
      "dicPersent": "95.01% Off",
      "image": "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183337824.png?v=1710322525",
      "slider": [
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183337824.png?v=1710322525"
      ],
      "price": "99",
      "highlight": "/static/media/i1.0ce62a7af8802ddd12db.png",
      "rating": "/static/media/i2.fc17f0080dd4dc459114.png"
    },
    {
      "id": 37,
      "title": "INFINITY CHOICE Cleaver Cutter-2 in 1 Superior Quality Kitchen Knife with Spring Action Multipurpose Vegetable Scissor 1 pc Vegetable Chopper  (1 CUTTER)",
      "title2": "Kurti Combo Set's Of 2",
      "cancelprice": "184",
      "dicPersent": "95.01% Off",
      "image": "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183325526.png?v=1710322520",
      "slider": [
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183325526.png?v=1710322520"
      ],
      "price": "99",
      "highlight": "/static/media/i1.0ce62a7af8802ddd12db.png",
      "rating": "/static/media/i2.fc17f0080dd4dc459114.png"
    },
    {
      "id": 371,
      "title": "INFINITY CHOICE Cleaver Cutter-2 in 1 Superior Quality Kitchen Knife with Spring Action Multipurpose Vegetable Scissor 1 pc Vegetable Chopper  (1 CUTTER)",
      "title2": "Kurti Combo Set's Of 2",
      "cancelprice": "184",
      "dicPersent": "95.01% Off",
      "image": "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183325526.png?v=1710322520",
      "slider": [
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183325526.png?v=1710322520"
      ],
      "price": "99",
      "highlight": "/static/media/i1.0ce62a7af8802ddd12db.png",
      "rating": "/static/media/i2.fc17f0080dd4dc459114.png"
    },
    {
      "id": 372,
      "title": "INFINITY CHOICE Cleaver Cutter-2 in 1 Superior Quality Kitchen Knife with Spring Action Multipurpose Vegetable Scissor 1 pc Vegetable Chopper  (1 CUTTER)",
      "title2": "Kurti Combo Set's Of 2",
      "cancelprice": "184",
      "dicPersent": "95.01% Off",
      "image": "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183313362.png?v=1710322516",
      "slider": [
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183313362.png?v=1710322516"
      ],
      "price": "99",
      "highlight": "/static/media/i1.0ce62a7af8802ddd12db.png",
      "rating": "/static/media/i2.fc17f0080dd4dc459114.png"
    },
    {
      "id": 373,
      "title": "INFINITY CHOICE Cleaver Cutter-2 in 1 Superior Quality Kitchen Knife with Spring Action Multipurpose Vegetable Scissor 1 pc Vegetable Chopper  (1 CUTTER)",
      "title2": "Kurti Combo Set's Of 2",
      "cancelprice": "184",
      "dicPersent": "95.01% Off",
      "image": "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183313362.png?v=1710322516",
      "slider": [
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183313362.png?v=1710322516"
      ],
      "price": "99",
      "highlight": "/static/media/i1.0ce62a7af8802ddd12db.png",
      "rating": "/static/media/i2.fc17f0080dd4dc459114.png"
    },
    {
      "id": 374,
      "title": "INFINITY CHOICE Cleaver Cutter-2 in 1 Superior Quality Kitchen Knife with Spring Action Multipurpose Vegetable Scissor 1 pc Vegetable Chopper  (1 CUTTER)",
      "title2": "Kurti Combo Set's Of 2",
      "cancelprice": "184",
      "dicPersent": "95.01% Off",
      "image": "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183250159.png?v=1710322512",
      "slider": [
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183250159.png?v=1710322512"
      ],
      "price": "99",
      "highlight": "/static/media/i1.0ce62a7af8802ddd12db.png",
      "rating": "/static/media/i2.fc17f0080dd4dc459114.png"
    },
    {
      "id": 375,
      "title": "INFINITY CHOICE Cleaver Cutter-2 in 1 Superior Quality Kitchen Knife with Spring Action Multipurpose Vegetable Scissor 1 pc Vegetable Chopper  (1 CUTTER)",
      "title2": "Kurti Combo Set's Of 2",
      "cancelprice": "184",
      "dicPersent": "95.01% Off",
      "image": "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183215148.png?v=1710322503",
      "slider": [
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183215148.png?v=1710322503"
      ],
      "price": "99",
      "highlight": "/static/media/i1.0ce62a7af8802ddd12db.png",
      "rating": "/static/media/i2.fc17f0080dd4dc459114.png"
    },
    {
      "id": 376,
      "title": "INFINITY CHOICE Cleaver Cutter-2 in 1 Superior Quality Kitchen Knife with Spring Action Multipurpose Vegetable Scissor 1 pc Vegetable Chopper  (1 CUTTER)",
      "title2": "Kurti Combo Set's Of 2",
      "cancelprice": "184",
      "dicPersent": "95.01% Off",
      "image": "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183152482.png?v=1710322500",
      "slider": [
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183152482.png?v=1710322500"
      ],
      "price": "99",
      "highlight": "/static/media/i1.0ce62a7af8802ddd12db.png",
      "rating": "/static/media/i2.fc17f0080dd4dc459114.png"
    },
    {
      "id": 377,
      "title": "INFINITY CHOICE Cleaver Cutter-2 in 1 Superior Quality Kitchen Knife with Spring Action Multipurpose Vegetable Scissor 1 pc Vegetable Chopper  (1 CUTTER)",
      "title2": "Kurti Combo Set's Of 2",
      "cancelprice": "184",
      "dicPersent": "95.01% Off",
      "image": "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183152482.png?v=1710322500",
      "slider": [
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183152482.png?v=1710322500"
      ],
      "price": "99",
      "highlight": "/static/media/i1.0ce62a7af8802ddd12db.png",
      "rating": "/static/media/i2.fc17f0080dd4dc459114.png"
    },
    {
      "id": 378,
      "title": "INFINITY CHOICE Cleaver Cutter-2 in 1 Superior Quality Kitchen Knife with Spring Action Multipurpose Vegetable Scissor 1 pc Vegetable Chopper  (1 CUTTER)",
      "title2": "Kurti Combo Set's Of 2",
      "cancelprice": "184",
      "dicPersent": "95.01% Off",
      "image": "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183142489.png?v=171032997",
      "slider": [
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183142489.png?v=171032997"
      ],
      "price": "99",
      "highlight": "/static/media/i1.0ce62a7af8802ddd12db.png",
      "rating": "/static/media/i2.fc17f0080dd4dc459114.png"
    },
    {
      "id": 379,
      "title": "INFINITY CHOICE Cleaver Cutter-2 in 1 Superior Quality Kitchen Knife with Spring Action Multipurpose Vegetable Scissor 1 pc Vegetable Chopper  (1 CUTTER)",
      "title2": "Kurti Combo Set's Of 2",
      "cancelprice": "184",
      "dicPersent": "95.01% Off",
      "image": "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183130698.png?v=171032993",
      "slider": [
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183130698.png?v=171032993"
      ],
      "price": "99",
      "highlight": "/static/media/i1.0ce62a7af8802ddd12db.png",
      "rating": "/static/media/i2.fc17f0080dd4dc459114.png"
    },
    {
      "id": 3710,
      "title": "INFINITY CHOICE Cleaver Cutter-2 in 1 Superior Quality Kitchen Knife with Spring Action Multipurpose Vegetable Scissor 1 pc Vegetable Chopper  (1 CUTTER)",
      "title2": "Kurti Combo Set's Of 2",
      "cancelprice": "184",
      "dicPersent": "95.01% Off",
      "image": "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183130698.png?v=171032993",
      "slider": [
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183130698.png?v=171032993"
      ],
      "price": "99",
      "highlight": "/static/media/i1.0ce62a7af8802ddd12db.png",
      "rating": "/static/media/i2.fc17f0080dd4dc459114.png"
    },
    {
      "id": 3711,
      "title": "INFINITY CHOICE Cleaver Cutter-2 in 1 Superior Quality Kitchen Knife with Spring Action Multipurpose Vegetable Scissor 1 pc Vegetable Chopper  (1 CUTTER)",
      "title2": "Kurti Combo Set's Of 2",
      "cancelprice": "184",
      "dicPersent": "95.01% Off",
      "image": "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183119543.png?v=171032990",
      "slider": [
        "https://cdn.shopify.com/s/files/1/0864/0204/0081/products/photogrid.photocollagemaker.photoeditor.squarepic_20231224183119543.png?v=171032990"
      ],
      "price": "99",
      "highlight": "/static/media/i1.0ce62a7af8802ddd12db.png",
      "rating": "/static/media/i2.fc17f0080dd4dc459114.png"
    }
  ]
  
 );
  const [products1, setProducts1] = useState({ pixelId: "" });

  useEffect(() => {
    fetchProducts1();
  }, []);
  const fetchProducts1 = async () => {
    try {
      let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      };

      const response = await fetch('/api/upichange', {
        method: 'GET',
        headers: headersList,
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("upi", data.upi.upi)
        setProducts1(data.pixelId);
      } else {
      }
    } catch (error) {
    }
  };
  useEffect(() => {
    const timer = setInterval(() => {
      if (time <= 0) {
        clearInterval(timer);
      } else {
        setTime((prevTime) => prevTime - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [time]);

  const { bootstrap } = items;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Layout data={products1}>
        <div id="container" style={{ overflow: 'hidden' }}>
          <div style={{ height: '100%' }} data-reactroot="">
            <div> <div className="_1FWdmb" style={{}}>
              <div className="d-flex align-items-center">
                <Link
                  href="/" className="_3NH1qf d-none" id="back-btn" style={{ marginTop: 5 }}>
                  <svg
                    width={25}
                    height={25}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    mt={2}
                    iconsize={24}
                    className="sc-gswNZR ffVWIj"
                  >
                    <path
                      d="M13.7461 2.31408C13.5687 2.113 13.3277 2 13.0765 2C12.8252 2 12.5843 2.113 12.4068 2.31408L6.27783 9.24294C5.90739 9.66174 5.90739 10.3382 6.27783 10.757L12.4068 17.6859C12.7773 18.1047 13.3757 18.1047 13.7461 17.6859C14.1166 17.2671 14.0511 16.5166 13.7461 16.1718L8.29154 9.99462L13.7461 3.82817C13.9684 3.57691 14.1071 2.72213 13.7461 2.31408Z"
                      fill="#666666"
                    />
                  </svg>
                </Link>
                <a
                  className="_3NH1qf "
                  id="showmenu"
                  href="/"
                >
                  <svg
                    width="100%"
                    height="100%"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    mt={5}
                    iconsize={24}
                    className="sc-gswNZR jQgwzc"
                  >
                    <path
                      d="M2 17.2222C2 17.8359 2.49746 18.3333 3.11111 18.3333H20.8889C21.5025 18.3333 22 17.8359 22 17.2222C22 16.6086 21.5025 16.1111 20.8889 16.1111H3.11111C2.49746 16.1111 2 16.6086 2 17.2222ZM2 11.6667C2 12.2803 2.49746 12.7778 3.11111 12.7778H20.8889C21.5025 12.7778 22 12.2803 22 11.6667C22 11.053 21.5025 10.5556 20.8889 10.5556H3.11111C2.49746 10.5556 2 11.053 2 11.6667ZM3.11111 5C2.49746 5 2 5.49746 2 6.11111C2 6.72476 2.49746 7.22222 3.11111 7.22222H20.8889C21.5025 7.22222 22 6.72476 22 6.11111C22 5.49746 21.5025 5 20.8889 5H3.11111Z"
                      fill="#333333"
                    />
                  </svg>
                </a>
                <a
                  className="Z4_K_h"
                  style={{ width: "auto", height: "auto", marginRight: 10, marginLeft: 10 }}
                  href="/"
                >
                  <svg
                    viewBox="0 0 156 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    height={25}
                    width={90}
                    iconsize={20}
                    className="sc-gswNZR gNMKRJ"
                  >
                    <g clipPath="url(#meeshoLogo_svg__a)">
                      <path fill="#fff" d="M0 0h156v36H0z" />
                      <path
                        d="M56.307 23.698c.38-.29.568-.707.568-1.253 0-1.731-.237-3.288-.707-4.675-.47-1.383-1.154-2.56-2.053-3.535a8.967 8.967 0 0 0-3.235-2.232c-1.262-.515-2.685-.774-4.264-.774-2.157 0-4.08.492-5.767 1.48-1.687.99-3.007 2.35-3.969 4.08-.957 1.732-1.436 3.755-1.436 6.063 0 2.372.492 4.42 1.481 6.157.989 1.731 2.394 3.069 4.22 4.013 1.825.944 3.995 1.414 6.518 1.414 1.186 0 2.47-.161 3.852-.479 1.383-.318 2.604-.814 3.669-1.48.546-.336.935-.73 1.163-1.186.228-.457.313-.904.25-1.347a2.007 2.007 0 0 0-.523-1.119c-.29-.304-.675-.478-1.163-.523-.488-.045-1.047.112-1.687.479a9.65 9.65 0 0 1-2.805 1.024c-.989.197-1.88.295-2.667.295-2.281 0-4.004-.613-5.176-1.847-.926-.976-1.481-2.358-1.673-4.125h13.78c.707 0 1.244-.144 1.624-.43Zm-12.72-7.705c.895-.595 1.982-.89 3.262-.89 1.154 0 2.12.25 2.894.752.774.5 1.37 1.226 1.777 2.165.34.783.532 1.732.59 2.828H40.93c.107-.864.304-1.655.603-2.349.475-1.078 1.16-1.915 2.054-2.505ZM81.13 23.698c.38-.29.568-.707.568-1.253 0-1.731-.237-3.288-.707-4.675-.47-1.383-1.154-2.56-2.054-3.535a8.966 8.966 0 0 0-3.234-2.232c-1.262-.515-2.685-.774-4.264-.774-2.157 0-4.08.492-5.767 1.48-1.687.99-3.007 2.35-3.969 4.08-.957 1.732-1.436 3.755-1.436 6.063 0 2.372.492 4.42 1.48 6.157.99 1.731 2.394 3.069 4.22 4.013 1.825.944 3.995 1.414 6.519 1.414 1.185 0 2.47-.161 3.852-.479 1.383-.318 2.604-.814 3.669-1.48.546-.336.935-.73 1.163-1.186.228-.457.313-.904.25-1.347a2.008 2.008 0 0 0-.523-1.119c-.29-.304-.675-.478-1.163-.523-.488-.045-1.047.112-1.687.479a9.65 9.65 0 0 1-2.805 1.024c-.989.197-1.88.295-2.667.295-2.282 0-4.004-.613-5.176-1.847-.931-.976-1.481-2.358-1.674-4.125h13.78c.703 0 1.245-.144 1.625-.43Zm-12.72-7.705c.895-.595 1.982-.89 3.261-.89 1.155 0 2.121.25 2.895.752.774.5 1.37 1.226 1.776 2.165.34.783.533 1.732.591 2.828h-11.18c.106-.864.303-1.655.603-2.349.47-1.078 1.154-1.915 2.054-2.505ZM97.993 21.394l-4.559-.868c-.881-.152-1.535-.438-1.96-.868-.425-.425-.64-.957-.64-1.597 0-.85.358-1.535 1.07-2.054.716-.514 1.816-.774 3.306-.774.792 0 1.62.108 2.483.318.868.215 1.772.564 2.712 1.047.514.241.98.326 1.391.25a1.71 1.71 0 0 0 1.025-.595 2.47 2.47 0 0 0 .546-1.096 1.975 1.975 0 0 0-.112-1.208c-.166-.394-.479-.716-.935-.957a13.835 13.835 0 0 0-3.396-1.347c-1.173-.29-2.425-.434-3.763-.434-1.852 0-3.494.29-4.926.868-1.427.577-2.546 1.4-3.351 2.46-.805 1.066-1.208 2.327-1.208 3.786 0 1.61.492 2.926 1.48 3.942.99 1.02 2.426 1.709 4.31 2.076l4.559.867c.94.184 1.646.466 2.12.842.47.38.707.921.707 1.62 0 .818-.358 1.48-1.07 1.981-.715.501-1.798.752-3.26.752-1.034 0-2.081-.112-3.146-.34-1.065-.228-2.206-.63-3.418-1.208-.488-.242-.936-.318-1.347-.228-.412.09-.747.29-1.002.59-.26.305-.412.662-.457 1.074a2.24 2.24 0 0 0 .228 1.23c.197.412.542.77 1.025 1.07 1.154.671 2.46 1.14 3.92 1.414 1.458.273 2.84.411 4.147.411 2.886 0 5.199-.63 6.93-1.892 1.732-1.262 2.6-3.002 2.6-5.222 0-1.642-.51-2.948-1.526-3.919-1.011-.957-2.51-1.624-4.483-1.99ZM125.603 12.32c-1.155-.666-2.631-1.002-4.421-1.002-1.794 0-3.396.416-4.81 1.253a7.254 7.254 0 0 0-2.483 2.443V4.437c0-.944-.25-1.656-.751-2.143-.501-.488-1.208-.73-2.121-.73s-1.611.242-2.099.73c-.487.487-.729 1.199-.729 2.143v27.082c0 .944.242 1.664.729 2.165.488.501 1.186.752 2.099.752 1.915 0 2.872-.97 2.872-2.917v-9.986c0-1.732.492-3.123 1.481-4.17.989-1.047 2.318-1.575 3.991-1.575 1.369 0 2.38.393 3.034 1.185.653.792.979 2.054.979 3.786v10.76c0 .944.251 1.664.752 2.165.501.501 1.208.752 2.121.752s1.611-.25 2.098-.752c.488-.5.729-1.221.729-2.165V20.486c0-2.067-.29-3.777-.867-5.128-.582-1.355-1.446-2.367-2.604-3.038ZM150.618 12.642c-1.7-.944-3.709-1.413-6.018-1.413-1.731 0-3.297.268-4.698.796-1.396.532-2.599 1.306-3.601 2.326-1.003 1.02-1.772 2.233-2.305 3.647-.532 1.414-.796 3.015-.796 4.81 0 2.37.47 4.429 1.414 6.178.939 1.75 2.264 3.092 3.968 4.036 1.701.944 3.709 1.414 6.018 1.414 1.732 0 3.297-.269 4.698-.797 1.396-.532 2.599-1.306 3.602-2.326 1.002-1.02 1.771-2.242 2.304-3.669.532-1.427.796-3.038.796-4.832 0-2.371-.47-4.42-1.414-6.156-.944-1.736-2.264-3.074-3.968-4.014Zm-1.07 14.201c-.469 1.079-1.132 1.893-1.982 2.439-.85.546-1.838.818-2.961.818-1.701 0-3.07-.613-4.103-1.847-1.034-1.23-1.548-3.047-1.548-5.45 0-1.61.237-2.957.707-4.036.469-1.078 1.132-1.883 1.982-2.416.85-.532 1.839-.796 2.962-.796 1.7 0 3.069.6 4.102 1.799 1.034 1.199 1.548 3.015 1.548 5.45 0 1.614-.237 2.961-.707 4.04ZM15.512 34.431c-1.387 0-2.555-1.167-2.555-2.554V20.18c.013-2.165-1.79-3.915-3.924-3.879-2.134-.036-3.932 1.718-3.924 3.88v11.695a2.557 2.557 0 0 1-2.554 2.554C1.18 34.431 0 33.246 0 31.877V20.22a8.993 8.993 0 0 1 2.649-6.389 8.998 8.998 0 0 1 6.384-2.648 9.012 9.012 0 0 1 6.483 2.742A8.997 8.997 0 0 1 22 11.184a8.982 8.982 0 0 1 6.385 2.648 9.008 9.008 0 0 1 2.649 6.39v11.654c0 1.37-1.181 2.555-2.555 2.555a2.557 2.557 0 0 1-2.555-2.554V20.18c.014-2.165-1.79-3.915-3.924-3.879-2.134-.036-3.932 1.718-3.923 3.88v11.695c-.01 1.387-1.177 2.554-2.564 2.554Z"
                        fill="#570D48"
                      />
                    </g>
                    <defs>
                      <clipPath id="meeshoLogo_svg__a">
                        <rect width="100%" height="100%" fill="#fff" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <h4 className="header-title" />
              </div>
              <div className="header-menu">
                <a className="_3NH1qf" href="#">
                  <svg
                    width={24}
                    height={25}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    ml={16}
                    iconsize={24}
                    className="sc-gswNZR dJzkYm"
                  >
                    <path fill="#fff" d="M0 .657h24v24H0z" />
                    <path fill="#fff" d="M2 2.657h20v20H2z" />
                    <path
                      d="M22 9.174c0 3.724-1.87 7.227-9.67 12.38a.58.58 0 0 1-.66 0C3.87 16.401 2 12.898 2 9.174S4.59 3.67 7.26 3.66c3.22-.081 4.61 3.573 4.74 3.774.13-.201 1.52-3.855 4.74-3.774C19.41 3.669 22 5.45 22 9.174Z"
                      fill="#ED3843"
                    />
                  </svg>
                </a>
                <a className="_3NH1qf" href="#" onClick={() => {
                  setmySidenavopen(!mySidenavopen)
                }}>
                  <svg
                    width={24}
                    height={25}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    ml={16}
                    iconsize={24}
                    className="sc-gswNZR dJzkYm"
                  >
                    <g clipPath="url(#cart-header_svg__a)">
                      <path fill="#fff" d="M2.001 1.368h20v20h-20z" />
                      <g clipPath="url(#cart-header_svg__b)">
                        <g clipPath="url(#cart-header_svg__c)">
                          <path
                            d="M6.003 5.183h15.139c.508 0 .908.49.85 1.046l-.762 7.334c-.069.62-.537 1.1-1.103 1.121l-12.074.492-2.05-9.993Z"
                            fill="#C53EAD"
                          />
                          <path
                            d="M11.8 21.367c.675 0 1.22-.597 1.22-1.334 0-.737-.545-1.335-1.22-1.335-.673 0-1.22.598-1.22 1.335s.547 1.334 1.22 1.334ZM16.788 21.367c.674 0 1.22-.597 1.22-1.334 0-.737-.546-1.335-1.22-1.335-.673 0-1.22.598-1.22 1.335s.547 1.334 1.22 1.334Z"
                            fill="#9F2089"
                          />
                          <path
                            d="m2.733 4.169 3.026 1.42 2.528 12.085c.127.609.615 1.036 1.181 1.036h9.615"
                            stroke="#9F2089"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="cart-header_svg__a">
                        <path
                          fill="#fff"
                          transform="translate(2.001 1.368)"
                          d="M0 0h20v20H0z"
                        />
                      </clipPath>
                      <clipPath id="cart-header_svg__b">
                        <path
                          fill="#fff"
                          transform="translate(2.001 1.368)"
                          d="M0 0h20v20H0z"
                        />
                      </clipPath>
                      <clipPath id="cart-header_svg__c">
                        <path
                          fill="#fff"
                          transform="translate(2.001 3.368)"
                          d="M0 0h20v18H0z"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="header__cart-count header__cart-count--floating bubble-count">
                    {typeof localStorage !== 'undefined' && localStorage.getItem("d1") && JSON.parse(localStorage.getItem("d1")).length}


                  </span>
                </a>
              </div>
            </div>
              <div className="_3QNhdh  mx-3 my-2" id="guidSearch">
                <div className="ORogdv">
                  <div className="_1k9EoO">
                    <div className="_2d36Hu ">
                      <a href="javascript:void(0)" className="search-div">
                        <div placeholder="Search  etc." className="sc-eeMvmM fscVpr">
                          <div className="sc-cUEOzv ilUiic"><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="20" height="20" transform="translate(0 0.560547)" fill="white"></rect>
                            <g clip-path="url(#clip0_2444_6193)">
                              <path d="M13.4564 12.0018L11.4426 14.0156L16.3498 18.9228C16.7013 19.2743 17.2711 19.2743 17.6226 18.9228L18.3636 18.1818C18.7151 17.8303 18.7151 17.2604 18.3636 16.909L13.4564 12.0018Z" fill="#ADADC4"></path>
                              <path d="M14.7135 8.69842C14.7135 12.3299 11.7696 15.2738 8.13812 15.2738C4.50664 15.2738 1.56274 12.3299 1.56274 8.69842C1.56274 5.06694 4.50664 2.12305 8.13812 2.12305C11.7696 2.12305 14.7135 5.06694 14.7135 8.69842Z" fill="#EAEAF2" stroke="#ADADC4" stroke-width="1.125"></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_2444_6193">
                                <rect width="18" height="18" fill="white" transform="translate(1 1.56055)"></rect>
                              </clipPath>
                            </defs>
                          </svg></div><input font-size="13px" font-weight="book" type="text" placeholder="Search  etc." readonly="" className="sc-dkrFOg bWTBPR sc-bCfvAP dsLogY search-input-elm sc-bCfvAP dsLogY " value="" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="categories">
                <div className="cat-list">
                  <a className="category" href="/">
                    <img src="https://images.meesho.com/images/marketing/1594489152649_100.webp" alt="Categories" />
                    <p>Categories</p>
                  </a>
                  <a className="category" href="/">
                    <img src="https://images.meesho.com/images/widgets/9PAQI/fb2sf_300.webp" alt="Kurtis" />
                    <p>Kurtis</p>
                  </a>
                  <a className="category" href="/">
                    <img src="https://images.meesho.com/images/marketing/1649688502928_100.webp" alt="Dress" />
                    <p>Dress</p>
                  </a>
                  <a className="category" href="/">
                    <img src="https://images.meesho.com/images/marketing/1628672353857_100.webp" alt="Saree" />
                    <p>Saree</p>
                  </a>
                </div>
              </div><img src="https://images.meesho.com/images/widgets/Y8HIH/2f53o.gif" alt="" className="w-100 mb-2" />
              <div className="_3lqN6b">
                <div className="WhKF32">
                  <div className="IF3BzC">
                    <div className="_1fhgRH">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-sm-12 p-0">
                            <div id="carouselExampleIndicators" className="carousel carousel-dark slide" data-ride="carousel">
                              <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className=""></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1" className=""></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2" className=""></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="3" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="4" className=""></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="5" className=""></li>
                              </ol>
                              <div className="carousel-inner">
                                <div className="carousel-item">
                                  <img className="d-block w-100" src="https://images.meesho.com/images/banners/103902/qyqwe.gif" alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                  <img className="d-block w-100" src="https://images.meesho.com/images/marketing/1706268323136_600.webp" alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                  <img className="d-block w-100" src="https://images.meesho.com/images/marketing/1706175659141_600.webp" alt="Third slide" />
                                </div>
                                <div className="carousel-item active">
                                  <img className="d-block w-100" src="https://images.meesho.com/images/marketing/1706175684025_600.webp" alt="Fourth slide" />
                                </div>
                                <div className="carousel-item">
                                  <img className="d-block w-100" src="https://images.meesho.com/images/marketing/1706175705216_600.webp" alt="Fifth slide" />
                                </div>
                                <div className="carousel-item">
                                  <img className="d-block w-100" src="https://images.meesho.com/images/marketing/1706175732501_600.webp" alt="Sixth slide" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <nav className="menu">
                <div className="menu__item">
                  <div className="marquee">
                    <div className="marquee__inner">
                      <span>Buy 2 Get 1 Free (Add 3 item to cart)</span>
                      <span>&nbsp;</span>
                      <span>Buy 2 Get 1 Free (Add 3 item to cart)</span>
                      <span>&nbsp;</span>
                      <span>Buy 2 Get 1 Free (Add 3 item to cart)</span>
                      <span>&nbsp;</span>
                      <span>Buy 2 Get 1 Free (Add 3 item to cart)</span>
                      <span>&nbsp;</span>
                      <span>Buy 2 Get 1 Free (Add 3 item to cart)</span>
                    </div>
                  </div>
                </div>
              </nav>
              <img src="https://images.meesho.com/images/widgets/OY6J5/xwgyl_800.webp" alt="" className="w-100 mb-2" /><div color="white" className="sc-bcXHqe eCQLMa">
                <div
                  className="sc-bcXHqe fctQgp OfferTimerSubtitle__StyledSubtitleContainer-sc-9svgo6-0 JgdIi OfferTimerSubtitle__StyledSubtitleContainer-sc-9svgo6-0 JgdIi"
                  color="white"
                >
                  <p fontWeight="book" color="greyT1" className="sc-dkrFOg kZrHuA">
                    Meesho Daily Deals
                    <span>
                      <svg
                        width={19}
                        height={22}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        iconsize={20}
                        className="sc-bcXHqe bMWbfM"
                      >
                        <mask
                          id="deal_svg__a"
                          mask-type="alpha"
                          maskUnits="userSpaceOnUse"
                          x={1}
                          y={0}
                          width={17}
                          height={22}
                        >
                          <path
                            d="M5.198.795a.73.73 0 0 0-.699.522l-2.621 8.858a1.458 1.458 0 0 0 1.568 1.862l6.018-.708L6.835 19.8a1.089 1.089 0 0 0 1.944.929l8.174-12.206c.698-1.043-.16-2.423-1.405-2.257l-5.033.671 1.724-5.183a.73.73 0 0 0-.692-.96H5.198Z"
                            fill="#fff"
                          />
                        </mask>
                        <g mask="url(#deal_svg__a)">
                          <path fill="#E11900" d="M-.208.947H18.75v21.875H-.208z" />
                        </g>
                      </svg>
                    </span>
                  </p>
                  <div
                    data-testid="offer-wrapper"
                    className="OfferTimerstyled__StyledMediumOfferWrapper-sc-1otdyo0-0 eVLdcs"
                  >
                    <img
                      alt="Offer clock icon"
                      loading="lazy"
                      width={16}
                      height={16}
                      decoding="async"
                      data-nimg={1}
                      style={{ color: "transparent", marginRight: 4 }}
                      src="https://images.meesho.com/images/offer-widget-group-icon/T1W36/7tepb.png"
                    />
                    <span
                      fontSize="13px"
                      fontWeight="demi"
                      data-testid="offer-timer-text"
                      className="sc-dkrFOg bZxmrh OfferTimer__Subtitle2Styled-sc-dfvdiq-1 jFYRpH OfferTimer__Subtitle2Styled-sc-dfvdiq-1 jFYRpH"
                      color="pinkBase"
                    >
                      01h : 17m : 16s
                    </span>
                  </div>
                </div>
              </div>
              <a href="/" className="sc-bcXHqe fctQgp BottomNavBarstyled__StyledNavBar-sc-be71xz-0 iyYCAl BottomNavBarstyled__StyledNavBar-sc-be71xz-0 iyYCAl" color="white">
                <div className="sc-bcXHqe fctQgp BottomNavBarstyled__StyledNavItem-sc-be71xz-1 gREIBe BottomNavBarstyled__StyledNavItem-sc-be71xz-1 gREIBe" color="white"><svg width="26" height="27" fill="none" xmlns="http://www.w3.org/2000/svg" iconsize="26" className="sc-gswNZR jGNacQ">
                  <path fill="#fff" d="M0 .657h26v26H0z"></path>
                  <g clip-path="url(#home_svg__a)">
                    <path d="M2.92 22.308v-10.68l8.92-6.85c.63-.5 1.52-.52 2.17-.04l9.07 6.64v10.93c0 .99-.8 1.79-1.79 1.79H4.7c-.98 0-1.79-.79-1.79-1.79h.01Z" fill="#9F2089"></path>
                    <path d="M1.41 12.797c-.13 0-.28-.04-.39-.09a.765.765 0 0 1-.31-.25.953.953 0 0 1-.2-.67.92.92 0 0 1 .34-.61l9.85-7.8.04-.03c.65-.46 1.43-.7 2.22-.7.79 0 1.57.24 2.22.7l9.94 7.37c.1.07.18.16.24.26.06.11.1.21.12.33.02.12 0 .24-.02.36s-.08.22-.15.32c-.07.1-.16.18-.27.23-.11.06-.21.1-.34.12-.12.02-.24 0-.36-.02a.94.94 0 0 1-.32-.15l-9.9-7.34c-.34-.23-.73-.35-1.14-.35-.41 0-.8.13-1.14.35L2 12.597c-.17.13-.38.2-.59.2Z" fill="#60014A"></path>
                    <path d="M16.95 12.848a2.775 2.775 0 0 0-3.95.03c0-.01-.02-.02-.03-.03a2.78 2.78 0 0 0-4.74 1.97v3.58a.792.792 0 0 0 1.35.56c.14-.14.23-.34.23-.56v-3.59c0-.66.53-1.19 1.19-1.19h.03c.66 0 1.19.53 1.19 1.19v3.59a.792.792 0 0 0 1.35.56c.15-.14.23-.34.23-.56v-3.59c0-.66.53-1.19 1.19-1.19h.03c.66 0 1.19.53 1.19 1.19v3.59a.792.792 0 0 0 1.35.56c.14-.14.23-.34.23-.56v-3.58c0-.77-.31-1.46-.81-1.96l-.03-.01Z" fill="#FF9D00"></path>
                  </g>
                  <defs>
                    <clipPath id="home_svg__a">
                      <path fill="#fff" transform="translate(.5 2.657)" d="M0 0h25v21.43H0z"></path>
                    </clipPath>
                  </defs>
                </svg><span font-size="11px" font-weight="book" color="greyT1" className="sc-ipEyDJ fAgIKg">Home</span></div>
                <div className="sc-bcXHqe fctQgp BottomNavBarstyled__StyledNavItem-sc-be71xz-1 gREIBe BottomNavBarstyled__StyledNavItem-sc-be71xz-1 gREIBe" color="white"><svg width="26" height="27" fill="none" xmlns="http://www.w3.org/2000/svg" iconsize="26" className="sc-gswNZR jGNacQ">
                  <g clip-path="url(#categories_svg__a)">
                    <path fill="#fff" d="M0 .657h26v26H0z"></path>
                    <path d="M24.7 5.532v15.53c0 .607-.548 1.154-1.282 1.154H2.581c-.734 0-1.281-.547-1.281-1.154V5.532c0-.604.545-1.145 1.281-1.145h20.837c.737 0 1.282.54 1.282 1.145Z" stroke="#616173" stroke-width="0.743"></path>
                    <path d="M5.015 3.03h15.767c.574 0 1.03.458 1.03 1.012v19.232c0 .555-.456 1.013-1.03 1.013H5.015c-.574 0-1.03-.458-1.03-1.013V4.042c0-.554.456-1.012 1.03-1.012Z" fill="#fff" stroke="#616173" stroke-width="0.743"></path>
                    <path clip-rule="evenodd" d="M16.744 10.349c.075.075.187.075.272.01l1.312-1.163a.243.243 0 0 0 .047-.282c-.478-.909-1.116-1.621-1.369-1.893l-.272-.216c-.44-.234-1.115-.497-1.968-.647a1.595 1.595 0 0 1-1.182 1.331c-.037 0-.065.02-.103.02a1.43 1.43 0 0 1-.562 0c-.038 0-.066-.01-.103-.02a1.595 1.595 0 0 1-1.182-1.33c-.843.15-1.509.402-1.95.637a1.44 1.44 0 0 0-.3.234 9.26 9.26 0 0 0-1.359 1.884.243.243 0 0 0 .047.282l1.312 1.162c.085.066.197.066.272-.01l.872-.834c.188 1.735-.14 3.797-.637 5.541-.3 1.05-.59 2.053-.703 2.963v.065c-.113.844-.207 1.669-.047 2.672a.49.49 0 0 0 .468.403H16.8c.234 0 .44-.169.469-.403.15-.994.065-1.819-.047-2.672v-.065c-.113-.91-.403-1.913-.703-2.963-.497-1.744-.825-3.806-.638-5.54l.872.834h-.01Z" stroke="#616173" stroke-width="0.743" stroke-linejoin="round"></path>
                  </g>
                  <defs>
                    <clipPath id="categories_svg__a">
                      <path fill="#fff" transform="translate(0 .657)" d="M0 0h26v26H0z"></path>
                    </clipPath>
                  </defs>
                </svg><span font-size="11px" font-weight="book" color="greyT2" className="sc-ipEyDJ hhYIpu">Categories</span></div>
                <div className="sc-bcXHqe fctQgp BottomNavBarstyled__StyledNavItem-sc-be71xz-1 gREIBe BottomNavBarstyled__StyledNavItem-sc-be71xz-1 gREIBe" color="white"><svg width="26" height="27" fill="none" xmlns="http://www.w3.org/2000/svg" iconsize="26" className="sc-gswNZR jGNacQ">
                  <path fill="#fff" d="M0 .657h26v26H0z"></path>
                  <g clip-path="url(#orders_svg__a)" fill="#616173">
                    <path d="M23.653 7.745s-.025-.017-.042-.017L13.609 3.294a1.518 1.518 0 0 0-1.244 0L8.084 5.19l-.872.389-4.865 2.166A.615.615 0 0 0 2 8.312v.05l.702.314.296.135 9.638 4.273.347.161.355-.16 4.959-2.2.71-.314 3.978-1.76.296-.135.702-.313v-.05a.63.63 0 0 0-.347-.568h.017ZM18.745 9.92l-.863.389-4.865 2.166-9.79-4.35 4.865-2.157.872-.389 3.69-1.642a.855.855 0 0 1 .676 0l9.443 4.189-4.028 1.794Z"></path>
                    <path d="m23.653 7.744-.871.38-4.028 1.795-.863.389-4.865 2.166-.347.16v11.094l.364.17.338-.162 9.74-4.332c.55-.245.905-.795.905-1.396V8.311a.63.63 0 0 0-.347-.567h-.026Zm-.355 10.264a.836.836 0 0 1-.49.753l-9.444 4.205v-9.874l4.959-2.2.71-.313L23.01 8.81l.296-.135v9.333h-.008Zm-4.273-7.438-.71.313.71-.304 3.977-1.769-3.977 1.76Z"></path>
                    <path d="m13 12.474-9.773-4.35-.871-.38a.615.615 0 0 0-.347.567v9.705c0 .61.355 1.16.905 1.397l9.74 4.315.363.17.339-.162V12.635l-.347-.16H13Zm-.355 10.484-9.452-4.18a.845.845 0 0 1-.482-.762V8.675l.296.135 9.638 4.282v9.874-.008ZM19.016 10.273v2.454a.35.35 0 0 1-.355.347.348.348 0 0 1-.347-.347v-2.234l-.432-.194-9.79-4.324-.871-.39.871-.389.872.39 9.781 4.34.068.034c.127.06.212.186.212.322l-.009-.009Z"></path>
                  </g>
                  <defs>
                    <clipPath id="orders_svg__a">
                      <path fill="#fff" transform="translate(2 3.157)" d="M0 0h22v20.739H0z"></path>
                    </clipPath>
                  </defs>
                </svg><span font-size="11px" font-weight="book" color="greyT2" className="sc-ipEyDJ hhYIpu">My Orders</span></div>
                <div className="sc-bcXHqe fctQgp BottomNavBarstyled__StyledNavItem-sc-be71xz-1 gREIBe BottomNavBarstyled__StyledNavItem-sc-be71xz-1 gREIBe" color="white"><svg width="26" height="27" fill="none" xmlns="http://www.w3.org/2000/svg" iconsize="26" className="sc-gswNZR jGNacQ">
                  <g clip-path="url(#help_svg__a)">
                    <path fill="#fff" d="M0 .657h26v26H0z"></path>
                    <path fill="#fff" d="M0 .657h26v26H0z"></path>
                    <g clip-path="url(#help_svg__b)" fill="#666">
                      <path d="M19.796 2.924a3.196 3.196 0 0 1 3.192 3.191v12.851a3.196 3.196 0 0 1-3.192 3.192h-6.43c-6.153 0-8.481.843-10.254 2.194a.167.167 0 0 1-.115.039.251.251 0 0 1-.24-.25V6.115a3.205 3.205 0 0 1 3.2-3.191h13.84Zm0-.767H5.958A3.96 3.96 0 0 0 2 6.115v18.036c0 .594.489 1.016 1.006 1.016a.88.88 0 0 0 .575-.201c1.649-1.265 3.853-2.042 9.785-2.042h6.43a3.96 3.96 0 0 0 3.958-3.958V6.116a3.96 3.96 0 0 0-3.958-3.959Z"></path>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.813 14.194c0 .201.163.364.365.364h.335c.125 0 .23-.105.23-.23 0-.287.029-.536.096-.747.057-.211.172-.412.335-.614.163-.2.403-.43.71-.7.354-.287.651-.555.91-.804.259-.259.46-.537.594-.843.144-.307.21-.68.21-1.112 0-.786-.248-1.4-.747-1.84-.498-.45-1.198-.67-2.098-.67a5.616 5.616 0 0 0-2.32.478.484.484 0 0 0-.24.652c.116.268.442.393.71.278.173-.077.355-.134.546-.201a4.1 4.1 0 0 1 1.237-.173c.575 0 1.015.134 1.322.393.316.259.47.632.47 1.112 0 .306-.048.565-.144.776-.096.21-.25.431-.46.642-.21.21-.498.47-.863.776a4.48 4.48 0 0 0-.737.748 2.13 2.13 0 0 0-.365.757 3.959 3.959 0 0 0-.105.958h.01Zm.528 3.24a.724.724 0 0 0 .718-.72.724.724 0 0 0-.718-.718.724.724 0 0 0-.72.719c0 .393.327.718.72.718Z"></path>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="help_svg__a">
                      <path fill="#fff" transform="translate(0 .657)" d="M0 0h26v26H0z"></path>
                    </clipPath>
                    <clipPath id="help_svg__b">
                      <path fill="#fff" transform="translate(2 2.157)" d="M0 0h21.754v23H0z"></path>
                    </clipPath>
                  </defs>
                </svg><span font-size="11px" font-weight="book" color="greyT2" className="sc-ipEyDJ hhYIpu">Help</span></div>
                <div className="sc-bcXHqe fctQgp BottomNavBarstyled__StyledNavItem-sc-be71xz-1 gREIBe BottomNavBarstyled__StyledNavItem-sc-be71xz-1 gREIBe" color="white"><svg width="26" height="27" fill="none" xmlns="http://www.w3.org/2000/svg" iconsize="26" className="sc-gswNZR jGNacQ">
                  <path fill="#fff" d="M0 .657h26v26H0z"></path>
                  <circle cx="13" cy="13.656" r="10.743" stroke="#616173" stroke-width="0.8"></circle>
                  <path d="m9.836 9.87-.066.395.066-.394Zm6.364.001.067.394-.067-.394Zm-2.571 1.872-.4.022.4-.022Zm-1.221 0-.4-.022.4.022Zm8.851-.423-.32-.24.32.24Zm-.036.089-.396-.051.396.05Zm.443-.632.32.24-.32-.24Zm-16.853.632-.397.05.397-.05Zm9.28-.799-.26-.304.26.304Zm-2.15 0-.26.305.26-.305Zm.47.944-.39-.085.39.085Zm-.003.045-.4.01.4-.01Zm-8.04-.822-.32.24.32-.24Zm9.257.794-.4-.017.4.017Zm-.005-.052-.388.095.389-.095Zm-9.689-1.71v.857h.8v-.858h-.8Zm5.97-.332c-1.161-.197-3.978-.25-5.384-.254l-.003.8c1.43.004 4.171.06 5.254.242l.133-.788Zm2.3.829c-.56-.477-1.437-.683-2.3-.83l-.133.79c.883.149 1.544.334 1.914.649l.519-.61Zm1.762-.047H12.07v.8h1.894v-.8Zm2.168-.782c-.863.146-1.74.352-2.3.829l.52.609c.37-.315 1.03-.5 1.914-.65l-.134-.788Zm5.384-.254c-1.406.004-4.223.057-5.384.254l.134.788c1.082-.183 3.824-.238 5.253-.242l-.003-.8Zm.586 1.443V9.81h-.8v.857h.8Zm-.524.894.407-.543-.64-.48-.407.543.64.48Zm-3.913 3.944c1.372 0 2.327-.632 2.95-1.46.613-.813.905-1.809 1.004-2.585l-.793-.101c-.088.684-.345 1.535-.85 2.205-.493.655-1.223 1.14-2.311 1.14v.8Zm-4.437-3.74c.037.681.266 1.617.942 2.388.688.785 1.797 1.352 3.495 1.352v-.8c-1.505 0-2.38-.494-2.894-1.08-.524-.598-.713-1.343-.744-1.903l-.799.044Zm-.001-.21a2.18 2.18 0 0 0 .001.21l.799-.043a1.393 1.393 0 0 1-.001-.133l-.8-.034Zm-.423.085a.676.676 0 0 1 .143-.318c.043-.047.07-.047.073-.047.001 0 .026-.001.068.04a.63.63 0 0 1 .145.3l.777-.19c-.128-.525-.488-.961-1.008-.95-.517.011-.863.46-.98.995l.782.17Zm.002.126c.003-.06.004-.119.003-.176l-.8.02c0 .036 0 .073-.002.112l.799.044ZM8.37 15.504c1.698 0 2.808-.567 3.495-1.352.677-.771.905-1.707.942-2.387l-.799-.044c-.03.56-.22 1.305-.744 1.904-.513.585-1.389 1.079-2.894 1.079v.8Zm-3.954-4.045c.1.776.391 1.773 1.004 2.585.623.828 1.578 1.46 2.95 1.46v-.8c-1.088 0-1.818-.486-2.311-1.141-.505-.67-.762-1.521-.85-2.205l-.793.101Zm-.366-.442.407.543.64-.48-.407-.543-.64.48Zm16.89.063a.588.588 0 0 0-.113.278l.793.101a.214.214 0 0 1-.04.1l-.64-.48Zm.363-.414c0-.046.015-.091.043-.129l.64.48a.586.586 0 0 0 .117-.35h-.8Zm-16.094.692a.587.587 0 0 0-.112-.278l-.64.48a.213.213 0 0 1-.041-.1l.793-.102Zm8.756-.299a.598.598 0 0 0 .387-.144l-.518-.61a.202.202 0 0 1 .13-.046v.8Zm-2.281-.144c.1.086.236.144.387.144v-.8c.058 0 .103.022.132.047l-.52.609Zm9.836-.892a.216.216 0 0 1-.217-.214h.8a.584.584 0 0 0-.586-.586l.003.8Zm-9.497 1.446a.584.584 0 0 0-.013.14l.8-.02c0 .012 0 .03-.005.05l-.782-.17Zm-8.09-.803c0 .127.041.25.117.351l.64-.48a.214.214 0 0 1 .043.129h-.8Zm10.094.922a.587.587 0 0 0-.016-.164l-.777.19a.212.212 0 0 1-.006-.06l.799.034Zm-9.294-1.78a.216.216 0 0 1-.217.215l.003-.8a.584.584 0 0 0-.586.585h.8Z" fill="#616173"></path>
                  <path d="M8.434 17.389c1.51 1.562 5.475 3.75 9.245 0" stroke="#616173" stroke-width="0.8" stroke-linecap="round"></path>
                </svg><span font-size="11px" font-weight="book" color="greyT2" className="sc-ipEyDJ hhYIpu">Account</span></div>
              </a><style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n    .product_loader {\n        border: 7px solid #f3f3f3;\n        border-top: 7px solid #9f2089;\n        border-radius: 50%;\n        width: 40px;\n        height: 40px;\n        animation: spin 1s linear infinite;\n        margin: 100px auto;\n        display: none;\n    }\n\n    @keyframes spin {\n        0% {\n            transform: rotate(0deg);\n        }\n\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n\n    .menu {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        padding: 10px 0;\n        --marquee-width: 100vw;\n        --offset: 20vw;\n        --move-initial: calc(-25% + var(--offset));\n        --move-final: calc(-50% + var(--offset));\n        --item-font-size: 10vw;\n        counter-reset: menu;\n        background: #970e71;\n    }\n\n    /* Make sure 3 items are visible in the viewport by setting suitable font size. */\n\n    .marquee {\n        /* position: absolute;\n        top: 0;\n        left: 0; */\n        width: var(--marquee-width);\n        overflow: hidden;\n        pointer-events: none;\n    }\n\n    .marquee__inner {\n        width: fit-content;\n        display: flex;\n        position: relative;\n        transform: translate3d(var(--move-initial), 0, 0);\n        animation: marquee 5s linear infinite;\n        animation-play-state: paused;\n        opacity: 0;\n        transition: opacity 0.1s;\n    }\n\n    .marquee .marquee__inner {\n        animation-play-state: running;\n        opacity: 1;\n        transition-duration: 0.4s;\n    }\n\n    .marquee span {\n        text-align: center;\n        white-space: nowrap;\n        font-size: 18px;\n        padding: 0 1vw;\n        font-weight: 900;\n        line-height: 1.15;\n        color: #ffffff;\n    }\n\n    @keyframes marquee {\n        0% {\n            transform: translate3d(var(--move-initial), 0, 0);\n        }\n\n        100% {\n            transform: translate3d(var(--move-final), 0, 0);\n        }\n    }\n"
                }}
              />
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n    .offer-img {\n        max-width: 290px;\n        border-radius: 20px;\n    }\n\n    /* Style for the overlay */\n    .popup-overlay {\n        display: none;\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(0, 0, 0, 0.7);\n        justify-content: center;\n        align-items: center;\n        z-index: 111;\n    }\n\n    /* Style for the popup */\n    .popup {\n        /* background-color: #fff; */\n        /* padding: 20px; */\n        position: relative;\n        border-radius: 8px;\n        text-align: center;\n    }\n\n    /* Style for the close icon */\n    .popup-close-icon {\n        position: absolute;\n        top: -10px;\n        right: -10px;\n        cursor: pointer;\n        background: #fff;\n        padding: 4px 10px;\n        border-radius: 50%;\n        font-size: 14px;\n    }\n"
                }}
              />

            </div>
          </div>
        </div>
        <div id="mySidenav" className="sidenav" style={{ right: !mySidenavopen ? "0%" : "-100%" }}>
          <div className="sidenav-div">
            <div className="drawer__title">
              <div className='px-1'>
                <svg viewBox="0 0 156 36" fill="none" xmlns="http://www.w3.org/2000/svg" height="25" width="90" iconsize="20" class="sc-gswNZR gNMKRJ"><g clip-path="url(#meeshoLogo_svg__a)"><path fill="#fff" d="M0 0h156v36H0z"></path><path d="M56.307 23.698c.38-.29.568-.707.568-1.253 0-1.731-.237-3.288-.707-4.675-.47-1.383-1.154-2.56-2.053-3.535a8.967 8.967 0 0 0-3.235-2.232c-1.262-.515-2.685-.774-4.264-.774-2.157 0-4.08.492-5.767 1.48-1.687.99-3.007 2.35-3.969 4.08-.957 1.732-1.436 3.755-1.436 6.063 0 2.372.492 4.42 1.481 6.157.989 1.731 2.394 3.069 4.22 4.013 1.825.944 3.995 1.414 6.518 1.414 1.186 0 2.47-.161 3.852-.479 1.383-.318 2.604-.814 3.669-1.48.546-.336.935-.73 1.163-1.186.228-.457.313-.904.25-1.347a2.007 2.007 0 0 0-.523-1.119c-.29-.304-.675-.478-1.163-.523-.488-.045-1.047.112-1.687.479a9.65 9.65 0 0 1-2.805 1.024c-.989.197-1.88.295-2.667.295-2.281 0-4.004-.613-5.176-1.847-.926-.976-1.481-2.358-1.673-4.125h13.78c.707 0 1.244-.144 1.624-.43Zm-12.72-7.705c.895-.595 1.982-.89 3.262-.89 1.154 0 2.12.25 2.894.752.774.5 1.37 1.226 1.777 2.165.34.783.532 1.732.59 2.828H40.93c.107-.864.304-1.655.603-2.349.475-1.078 1.16-1.915 2.054-2.505ZM81.13 23.698c.38-.29.568-.707.568-1.253 0-1.731-.237-3.288-.707-4.675-.47-1.383-1.154-2.56-2.054-3.535a8.966 8.966 0 0 0-3.234-2.232c-1.262-.515-2.685-.774-4.264-.774-2.157 0-4.08.492-5.767 1.48-1.687.99-3.007 2.35-3.969 4.08-.957 1.732-1.436 3.755-1.436 6.063 0 2.372.492 4.42 1.48 6.157.99 1.731 2.394 3.069 4.22 4.013 1.825.944 3.995 1.414 6.519 1.414 1.185 0 2.47-.161 3.852-.479 1.383-.318 2.604-.814 3.669-1.48.546-.336.935-.73 1.163-1.186.228-.457.313-.904.25-1.347a2.008 2.008 0 0 0-.523-1.119c-.29-.304-.675-.478-1.163-.523-.488-.045-1.047.112-1.687.479a9.65 9.65 0 0 1-2.805 1.024c-.989.197-1.88.295-2.667.295-2.282 0-4.004-.613-5.176-1.847-.931-.976-1.481-2.358-1.674-4.125h13.78c.703 0 1.245-.144 1.625-.43Zm-12.72-7.705c.895-.595 1.982-.89 3.261-.89 1.155 0 2.121.25 2.895.752.774.5 1.37 1.226 1.776 2.165.34.783.533 1.732.591 2.828h-11.18c.106-.864.303-1.655.603-2.349.47-1.078 1.154-1.915 2.054-2.505ZM97.993 21.394l-4.559-.868c-.881-.152-1.535-.438-1.96-.868-.425-.425-.64-.957-.64-1.597 0-.85.358-1.535 1.07-2.054.716-.514 1.816-.774 3.306-.774.792 0 1.62.108 2.483.318.868.215 1.772.564 2.712 1.047.514.241.98.326 1.391.25a1.71 1.71 0 0 0 1.025-.595 2.47 2.47 0 0 0 .546-1.096 1.975 1.975 0 0 0-.112-1.208c-.166-.394-.479-.716-.935-.957a13.835 13.835 0 0 0-3.396-1.347c-1.173-.29-2.425-.434-3.763-.434-1.852 0-3.494.29-4.926.868-1.427.577-2.546 1.4-3.351 2.46-.805 1.066-1.208 2.327-1.208 3.786 0 1.61.492 2.926 1.48 3.942.99 1.02 2.426 1.709 4.31 2.076l4.559.867c.94.184 1.646.466 2.12.842.47.38.707.921.707 1.62 0 .818-.358 1.48-1.07 1.981-.715.501-1.798.752-3.26.752-1.034 0-2.081-.112-3.146-.34-1.065-.228-2.206-.63-3.418-1.208-.488-.242-.936-.318-1.347-.228-.412.09-.747.29-1.002.59-.26.305-.412.662-.457 1.074a2.24 2.24 0 0 0 .228 1.23c.197.412.542.77 1.025 1.07 1.154.671 2.46 1.14 3.92 1.414 1.458.273 2.84.411 4.147.411 2.886 0 5.199-.63 6.93-1.892 1.732-1.262 2.6-3.002 2.6-5.222 0-1.642-.51-2.948-1.526-3.919-1.011-.957-2.51-1.624-4.483-1.99ZM125.603 12.32c-1.155-.666-2.631-1.002-4.421-1.002-1.794 0-3.396.416-4.81 1.253a7.254 7.254 0 0 0-2.483 2.443V4.437c0-.944-.25-1.656-.751-2.143-.501-.488-1.208-.73-2.121-.73s-1.611.242-2.099.73c-.487.487-.729 1.199-.729 2.143v27.082c0 .944.242 1.664.729 2.165.488.501 1.186.752 2.099.752 1.915 0 2.872-.97 2.872-2.917v-9.986c0-1.732.492-3.123 1.481-4.17.989-1.047 2.318-1.575 3.991-1.575 1.369 0 2.38.393 3.034 1.185.653.792.979 2.054.979 3.786v10.76c0 .944.251 1.664.752 2.165.501.501 1.208.752 2.121.752s1.611-.25 2.098-.752c.488-.5.729-1.221.729-2.165V20.486c0-2.067-.29-3.777-.867-5.128-.582-1.355-1.446-2.367-2.604-3.038ZM150.618 12.642c-1.7-.944-3.709-1.413-6.018-1.413-1.731 0-3.297.268-4.698.796-1.396.532-2.599 1.306-3.601 2.326-1.003 1.02-1.772 2.233-2.305 3.647-.532 1.414-.796 3.015-.796 4.81 0 2.37.47 4.429 1.414 6.178.939 1.75 2.264 3.092 3.968 4.036 1.701.944 3.709 1.414 6.018 1.414 1.732 0 3.297-.269 4.698-.797 1.396-.532 2.599-1.306 3.602-2.326 1.002-1.02 1.771-2.242 2.304-3.669.532-1.427.796-3.038.796-4.832 0-2.371-.47-4.42-1.414-6.156-.944-1.736-2.264-3.074-3.968-4.014Zm-1.07 14.201c-.469 1.079-1.132 1.893-1.982 2.439-.85.546-1.838.818-2.961.818-1.701 0-3.07-.613-4.103-1.847-1.034-1.23-1.548-3.047-1.548-5.45 0-1.61.237-2.957.707-4.036.469-1.078 1.132-1.883 1.982-2.416.85-.532 1.839-.796 2.962-.796 1.7 0 3.069.6 4.102 1.799 1.034 1.199 1.548 3.015 1.548 5.45 0 1.614-.237 2.961-.707 4.04ZM15.512 34.431c-1.387 0-2.555-1.167-2.555-2.554V20.18c.013-2.165-1.79-3.915-3.924-3.879-2.134-.036-3.932 1.718-3.924 3.88v11.695a2.557 2.557 0 0 1-2.554 2.554C1.18 34.431 0 33.246 0 31.877V20.22a8.993 8.993 0 0 1 2.649-6.389 8.998 8.998 0 0 1 6.384-2.648 9.012 9.012 0 0 1 6.483 2.742A8.997 8.997 0 0 1 22 11.184a8.982 8.982 0 0 1 6.385 2.648 9.008 9.008 0 0 1 2.649 6.39v11.654c0 1.37-1.181 2.555-2.555 2.555a2.557 2.557 0 0 1-2.555-2.554V20.18c.014-2.165-1.79-3.915-3.924-3.879-2.134-.036-3.932 1.718-3.923 3.88v11.695c-.01 1.387-1.177 2.554-2.564 2.554Z" fill="#570D48"></path></g><defs><clipPath id="meeshoLogo_svg__a"><rect width="100%" height="100%" fill="#fff"></rect></clipPath></defs></svg>
              </div>
              <h3 className="ui2-heading">
                <span>
                  <b>Your Cart</b>
                </span>
              </h3>
              <a className="closebtn" onClick={() => {
                setmySidenavopen(!mySidenavopen)
              }}>
                ×
              </a>
            </div>
          </div>
          <div className="cart-products-list">

            {data133 && data133?.map((el, index) => {
              return (
                <div className="cart-product cart-product-index-0">
                  <div className="cart-product-img">

                    <img
                      src={el.image}
                      alt=""
                    />
                  </div>
                  <div className="cart-product-details">

                    <div className="cart-product-title">

                      <p>{el.title2}</p>
                      <img
                        src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_1_93145e45-8530-46aa-9fb8-6768cc3d80d2.png?v=1633783107"
                        className="remove-cart-item"
                        data-index={0}
                        alt=""
                        onClick={() => {
                          const updatedProducts = JSON.parse(localStorage.getItem("d1")).filter((ela) => ela._id !== el._id);
                          localStorage.setItem("d1", JSON.stringify(updatedProducts)); setdata133(updatedProducts)
                          setdata133(updatedProducts)


                        }}
                      />

                    </div>
                    <div className="cart-product-pricing">

                      <p className="cart-product-price">₹{el.price}</p>&nbsp;
                      <span className="cart-product-mrp">₹{el.cancelprice}</span>
                    </div>
                    <h5>size: <b>{el.size}</b></h5>
                    <div className="cart-product-description">
                      <span className="sc-lbxAil evmCQI" />
                      <div className="cart-qty-wrapper">
                        <span className="minus" data-index={0} onClick={() => {
                          // Step 1: Retrieve existing array from localStorage
                          const existingProductsJSON = localStorage.getItem("d1");
                          const updatedProducts = JSON.parse(localStorage.getItem("d1")).map((ela) => {
                            if (ela.quantity > 0) {
                              if (ela._id === el._id) {
                                ela.quantity -= 1; // Increment quantity
                              }
                              return ela;
                            } else {
                              return ela;

                            }
                          });
                          console.log("updatedProducts", updatedProducts);
                          // Step 3: Update stored value in localStorage
                          localStorage.setItem("d1", JSON.stringify(updatedProducts)); setdata133(updatedProducts)
                          setdata133(updatedProducts)

                        }}>
                          -
                        </span>
                        <span className="num">{el.quantity}</span>
                        <span className="plus" data-index={0} onClick={() => {
                          const existingProductsJSON = localStorage.getItem("d1");
                          const updatedProducts = JSON.parse(existingProductsJSON).map((ela) => {
                            if (ela._id === el._id) {
                              ela.quantity += 1; // Increment quantity
                            }
                            return ela;
                          });
                          let dat1 = JSON.stringify(updatedProducts)
                          console.log("updatedProducts", updatedProducts);
                          localStorage.setItem("d1", dat1);
                          setdata133(updatedProducts)

                        }}>
                          +
                        </span>
                      </div>
                    </div>
                  </div>
                </div>)
            })}

          </div>
          <div className="cart__footer" style={{}}>
            <div className="cart__price__details">
              <div className="cart__breakup__inner">
                <div className="cart__total">
                  <span className="">Cart Total:</span>
                  <span className="cartTotalAmount">₹{totalMrp}.00</span>
                </div>
                <div
                  className="shipping__total"
                  style={{ borderBottom: "1px dashed #000" }}
                >
                  <span className="">Shipping:</span>
                  <span className="">FREE</span>
                </div>
                <div className="mc_pay__total">
                  <span className="">To Pay:</span>
                  <span className="cartTotalAmount">₹{totalMrp}.00</span>
                </div>
              </div>
            </div>
            <div className="cart__checkout">
              <div className="cart__final__payment">
                <h2 className="cart__final__price cartTotalAmount">₹{totalMrp}.00</h2>
                <p className="cart__tax__text">Inclusive of all taxes</p>
              </div>
              <a
                href="/cart"
                className=" buynow-button product-page-buy buy_now"
              >
                Confirm Order
              </a>
            </div>
          </div>
        </div>
        <h4 font-size="21px" font-weight="book" color="greyBase" class="sc-gswNZR wDrko">Products For You</h4>
        <div
          className="product-list d-flex"

        >
          {products.map((el, index) => {
            return (
              <Link href={"/product-details/" + el.id} className="product-card"

              >
                <div className="product-img" style={{}}>
                  <img
                    src={el.image}
                    alt=""
                  />
                </div>
                <div className="product-details">
                  <h3 className="product-name">{el.title2}</h3>
                  <div className="product-price">
                    <span className="sell-price">₹{el.price}.00</span>
                    <span className="mrp-price line-through">₹{el.cancelprice}.00</span>
                    <span className="off-percentage m-2">{el.dicPersent}</span>
                  </div>
                  <span className="NewProductCardstyled__OfferPill-sc-6y2tys-31 iMEkWH">
                    <svg
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      iconsize={12}
                      className="sc-bcXHqe eqGISc"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0ZM5.168 9.008l.8.17L3.554 6.49l-.005-.75h1.298c.383 0 .687-.076.91-.228.225-.152.375-.352.45-.6h-2.76l.261-.892h2.478c-.167-.507-.62-.76-1.36-.76h-1.38l.277-1h4.834l-.262.897H7.176c.174.245.287.533.338.863h1.037l-.257.891H7.52c-.076.54-.301.952-.678 1.238-.376.286-.908.457-1.596.512L6.88 8.493l.064-.826a.41.41 0 0 1 .437-.375.403.403 0 0 1 .373.436L7.59 9.88l-.004.012-.004.013a.42.42 0 0 1-.03.104l-.001.005a.263.263 0 0 1-.017.037.288.288 0 0 1-.011.031c-.018.026-.039.045-.06.065a.07.07 0 0 0-.006.008c-.004.004-.007.009-.013.012a.433.433 0 0 1-.12.068.417.417 0 0 1-.155.023c-.005.002-.01.003-.015.002-.019-.002-.037-.006-.054-.01l-2.102-.445a.407.407 0 0 1 .17-.797Z"
                        fill="#219653"
                      />
                    </svg>
                    <span
                      fontSize="10px"
                      fontWeight="demi"
                      color="greenBase"
                      className="sc-gswNZR bjrKWS"
                    >
                      ₹1558 with 3 Special Offers
                    </span>
                  </span>
                  <p className="free-delivery">Free Delivery</p>
                  <div
                    className="sc-kDvujY jTuxux NewProductCardstyled__RatingsRow-sc-6y2tys-8 heKerA NewProductCardstyled__RatingsRow-sc-6y2tys-8 heKerA"
                    color="white"
                  >
                    <div className="NewProductCardstyled__RatingSection-sc-6y2tys-9 fyvrGC">
                      <span label="4.3" className="sc-fbYMXx jUvjLH">
                        <span
                          fontSize="13px"
                          fontWeight="demi"
                          color="#ffffff"
                          className="sc-gswNZR jrrvJf"
                        >
                          4.5
                        </span>
                        <svg
                          width={8}
                          height={8}
                          viewBox="0 0 20 20"
                          fill="#ffffff"
                          xmlns="http://www.w3.org/2000/svg"
                          ml={4}
                          iconsize={10}
                          className="sc-bcXHqe cyUZOu"
                        >
                          <g clipPath="url(#clip0)">
                            <path
                              d="M19.5399 6.85L13.6199 5.5L10.5099 0.29C10.3999 0.11 10.2099 0 9.99993 0C9.78993 0 9.59993 0.11 9.48993 0.29L6.37993 5.5L0.45993 6.85C0.25993 6.9 0.0899297 7.05 0.0299297 7.25C-0.0300703 7.45 0.00992969 7.67 0.14993 7.83L4.13993 12.4L3.58993 18.44C3.56993 18.65 3.65993 18.85 3.82993 18.98C3.99993 19.1 4.21993 19.13 4.41993 19.05L9.99993 16.64L15.5799 19.03C15.6599 19.06 15.7399 19.08 15.8099 19.08C15.8099 19.08 15.8099 19.08 15.8199 19.08C16.1199 19.09 16.4199 18.82 16.4199 18.48C16.4199 18.42 16.4099 18.36 16.3899 18.31L15.8499 12.38L19.8399 7.81C19.9799 7.65 20.0199 7.43 19.9599 7.23C19.9099 7.04 19.7399 6.89 19.5399 6.85Z"
                              fill="#ffffff"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0">
                              <rect width={20} height="19.08" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <span
                        fontSize="11px"
                        fontWeight="book"
                        color="greyT2"
                        className="sc-gswNZR gTFgDk NewProductCardstyled__RatingCount-sc-6y2tys-21 jZyLzI NewProductCardstyled__RatingCount-sc-6y2tys-21 jZyLzI"
                      >
                        (6728)
                      </span>
                    </div>
                    <svg
                      width={55}
                      height={20}
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      iconsize={20}
                      className="sc-bcXHqe fUjwpe"
                    >
                      <path
                        d="M9.901 5.496a2 2 0 0 1 2-2h41.6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-41.6a2 2 0 0 1-2-2v-9Z"
                        fill="#FFE7FB"
                      />
                      <path
                        d="M24.712 6H19.5v1.03h2.052v5.843h1.12V7.03h2.041V6ZM24.698 8.229v4.644h1.06v-2.17c0-1.09.52-1.532 1.228-1.532a.95.95 0 0 1 .353.06V8.198a.85.85 0 0 0-.363-.068c-.55 0-1.031.314-1.267.844h-.02v-.746h-.991ZM32.226 12.873V8.229h-1.07v2.67c0 .697-.481 1.188-1.09 1.188-.56 0-.884-.383-.884-1.1V8.23h-1.06v2.975c0 1.129.628 1.816 1.63 1.816.658 0 1.188-.314 1.443-.766h.05v.619h.981ZM35.25 13.02c1.1 0 1.846-.59 1.846-1.532 0-1.855-2.543-1.03-2.543-2.052 0-.304.236-.55.698-.55.422 0 .765.246.814.59l.992-.207c-.167-.706-.893-1.188-1.836-1.188-1.03 0-1.728.57-1.728 1.434 0 1.856 2.543 1.03 2.543 2.052 0 .393-.265.658-.756.658-.481 0-.874-.255-.992-.668l-.972.197c.226.795.943 1.266 1.934 1.266ZM40.083 12.97c.343 0 .638-.058.795-.136l-.118-.855a.992.992 0 0 1-.471.099c-.501 0-.747-.226-.747-.914V9.132h1.287v-.903h-1.287V6.746l-1.07.206V8.23h-.844v.903h.844v2.21c0 1.207.658 1.629 1.61 1.629ZM45.823 11.744l-.894-.265c-.206.422-.589.657-1.09.657-.746 0-1.256-.53-1.355-1.305h3.525v-.265c-.02-1.6-1.03-2.485-2.297-2.485-1.365 0-2.308 1.07-2.308 2.485 0 1.403.992 2.454 2.425 2.454.933 0 1.61-.442 1.994-1.276ZM43.73 8.906c.6 0 1.12.373 1.169 1.198h-2.406c.118-.766.56-1.198 1.237-1.198ZM46.776 10.556c0 1.463.923 2.464 2.17 2.464.619 0 1.237-.255 1.542-.854h.03v.707h.981V6h-1.07v2.828c-.246-.432-.766-.747-1.463-.747-1.247 0-2.19.992-2.19 2.475Zm1.07 0c0-.874.501-1.542 1.316-1.542.805 0 1.296.638 1.296 1.542 0 .893-.49 1.522-1.296 1.522-.795 0-1.315-.648-1.315-1.522Z"
                        fill="#9F2089"
                      />
                      <path
                        d="M16.5 3.239 9.027.059a.746.746 0 0 0-.585 0L.969 3.24a.782.782 0 0 0-.47.721v6.36c0 5.321 3.139 7.611 7.947 9.622a.746.746 0 0 0 .576 0c4.809-2.01 7.948-4.3 7.948-9.622V3.96c0-.316-.186-.6-.47-.721Z"
                        fill="#FFE7FB"
                      />
                      <path
                        d="m15.748 3.894-6.75-2.871a.673.673 0 0 0-.528 0l-6.75 2.87a.706.706 0 0 0-.424.652v5.745c0 4.806 2.835 6.874 7.178 8.69.167.07.353.07.52 0 4.343-1.816 7.178-3.884 7.178-8.69V4.545a.706.706 0 0 0-.424-.651Z"
                        fill="#60014A"
                      />
                      <path
                        d="M10.852 6.455c.804.006 1.482.28 2.04.817.565.54.843 1.185.837 1.946l-.023 3.58c-.003.426-.37.77-.824.77-.45-.003-.814-.35-.81-.777l.022-3.58a1.098 1.098 0 0 0-.367-.85 1.216 1.216 0 0 0-.885-.35 1.247 1.247 0 0 0-.921.372c-.23.227-.344.54-.347.856l-.02 3.528c-.003.432-.376.782-.833.78-.458-.004-.828-.357-.824-.79l.022-3.548c.004-.31-.11-.617-.334-.844a1.254 1.254 0 0 0-.918-.378 1.253 1.253 0 0 0-.892.34c-.24.23-.37.513-.37.845l-.022 3.576c-.004.43-.373.777-.827.774-.455-.003-.818-.353-.815-.783l.023-3.564c.003-.66.25-1.308.714-1.799.6-.632 1.34-.948 2.199-.942.82.006 1.521.285 2.082.853.578-.565 1.272-.835 2.093-.832Z"
                        fill="#FF9D00"
                      />
                    </svg>
                  </div>
                  <div
                    className="sc-kDvujY jTuxux NewProductCardstyled__RatingsRow-sc-6y2tys-8 heKerA NewProductCardstyled__RatingsRow-sc-6y2tys-8 heKerA"
                    color="white"
                  ></div>
                </div>
              </Link>
            )
          })}

        </div>
      </Layout >

    </>

  );
}

export default Home;
