import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend,
} from "recharts";

import useFeature from "../../Hook/useFeature";
import useReview from "../../Hook/useReview";
import useUsers from "../../Hook/useUsers";
import SectionTitle from "../../Page/SectionTitle/SectionTitle";

const StatisticsPage = () => {
    const [feature] = useFeature();
    const [user] = useUsers();
    const [reviews] = useReview();

    // Dynamic statistics data
    const statsData = [
        {
            name: "Products",
            total: feature.length,
        },
        {
            name: "Users",
            total: user.length,
        },
        {
            name: "Reviews",
            total: reviews.length,
        },
    ];

    // Pie chart colors
    const COLORS = ["#3B82F6", "#10B981", "#F59E0B"];

    return (
        <div className="w-full px-4 md:px-10 py-10">
            <SectionTitle heading={"Statistics Page"} />

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div className="bg-white shadow-xl rounded-2xl p-6 text-center border">
                    <h2 className="text-lg font-semibold text-gray-500">
                        Total Products
                    </h2>
                    <p className="text-5xl font-bold text-blue-500 mt-3">
                        {feature.length}
                    </p>
                </div>

                <div className="bg-white shadow-xl rounded-2xl p-6 text-center border">
                    <h2 className="text-lg font-semibold text-gray-500">
                        Total Users
                    </h2>
                    <p className="text-5xl font-bold text-green-500 mt-3">
                        {user.length}
                    </p>
                </div>

                <div className="bg-white shadow-xl rounded-2xl p-6 text-center border">
                    <h2 className="text-lg font-semibold text-gray-500">
                        Total Reviews
                    </h2>
                    <p className="text-5xl font-bold text-orange-500 mt-3">
                        {reviews.length}
                    </p>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-14">

                {/* Bar Chart */}
                <div className="bg-white rounded-2xl shadow-xl p-6 border">
                    <h2 className="text-2xl font-bold mb-6 text-center">
                        Statistics Overview
                    </h2>

                    <div className="w-full h-[350px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={statsData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />

                               
                                <Bar dataKey="total" radius={[10, 10, 0, 0]}>
                                    {statsData.map((entry, index) => (
                                        <Cell
                                            key={`bar-cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Pie Chart */}
                <div className="bg-white rounded-2xl shadow-xl p-6 border">
                    <h2 className="text-2xl font-bold mb-6 text-center">
                        Data Distribution
                    </h2>

                    <div className="w-full h-[350px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={statsData}
                                    dataKey="total"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={120}
                                    label
                                >
                                    {statsData.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Pie>

                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatisticsPage;