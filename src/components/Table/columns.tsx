"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, Trash2, UserCog } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
     DropdownMenu,
     DropdownMenuContent,
     DropdownMenuItem,
     DropdownMenuLabel,
     DropdownMenuSeparator,
     DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
     Tooltip,
     TooltipContent,
     TooltipProvider,
     TooltipTrigger,
} from "@/components/ui/tooltip"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Student = {
     id: string;
     firstName: string;
     lastName: string;
     email: string;
     department: string;
     yearOfEnrollment: number;
     //   amount: number;
     //   status: "pending" | "processing" | "success" | "failed";
};

export const columns: ColumnDef<Student>[] = [
     {
          accessorKey: "id",
          header: "ID",
     },
     {
          accessorKey: "firstName",
          header: "First Name",
     },
     {
          accessorKey: "lastName",
          header: "Last Name",
     },
     {
          accessorKey: "email",
          header: "Email",
     },
     {
          accessorKey: "department",
          header: "Department",
     },
     {
          accessorKey: "yearOfEnrollment",
          header: "Year Of Enrollment",
     },
     {
          id: "actions",
          cell: ({ row }) => {
               const payment = row.original;

               return (
                    <DropdownMenu>
                         <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                   <span className="sr-only">Open menu</span>
                                   <MoreHorizontal className="h-4 w-4" />
                              </Button>
                         </DropdownMenuTrigger>
                         <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem
                                   onClick={() => navigator.clipboard.writeText(payment.id)}
                              >
                                   Copy Student ID
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                   <TooltipProvider>
                                        <Tooltip>
                                             <TooltipTrigger>
                                                  <Button className="bg-green-500 text-white hover:bg-green-600">
                                                       <UserCog />
                                                  </Button>
                                             </TooltipTrigger>
                                             <TooltipContent>
                                                  <p>Edit User</p>
                                             </TooltipContent>
                                        </Tooltip>
                                   </TooltipProvider>
                                   <TooltipProvider>
                                        <Tooltip>
                                             <TooltipTrigger>
                                                  <Button className="bg-red-500 text-white hover:bg-red-600">
                                                       <Trash2 />
                                                  </Button>
                                             </TooltipTrigger>
                                             <TooltipContent>
                                                  <p>Delete User</p>
                                             </TooltipContent>
                                        </Tooltip>
                                   </TooltipProvider>
                              </DropdownMenuItem>
                         </DropdownMenuContent>
                    </DropdownMenu>
               );
          },
     },
];
