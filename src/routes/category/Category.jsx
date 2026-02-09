import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/ProductCard';

import { CategoriesContext } from '../../contexts/categories.context';

import './Category.scss';

const Category = () => {
  const { category } = useParams(); // useParams dan category ni olamiz url dan
  const { categoriesMap } = useContext(CategoriesContext);// CategoriesContext dan categoriesMap ni olamiz
  const [products, setProducts] = useState(categoriesMap[category]); // boshlang'ich qiymat sifatida categoriesMap dan category ga mos keladigan products larni olamiz

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]); // category yoki categoriesMap o'zgarganda products ni yangilaymiz

  return (
    <Fragment>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;