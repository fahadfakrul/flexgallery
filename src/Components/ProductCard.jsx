
const ProductCard = ({ product }) => {
  
  return (
    <>
      <div className="flex flex-col dark:bg-gray-50 border border-gray-200 shadow-md rounded">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Te nulla oportere reprimique his dolorum"
        >
          <img
            className="object-cover w-full h-52 dark:bg-gray-500 rounded"
            src={product.image}
            alt={product.name}
          />
        </a>
        <div className="flex flex-col flex-1 p-6">
          
          <a
            className="text-xs tracking-wider uppercase  dark:text-violet-600"
          >
            {product.category}
          </a>
          <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
            {product.name}
          </h3>
          <h4 className="flex-1 py-2 text-lg font-semibold leading-snug">
            ${product.price}
          </h4>
          <button
            onClick={() => document.getElementById(`modal-${product.id}`).showModal()}
            className="btn btn-outline flex-1 transform hover:scale-105 transition-transform duration-200 ease-in-out"
          >
            View Details
          </button>
        </div>
        {/* modal */}
        <dialog id={`modal-${product.id}`} className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
          <a
            className="text-xs tracking-wider uppercase  dark:text-violet-600"
          >
            {product.category}
          </a>
            <h3 className="font-bold text-lg">{product.name}</h3>
            <h4 className="flex-1 py-2 text-lg font-semibold leading-snug">
            ${product.price}
          </h4>
            <h5 className="flex-1 py-2 text-lg font-medium  leading-snug">
            Rating: {product.popularity}/5.0
          </h5>
          <p>{product.description}</p>
            
            <div className="modal-action"> 
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default ProductCard;
