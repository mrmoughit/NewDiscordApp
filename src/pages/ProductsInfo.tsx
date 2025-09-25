import { useState } from "react";
import Pro from "../components/Card.tsx";
import FeedbackApp from "../components/FeedBack.tsx";
import { useLocation } from "react-router-dom";

function ProductsInfo() {
  // All products
  const products = [
    {
      id: 1,
      name: "Gaming Headset Pro",
      price: "$50",
      oldPrice: "$100",
      mainImages: [
        "https://images.unsplash.com/photo-1599669454699-248893623440?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=600&h=600&fit=crop",
      ],
      description:
        "حقيبة عملية ومتينة مصممة خصيصاً للسكوتر الكهربائي. تتميز بخامات عالية الجودة ومقاومة للماء، مع مساحة تخزين واسعة وتصميم أنيق يناسب جميع الأوقات.",
      features: [
        "مقاومة للماء والغبار",
        "خامات عالية الجودة",
        "تصميم عملي ومريح",
        "مساحة تخزين واسعة",
        "ضمان سنة كاملة",
      ],
      inStock: true,
      rating: 4.8,
      reviews: 127,
      image:
        "https://images.unsplash.com/photo-1599669454699-248893623440?w=300&h=300&fit=crop",
      badge: {
        type: "discount",
        text: "-50%",
      },
    },
    {
      id: 2,
      name: "Wireless Mouse Pro",
      price: "$30",
      oldPrice: "$60",
      mainImages: [
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1599669454699-248893623440?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=600&h=600&fit=crop",
      ],
      description:
        "ماوس لاسلكي احترافي مع تصميم مريح ودقة عالية مثالي للألعاب والعمل المكتبي.",
      features: [
        "بطارية طويلة العمر",
        "اتصال لاسلكي موثوق",
        "تصميم مريح لليد",
        "دقة عالية في الاستشعار",
      ],
      inStock: true,
      rating: 4.6,
      reviews: 89,
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=300&fit=crop",
      badge: {
        type: "new",
        text: "جديد",
      },
    },
  ];

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Get product ID from query string
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const productId = parseInt(params.get("id"), 10);

  // Find product by ID
  const currentProduct = products.find((p) => p.id === productId);

  // If no product found
  if (!currentProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        المنتج غير موجود ❌
      </div>
    );
  }

  // Quantity handler
  const handleQuantityChange = (action) => {
    if (action === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative bg-gray-100 rounded-2xl overflow-hidden aspect-square group">
                <img
                  src={currentProduct.mainImages[selectedImage]}
                  alt={currentProduct.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {currentProduct.inStock && (
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    متوفر في المخزن
                  </div>
                )}
              </div>

              {/* Thumbnail Images */}
              <div className="flex gap-3 justify-center">
                {currentProduct.mainImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      selectedImage === index
                        ? "border-blue-500 shadow-lg scale-105"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Product ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Title & Rating */}
              <div className="text-right">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {currentProduct.name}
                </h1>
                <div className="flex items-center justify-end gap-2 mb-4">
                  <span className="text-gray-600">
                    ({currentProduct.reviews} تقييم)
                  </span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-lg ${
                          i < Math.floor(currentProduct.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="font-semibold">{currentProduct.rating}</span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center justify-end gap-4">
                <del className="text-2xl text-gray-400">
                  {currentProduct.oldPrice}
                </del>
                <span className="text-4xl font-bold text-green-600">
                  {currentProduct.price}
                </span>
              </div>

              {/* Description */}
              <div className="text-right">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  وصف المنتج
                </h3>
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {currentProduct.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="text-right">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  المميزات
                </h3>
                <ul className="space-y-2">
                  {currentProduct.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-end gap-2"
                    >
                      <span className="text-gray-700">{feature}</span>
                      <span className="text-green-500 text-lg">✓</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity & Actions */}
              <div className="space-y-4">
                <div className="flex items-center justify-end gap-4">
                  <span className="text-gray-700">الكمية:</span>
                  <div className="flex items-center border rounded-lg overflow-hidden">
                    <button
                      onClick={() => handleQuantityChange("increase")}
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      +
                    </button>
                    <span className="px-6 py-2 bg-white font-semibold">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange("decrease")}
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="max-w-7xl mx-auto p-6 mt-12">
        <div className="text-right mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            منتجات ذات صلة
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-auto"></div>
        </div>
        <div className="bg-white rounded-3xl shadow-xl p-6">
          {/* Pass all products to Card */}
          <Pro products={products} />
        </div>
      </div>

      <FeedbackApp />
    </div>
  );
}

export default ProductsInfo;
