import Swal from "sweetalert2";
import UseAuth from "../components/hooks/UseAuth";
import UseAxiosSecure from "../components/hooks/UseAxiosSecure";
import Loading from "./Loading";
import { useQuery } from "@tanstack/react-query";

const Followers = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  const { data: allUsers = [], isLoading, refetch } = useQuery({
    queryKey: ['suggested-users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
     
console.log("Server response:", res.data);
      return res.data;
    }
  });

  const handleFollow = async (targetEmail) => {
    if (!user) {
      return Swal.fire({
        icon: 'warning',
        title: 'Please login first!',
        confirmButtonColor: '#9333ea'
      });
    }
    
    if (user.email === targetEmail) {
      return Swal.fire("You can't follow yourself");
    }

    try {
      const res = await axiosSecure.post('/users/follow', {
        followerEmail: user.email,
        followingEmail: targetEmail
      });
      
      if (res.status === 200 || res.data.insertedId) {
        Swal.fire({
          icon: 'success',
          title: 'Action Successful',
          showConfirmButton: false,
          timer: 1000
        });
        refetch(); 
      }
    } catch (err) {
      console.error("Follow error:", err);
      Swal.fire("Error!", "Something went wrong", "error");
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="max-w-7xl mx-auto px-4 my-12">
      <h2 className=" text-xl lg:text-2xl font-bold mb-8 text-center ">
        People You May <span className="text-purple-600">Follow</span>
      </h2>
      
    <div className="grid grid-cols-1  lg:grid-cols-4 gap-6">
  {allUsers.filter(u => u.email !== user?.email).map((u) => (
  <div key={u._id} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition text-center flex flex-col justify-between">
    <div>
      <img 
        src={u.image || "https://i.ibb.co/31S946M/user.png"} 
        className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-purple-500 p-0.5"
        alt={u.name}
      />
      <h3 className="mt-2 font-bold text-gray-800 text-sm md:text-base leading-tight">{u.name}</h3>
      <h3 className="mt-2 font-bold text-gray-800 text-sm md:text-base leading-tight">{u.email}</h3>
      <p className="text-purple-600 text-[10px] font-medium uppercase tracking-wider">{u.role || 'Foodie'}</p>
    </div>

    <button 
      onClick={() => handleFollow(u.email)}
      className="mt-3 w-full py-1.5 bg-purple-600 text-white text-sm font-semibold rounded-lg hover:bg-purple-700 active:scale-95 transition"
    >
      Follow
    </button>
  </div>
))}
</div>
    </div>
  );
};

export default Followers;