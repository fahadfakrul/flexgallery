import ProductCard from "./ProductCard";

const ProductGallery = ({ products }) => {
  return (
    <div className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
      <div className="container p-6 mx-auto space-y-8">
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
