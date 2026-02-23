import { useQuery } from "@tanstack/react-query"; 
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { FaUsers, FaUtensils, FaUserFriends, FaBookOpen } from "react-icons/fa";

const DashboardHome = () => {

    const { data: stats = {}, isLoading } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await fetch('https://food-lovers-server-blond.vercel.app/admin-stats');
            return res.json();
        }
    });

    if (isLoading) return <span className="loading loading-bars loading-lg"></span>;

    const chartData = stats.chartData?.length > 0 ? stats.chartData : [
        { name: 'Appetizer', value: 4 },
        { name: 'Main Course', value: 10 },
        { name: 'Dessert', value: 7 },
        { name: 'Drinks', value: 5 }
    ];

    return (
        <div className="p-4 space-y-10">
            <h2 className="text-3xl font-bold">Welcome to Dashboard</h2>

       
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="stat bg-blue-100 dark:bg-blue-900 rounded-2xl shadow p-6 flex items-center gap-4">
                    <FaUsers className="text-4xl text-blue-600" />
                    <div>
                        <div className="stat-title dark:text-gray-300">Total Users</div>
                        <div className="stat-value text-2xl">{stats.users}</div>
                    </div>
                </div>
                <div className="stat bg-purple-100 dark:bg-purple-900 rounded-2xl shadow p-6 flex items-center gap-4">
                    <FaUtensils className="text-4xl text-purple-600" />
                    <div>
                        <div className="stat-title dark:text-gray-300">Food Items</div>
                        <div className="stat-value text-2xl">{stats.foods}</div>
                    </div>
                </div>
                <div className="stat bg-green-100 dark:bg-green-900 rounded-2xl shadow p-6 flex items-center gap-4">
                    <FaUserFriends className="text-4xl text-green-600" />
                    <div>
                        <div className="stat-title dark:text-gray-300">Followers</div>
                        <div className="stat-value text-2xl">{stats.followers}</div>
                    </div>
                </div>
                <div className="stat bg-orange-100 dark:bg-orange-900 rounded-2xl shadow p-6 flex items-center gap-4">
                    <FaBookOpen className="text-4xl text-orange-600" />
                    <div>
                        <div className="stat-title dark:text-gray-300">Recipes</div>
                        <div className="stat-value text-2xl">{stats.recipes}</div>
                    </div>
                </div>
            </div>

         
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border dark:border-slate-800">
                <h3 className="text-xl font-semibold mb-6">Food Categories Distribution</h3>
                <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip cursor={{fill: 'transparent'}} />
                            <Bar dataKey="value" fill="#8b5cf6" radius={[5, 5, 0, 0]} barSize={50} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;