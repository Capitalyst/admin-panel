"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, DollarSign, Users, BadgeIndianRupee, Wallet, HandCoins, PiggyBank, Coins, BookCheck } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React from "react";

const page = (props) => {
  const router = useRouter();
  return (
    <main className="flex flex-col min-h-screen w-screen lg:p-12 md:p-12 p-4" style={{backgroundColor:"white"}}>
      <div className="flex gap-5 items-center">
        <Button
          onClick={() => {
            router.push("/dashboard");
          }}
          variant="outline"
          size="icon"
          className="h-8 w-8"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Back</span>
        </Button>
        <h1 className="text-2xl">Profile</h1>
      </div>
      <div className="h-fit lg:w-[90%] w-full mt-5 mx-auto rounded-default lg:p-12 md:12 p-4">
        <div className="flex lg:flex-row md:flex-row flex-col justify-between">
          <div className="flex lg:w-[40%] md:w-[40%] w-full  flex-col">
            <Image
              alt="Product image"
              className="aspect-square object-cover rounded-full mx-auto"
              height="150"
              src="/profile.jpg"
              width="150"
            />
            <div className="flex flex-col text-center mt-2">
              <h1 className="text-xl text-black font-bold">Prisha</h1>
              <h2 className="text-md text-black">23-10-2003</h2>
            </div>
          </div>

          <div className="grid w-full lg:mt-0 md:mt-0 mt-8 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">

            <Card
              className="bg-white border text-black min-w-[300px] border-gray-800"
              x-chunk="dashboard-01-chunk-0"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Current Balance
                </CardTitle>
                <Wallet className="h-7 w-7 text-black" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45,231</div>
              </CardContent>
            </Card>

            <Card
              className="bg-white border text-black min-w-[300px] border-gray-800"
              x-chunk="dashboard-01-chunk-0"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Expenses
                </CardTitle>
                <BadgeIndianRupee className="h-7 w-7 text-black" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4231</div>
              </CardContent>
            </Card>

            <Card
              className="bg-white border text-black min-w-[300px] border-gray-800"
              x-chunk="dashboard-01-chunk-0"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Monthly Income
                </CardTitle>
                <HandCoins className="h-7 w-7 text-black" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">40231</div>
              </CardContent>
            </Card>

            <Card
              className="bg-white border text-black min-w-[300px] border-gray-800"
              x-chunk="dashboard-01-chunk-0"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Portfolio
                </CardTitle>
                <PiggyBank className="h-7 w-7 text-black"/>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4231</div>
              </CardContent>
            </Card>

            <Card
              className="bg-white border text-black min-w-[300px] border-gray-800"
              x-chunk="dashboard-01-chunk-0"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Coins
                </CardTitle>
                <Coins className="h-7 w-7 text-black" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">531</div>
              </CardContent>
            </Card>

            <Card
              className="bg-white border text-black min-w-[300px] border-gray-800"
              x-chunk="dashboard-01-chunk-0"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Authored Blogs
                </CardTitle>
                <BookCheck className="h-7 w-7 text-black" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">21</div>
              </CardContent>
            </Card>





          </div>
          {/* <Card
            x-chunk="dashboard-06-chunk-0"
            className="bg-background text-white  border-gray-800 w-2/3"
          >
            <CardHeader>
              <CardTitle>User Information</CardTitle>
              <div className="">
                <div className="w-full">
                  <div className="flex justify-between my-2">
                    <h1 className="text-gray-400">Ton Address</h1>
                    <h1>dsbfbksdjbfj</h1>
                  </div>
                  <Separator className="bg-gray-800" />

                  <div className="flex justify-between my-2">
                    <h1 className="text-gray-400">Ton Address</h1>
                    <h1>dsbfbksdjbfj</h1>
                  </div>
                </div>
                <Separator className="bg-gray-800" />
              </div>
            </CardHeader>
          </Card> */}
        </div>
      </div>
    </main>
  );
};

export default page;

// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { Separator } from "@/components/ui/separator";
// import { ChevronLeft, DollarSign, Users } from "lucide-react";
// import Image from "next/image";
// import React from "react";

// const page = (props) => {
//   return (
//     <main className="flex flex-col min-h-screen w-screen p-12">
//       <div className="flex gap-5 items-center">
//         <Button variant="outline" size="icon" className="h-8 w-8">
//           <ChevronLeft className="h-5 w-5" />
//           <span className="sr-only">Back</span>
//         </Button>
//         <h1 className="text-3xl">Profile</h1>
//       </div>
//       <div className="h-fit w-2/3 mt-5 mx-auto bg-background p-10 border border-gray-800 rounded-default">
//         <div className="flex flex-col items-center gap-5">
//           <Image
//             alt="Product image"
//             className="aspect-square object-cover rounded-full"
//             height="150"
//             src="/profile.jpg"
//             width="150"
//           />
//           <div className="flex flex-col text-center">
//             <h1 className="text-2xl">twaykar8</h1>
//             <h2 className="text-lg text-gray-400">Tanmay</h2>
//           </div>
//           <h1 className="mr-auto mt-4 text-lg text-gray-500">User Stats</h1>
//           <Separator className="bg-gray-800" />
//           <div className="flex justify-between mx-auto w-full">
//             <div className="flex flex-col">
//               <Label>Total Coins</Label>
//               <span className="mt-3 text-xl font-semibold">4000</span>
//             </div>
//             <div className="flex flex-col">
//               <Label>Total Coins</Label>
//               <span className="mt-3 text-xl font-semibold">4000</span>
//             </div>
//             <div className="flex flex-col">
//               <Label>Total Coins</Label>
//               <span className="mt-3 text-xl font-semibold">4000</span>
//             </div>
//             <div className="flex flex-col">
//               <Label>Total Coins</Label>
//               <span className="mt-3 text-xl font-semibold">4000</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default page;
