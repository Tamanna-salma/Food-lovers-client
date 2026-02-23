import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContexts/AuthProvider";

const MyFollowers = () => {
    const { user } = useContext(AuthContext);
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://food-lovers-server-blond.vercel.app/my-followers/${user.email}`)
                .then(res => res.json())
                .then(data => setFollowers(data));
        }
    }, [user]);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-purple-600">My Followers ({followers.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {followers.map(follower => (
                    <div key={follower._id} className="flex items-center gap-4 p-4 bg-base-200 dark:bg-slate-800 rounded-xl shadow-sm border dark:border-slate-700">
                        <img src={follower.image} alt="" className="w-16 h-16 rounded-full object-cover border-2 border-purple-500" />
                        <div>
                            <h3 className="font-bold text-lg">{follower.name}</h3>
                            <p className="text-sm opacity-70">{follower.email}</p>
                            <span className="badge badge-sm badge-outline mt-1">{follower.role}</span>
                        </div>
                    </div>
                ))}
            </div>
            {followers.length === 0 && <p className="text-center mt-10 opacity-50">No followers found yet.</p>}
        </div>
    );
};

export default MyFollowers;