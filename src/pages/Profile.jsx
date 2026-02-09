import { Pencil } from "lucide-react";
import { Input } from "postcss";

const Profile = () => {
  return (
    <div className="bg-gray-100">
      <div className="relative w-full mb-20 max-h-70 overflow-hidden">
        <img className="w-full h-full object-cover" src="/Home.png" alt="" />
      </div>
      <div className="flex justify-center -mt-32 pb-10">
        <div className="relative">
          <img
            src="/boy_6048329.png"
            className="w-35 h-35 rounded-full border-white object-cover"
          />

          <button className="absolute bottom-2 right-2 bg-pink-600 text-white p-2 rounded-full">
            <Pencil size={14} />
          </button>
        </div>
      </div>

      {/* ================= FORM ================= */}
      <div className="mt-8 max-w-xl mx-auto bg-white rounded-xl shadow p-8">
        <h2 className="text-lg font-semibold text-center mb-6">
          General information
        </h2>

        <div className="flex items-center gap-6">
          <div>
            <label className="text-sm text-gray-500">First Name</label>
            <input
              placeholder="John"
              className="w-full mt-3 border border-black/50 rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500">Last Name</label>
            <input
              placeholder="Smith"
              className="w-full mt-3 border border-black/50 rounded-lg px-4 py-2"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm text-gray-500 mb-3">Email</label>
          <input
            placeholder="Johnsmith@gmail.com"
            className="w-full border border-black/50 rounded-lg px-4 py-2"
          />
        </div>

        <div className="mt-6">
          <label className="block text-sm text-gray-500 mb-3">
            Phone number
          </label>
          <input
            placeholder="123456789"
            className="w-full border border-black/50 rounded-lg px-4 py-2"
          />
        </div>

        <div className="mt-6">
          <label className="block text-sm text-gray-500 mb-3">Address</label>
          <input
            placeholder="Maadi, Cairo, Egypt."
            className="w-full border border-black/50 rounded-lg px-4 py-2"
          />
        </div>
      </div>

      <div className="flex justify-center mt-8 pb-10">
        <button className="bg-pink-600 text-white px-10 py-3 rounded-lg">
          Update information
        </button>
      </div>
    </div>
  );
};

export default Profile;
