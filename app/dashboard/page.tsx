"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CircleUser, Puzzle, BookMarked, Goal, LineChart, DollarSign } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ResponsiveContainer, Line, LineChart as RechartsLineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export default function Home() {
  const router = useRouter();

  // Sample data for the line chart
  const data = [
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12" style={{ backgroundColor: "white" }}>
      <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        <Card style={{ backgroundColor: "white", color: '#007cff' }}
          className="border min-w-[300px] border-black"
          x-chunk="dashboard-01-chunk-0"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-md font-medium text-center" >Total Users</CardTitle>
            <CircleUser style={{ color: '#007cff' }} className="h-7 w-7 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">45,231</div>
      
          </CardContent>
        </Card>

        <Card style={{ backgroundColor: "white", color: '#007cff' }}
          className="border min-w-[300px] border-black"
          x-chunk="dashboard-01-chunk-0"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-md font-medium">Total Modules</CardTitle>
            <Puzzle style={{ color: '#007cff' }} className="h-7 w-7 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">4231</div>
          </CardContent>
        </Card>

        <Card style={{ backgroundColor: "white", color: '#007cff' }}
          className="border min-w-[300px] border-black"
          x-chunk="dashboard-01-chunk-0"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-md font-medium">Total Blogs</CardTitle>
            <BookMarked style={{ color: '#007cff' }} className="h-7 w-7 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">5,231</div>
          </CardContent>
        </Card>

        <Card style={{ backgroundColor: "white", color: '#007cff' }}
          className="border min-w-[300px] border-black"
          x-chunk="dashboard-01-chunk-0"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-md font-medium">Daily Goals Achieved</CardTitle>
            <Goal style={{ color: '#007cff' }} className="h-8 w-8 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">239</div>
          </CardContent>
        </Card>
      </div>

      <div className="flex w-full gap-5">
        <div className="lg:w-2/3 w-full mr-auto mt-5">
          <Card
            x-chunk="dashboard-06-chunk-0"
            className="bg-white text-black  border-black w-full"
          >
            <CardHeader>
              <CardTitle style={{ color: "#007cff" }}>Top Users</CardTitle>
              <CardDescription className="text-gray-500">
                Displaying top <span style={{ color: "#007cff" }}>10 users</span> based on most number of coins
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table className="shadow-lg rounded-lg">
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead>Username</TableHead>
                    <TableHead>Coins</TableHead>
                    <TableHead>Daily Goals</TableHead>
                    <TableHead>Authored Blogs</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow
                    onClick={() => {
                      router.push("/dashboard/profile/1");
                    }}
                    className="border-black"
                  >
                    <TableCell>Prisha</TableCell>
                    <TableCell>80,691</TableCell>
                    <TableCell>10,074</TableCell>
                    <TableCell>24</TableCell>
                  </TableRow>
                  <TableRow
                    onClick={() => {
                      router.push("/dashboard/profile/1");
                    }}
                    className="border-black"
                  >
                    <TableCell>Jamith</TableCell>
                    <TableCell>45,495</TableCell>
                    <TableCell>9099</TableCell>
                    <TableCell>20</TableCell>
                  </TableRow>
                  <TableRow
                    onClick={() => {
                      router.push("/dashboard/profile/1");
                    }}
                    className="border-black"
                  >
                    <TableCell>Nandita</TableCell>
                    <TableCell>36,920</TableCell>
                    <TableCell>7384</TableCell>
                    <TableCell>15</TableCell>
                  </TableRow>
                  <TableRow
                    onClick={() => {
                      router.push("/dashboard/profile/1");
                    }}
                    className="border-black"
                  >
                    <TableCell>Aditi</TableCell>
                    <TableCell>34,825</TableCell>
                    <TableCell>6965</TableCell>
                    <TableCell>15</TableCell>
                  </TableRow>
                  <TableRow
                    onClick={() => {
                      router.push("/dashboard/profile/1");
                    }}
                    className="border-black"
                  >
                    <TableCell>Vanshika</TableCell>
                    <TableCell>24,980</TableCell>
                    <TableCell>4996</TableCell>
                    <TableCell>10</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <div className="hidden lg:flex w-1/3 mt-5 flex-col gap-5">
          <Card
            style={{ backgroundColor: "white", color: '#007cff' }}
            className="border text-black min-w-[300px] border-black"
            x-chunk="dashboard-01-chunk-0"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Graph</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Users</div>
              <ResponsiveContainer width="100%" height={300}>
                <RechartsLineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </RechartsLineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
