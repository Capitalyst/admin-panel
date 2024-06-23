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
import { DollarSign, CircleUser, Puzzle, BookMarked, Goal, LineChart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12" style={{ backgroundColor: " white" }}>
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
            {/* <p className="text-xs text-black">
              +20.1% from last month
            </p> */}
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
            {/* <p className="text-xs text-black">
              +20.1% from last month
            </p> */}
          </CardContent>
        </Card>

        <Card style={{ backgroundColor: "white", color: '#007cff' }}
          className="border min-w-[300px] border-black"
          x-chunk="dashboard-01-chunk-0"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-md font-medium">Daily Goals Achived</CardTitle>
            <Goal style={{ color: '#007cff' }} className="h-8 w-8 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">239</div>
            {/* <p className="text-xs text-black">
              +20.1% from last month
            </p> */}
          </CardContent>
        </Card>




      </div>
      <div className="flex w-full gap-5">
        <div className="lg:w-2/3 w-full mr-auto mt-5">
          <Card
            x-chunk="dashboard-06-chunk-0"
            className="bg-white text-black  border-black w-full">
            <CardHeader>
              <CardTitle style={{ color: "#007cff" }}>Top Users</CardTitle>
              <CardDescription className="text-gray-500">
                Displaying top <span style={{ color: "#007cff" }}>10 users</span> based on most number of coins
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table className="shadow-lg rounded-lg ">
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="w-[100px]">Profile</TableHead>
                    <TableHead >Username</TableHead>
                    <TableHead >Coins</TableHead>
                    <TableHead >Daily Goals</TableHead>
                    <TableHead >Refs</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow
                    onClick={() => {
                      router.push("/dashboard/profile/1");
                    }}
                    className="border-black">
                    <TableCell className="font-medium">
                      <Image
                        alt="Product image"
                        className="aspect-square object-cover rounded-full"
                        height="50"
                        src="/profile.jpg"
                        width="50"/>
                    </TableCell>
                    <TableCell >Prisha</TableCell>
                    <TableCell >1000</TableCell>
                    <TableCell >1000</TableCell>
                    <TableCell >1000</TableCell>
                  </TableRow>
                  <TableRow
                    onClick={() => {
                      router.push("/dashboard/profile/1");
                    }}
                    className="border-black">
                    <TableCell className="font-medium">
                      <Image
                        alt="Product image"
                        className="aspect-square object-cover rounded-full"
                        height="50"
                        src="/profile.jpg"
                        width="50"/>
                    </TableCell>
                    <TableCell >Jamith</TableCell>
                    <TableCell >1000</TableCell>
                    <TableCell >1000</TableCell>
                    <TableCell >1000</TableCell>
                  </TableRow>

                  <TableRow
                    onClick={() => {
                      router.push("/dashboard/profile/1");
                    }}
                    className="border-black">
                    <TableCell className="font-medium">
                      <Image
                        alt="Product image"
                        className="aspect-square object-cover rounded-full"
                        height="50"
                        src="/profile.jpg"
                        width="50"/>
                    </TableCell>
                    <TableCell >Nandita</TableCell>
                    <TableCell >1000</TableCell>
                    <TableCell >1000</TableCell>
                    <TableCell >1000</TableCell>
                  </TableRow>
                  <TableRow
                    onClick={() => {
                      router.push("/dashboard/profile/1");
                    }}
                    className="border-black">
                    <TableCell className="font-medium">
                      <Image
                        alt="Product image"
                        className="aspect-square object-cover rounded-full"
                        height="50"
                        src="/profile.jpg"
                        width="50"/>
                    </TableCell>
                    <TableCell >Aditi</TableCell>
                    <TableCell >1000</TableCell>
                    <TableCell >1000</TableCell>
                    <TableCell >1000</TableCell>
                  </TableRow>

                  <TableRow
                    onClick={() => {
                      router.push("/dashboard/profile/1");
                    }}
                    className="border-black">
                    <TableCell className="font-medium">
                      <Image
                        alt="Product image"
                        className="aspect-square object-cover rounded-full"
                        height="50"
                        src="/profile.jpg"
                        width="50"/>
                    </TableCell>
                    <TableCell >Vanshika</TableCell>
                    <TableCell >1000</TableCell>
                    <TableCell >1000</TableCell>
                    <TableCell >1000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        <div className="hidden lg:flex w-1/3 mt-5 flex-col gap-5">


          <Card style={{ backgroundColor: "white", color: '#007cff' }}
            className="border text-black min-w-[300px] border-black"
            x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Graph</CardTitle>
              <LineChart style={{color: '#007cff'}} className="h-7 w-7 "  />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Users</div>
              {/* <p className="text-xs text-black">
                +20.1% from last month
              </p> */}
           
            </CardContent>
          </Card>


        </div>
      </div>
    </main>
  );
}
