import { CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link, Link2, Link2Icon, Link2Off } from "lucide-react";
import TaskModal from "@/components/taskModal";
import { Textarea } from "@/components/ui/textarea";

const Task = (props) => {
  return (
    <main className="flex flex-col min-h-screen w-screen lg:p-12 md:p-12 p-4 bg-white" >
      <Card
        x-chunk="dashboard-06-chunk-0" style={{ backgroundColor: "white", color: '#007cff' }}
        className="bg-white text-white  border-black w-[90%] mx-auto"
      >
        <CardHeader>
          <div className="flex justify-between">
            <div>
              <CardTitle style={{ color: "#007cff" }}>Tasks</CardTitle>
              <CardDescription className="text-gray-400">
                Tasks hogaya
              </CardDescription>
            </div>
            <div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button style={{ backgroundColor: "#007cff" }} className="bg-white">Create Task</Button>
                </DialogTrigger>
                <DialogContent className=" bg-background border-gray-800">
                  <DialogHeader>
                    <DialogTitle>Task</DialogTitle>
                    <DialogDescription>
                      Note: for adding icons
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Task Name
                      </Label>
                      <Input
                        id="name"
                        defaultValue="Pedro Duarte"
                        className="col-span-3 border-gray-900"
                      />

                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="coins" className="text-right">
                        Coins
                      </Label>
                      <Input
                        id="coins"
                        type="number"
                        defaultValue="0"
                        className="col-span-3 border-gray-900"
                      />
                    </div>

                    {/* <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Description
                      </Label>
                      <Textarea
                        id="username"
                        defaultValue="@peduarte"
                        className="col-span-3 bg-black border-gray-900"
                      />
                    </div> */}
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Category
                      </Label>
                      <Select>
                        <SelectTrigger className="w-[180px] bg-background border-gray-900">
                          <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent className="bg-black text-white border-gray-900">
                          <SelectItem value="dailytask">Daily</SelectItem>
                          <SelectItem value="partners">3 Days</SelectItem>
                          <SelectItem value="others">Always</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {/* <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Type
                      </Label>
                      <Select>
                        <SelectTrigger className="w-[180px] bg-background border-gray-900">
                          <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent className="bg-black text-white border-gray-900">
                          <SelectItem value="dailytask">Twitter</SelectItem>
                          <SelectItem value="follow">Youtube</SelectItem>
                          <SelectItem value="partners">Partners</SelectItem>
                          <SelectItem value="others">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div> */}
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table className="shadow-lg rounded-lg">
            <TableHeader>
              <TableRow className="hover:bg-white">
                <TableHead> Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-gray-800 hover:bg-white">
                <TableCell>Twitter Like Retweek</TableCell>
                <TableCell>1000</TableCell>
                <TableCell>Daily</TableCell>
                <TableCell>
                  <Select>
                    <SelectTrigger
                      id="category"
                      aria-label="Select category"
                      defaultValue={"Active"}
                      className="bg-white border-none outline-none"
                    >
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent className="text-black bg-white border-gray-800 ">
                      <SelectItem value="clothing">Active</SelectItem>
                      <SelectItem value="electronics">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>

              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
};

export default Task;
