import { useContext } from "react";
import { AuthContext } from "../AuthContexts/AuthProvider";


const MyProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="max-w-4xl mx-auto space-y-6">
      <div className="relative h-48 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl shadow-lg">
        <div className="absolute -bottom-12 left-10">
          <img src={user?.photoURL} className="w-32 h-32 rounded-full border-4 border-base-100 shadow-xl" alt="profile" />
        </div>
      </div>

      <div className="pt-14 px-10 pb-10 bg-base-100 dark:bg-slate-900 rounded-2xl border dark:border-slate-800 shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-3xl font-bold">{user?.displayName}</h2>
            <p className="text-gray-500 dark:text-gray-400">{user?.email}</p>
          </div>
          <button className="btn btn-primary bg-purple-600 border-none hover:bg-purple-700">Edit Profile</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="form-control">
            <label className="label text-gray-400">Full Name</label>
            <input type="text" value={user?.displayName} readOnly className="input input-bordered dark:bg-slate-800" />
          </div>
          <div className="form-control">
            <label className="label text-gray-400">Join Date</label>
            <input type="text" value="Jan 2024" readOnly className="input input-bordered dark:bg-slate-800" />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default MyProfile;