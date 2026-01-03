import { useNavigate } from "react-router";
import UseAuth from "../components/hooks/UseAuth";
import UseAxiosSecure from "../components/hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading";

const MyFollowers = () => {
    const { user } = UseAuth();
    const axiosSecure = UseAxiosSecure();
    const navigate = useNavigate();
    const { data: followers = [], isLoading } = useQuery({
        queryKey: ['my-followers', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/my-followers/${user?.email}`);
            return res.data;
        },
        enabled: !!user?.email 
    });

    if (isLoading) return <Loading />;

    return (
        <div className="max-w-4xl mx-auto my-12 px-4">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">
                    My <span className="text-purple-600">Followers</span> ({followers.length})
                </h2>
                <button 
                    onClick={() => navigate(-1)} 
                    className="btn btn-sm btn-outline border-purple-500 text-purple-600 hover:bg-purple-600 hover:border-none"
                >
                    Back
                </button>
            </div>

            {/* Followers List */}
            <div className="grid gap-4">
                {followers.length > 0 ? (
                    followers.map((f) => (
                        <div key={f._id} className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm flex items-center justify-between hover:shadow-md transition">
                            <div className="flex items-center gap-4">
                                <img 
                                    src={f.image || "https://i.ibb.co/31S946M/user.png"} 
                                    alt={f.name} 
                                    className="w-14 h-14 rounded-full border-2 border-purple-200 p-0.5 object-cover"
                                />
                                <div>
                                    <h3 className="font-bold text-gray-800">{f.name}</h3>
                                    <p className="text-sm text-gray-500">{f.email}</p>
                                    <span className="text-[10px] bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full font-bold uppercase">
                                        {f.role || 'Foodie'}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="hidden sm:block">
                                <button className="btn btn-xs btn-ghost text-purple-600 font-bold">
                                    View Profile
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    
                    <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                        <img className="w-20 mx-auto opacity-30 mb-4" src="https://cdn-icons-png.flaticon.com/512/1053/1053210.png" alt="" />
                        <h2 className="text-xl font-semibold text-gray-500">No followers yet!</h2>
                        <p className="text-gray-400">Share your recipes to get more followers.</p>
                    </div>
                )}
            </div>
            
            <div className="mt-10 p-4 bg-purple-50 rounded-xl text-center border border-purple-100">
                <p className="text-purple-700 text-sm font-medium">
                    This list shows people who are currently following you.
                </p>
            </div>
        </div>
    );
};

export default MyFollowers;