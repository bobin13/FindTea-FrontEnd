import { useState } from "react";
import { Plus, Trash, Star } from "lucide-react";

interface Drink {
  name: string;
  rating: number;
}

function AddStore() {
  const [storeName, setStoreName] = useState("");
  const [address, setAddress] = useState("");
  const [drinks, setDrinks] = useState<Drink[]>([{ name: "", rating: 0 }]);

  // Add a new drink input field
  const addDrink = () => {
    setDrinks([...drinks, { name: "", rating: 0 }]);
  };

  // Remove a drink from the list
  const removeDrink = (index: number) => {
    const updatedDrinks = drinks.filter((_, i) => i !== index);
    setDrinks(updatedDrinks);
  };

  // Update a drink's name or rating
  const updateDrink = (index: number, key: "name" | "rating", value: any) => {
    const updatedDrinks = [...drinks];
    updatedDrinks[index][key] = value;
    setDrinks(updatedDrinks);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ storeName, address, drinks });
    alert("Store added successfully! 🎉");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-bold text-teal-400 mb-4">🛒 Add a Store</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg"
      >
        {/* Store Name */}
        <label className="block text-gray-300">Store Name</label>
        <input
          type="text"
          className="w-full p-2 mt-1 mb-3 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={storeName}
          onChange={(e) => setStoreName(e.target.value)}
          placeholder="Enter store name"
          required
        />

        {/* Address */}
        <label className="block text-gray-300">Address</label>
        <input
          type="text"
          className="w-full p-2 mt-1 mb-3 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter store address"
          required
        />

        {/* Drinks Section */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-purple-400">🍹 Drinks</h3>

          {drinks.map((drink, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 bg-gray-700 p-2 rounded-md mt-2"
            >
              <input
                type="text"
                className="flex-1 p-2 rounded-md bg-gray-600 border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                value={drink.name}
                onChange={(e) => updateDrink(index, "name", e.target.value)}
                placeholder="Drink name"
                required
              />

              <div className="flex flex-row w-full justify-between">
                <div>
                  <p>{}</p>
                </div>
                {/* Star Rating */}
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 cursor-pointer ${
                        drink.rating >= star
                          ? "text-yellow-400"
                          : "text-gray-400"
                      }`}
                      onClick={() => updateDrink(index, "rating", star)}
                    />
                  ))}
                </div>

                {/* Remove Drink Button */}
                <button
                  type="button"
                  onClick={() => removeDrink(index)}
                  className="p-2 bg-red-500 rounded-full hover:bg-red-600"
                >
                  <Trash className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          ))}

          {/* Add Drink Button */}
          <button
            type="button"
            onClick={addDrink}
            className="mt-2 flex items-center justify-center w-full bg-green-500 text-white font-semibold p-2 rounded-md hover:bg-green-600"
          >
            <Plus className="w-5 h-5 mr-2" /> Add Drink
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 w-full bg-teal-500 text-white font-bold p-3 rounded-md hover:bg-teal-600"
        >
          Submit Store
        </button>
      </form>
    </div>
  );
}

export default AddStore;
