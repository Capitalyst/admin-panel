import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import login from "@/app/dashboard/login.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between w-screen" style={{color: "#007cff", backgroundColor: "WHITE"}}>
      <div className="w-[40%] h-screen flex justify-center items-center">
        <div className="w-1/2">
          <div className="w-full text-center mb-4">
            <h1 className="text-4xl">Welcome</h1>
            <p className="text-gray-400 mt-2">WiseVault Admin</p>
          </div>

          <Label htmlFor="email">Email</Label>
          <Input
            type="text"
            id="username"
            placeholder="Username"
            className="mb-2 bg-white outline-gray-800 border-gray-800 focus:ring-0"
          />
          <Label htmlFor="email">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            className="mb-2 bg-white outline-gray-800 border-gray-800 focus:ring-0"
          />
          <Button style={{backgroundColor:"#007cff"}} className=" text-gray-100 mt-4 w-full">Login</Button>
        </div>
      </div>
      <div className="w-[60%] relative h-screen bg-gray-800">
        <Image
          src={login}
          layout="fill"
          objectFit="cover"
          alt="login-bg"
        />
      </div>
    </main>
  );
}
