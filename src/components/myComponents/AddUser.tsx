"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
     Form,
     FormControl,
     FormField,
     FormItem,
     FormLabel,
     FormMessage,
} from "@/components/ui/form";
import { DatePicker } from "./DatePicker";

// Define the schema for form data using Zod
const formSchema = z.object({
     firstName: z.string().min(1, {
          message: "First name is required.",
     }),
     lastName: z.string().min(1, {
          message: "Last name is required.",
     }),
     email: z.string().email({
          message: "Please enter a valid email address.",
     }),
     department: z.string().min(1, {
          message: "Department is required.",
     }),
     yearOfEnrollment: z.number().min(2019, {
          message: "Please enter a valid year of enrollment.",
     }).max(new Date().getFullYear(), {
          message: "Year of enrollment can't be in the future.",
     }),
});

// Define TypeScript types for the form data based on Zod schema
type FormData = z.infer<typeof formSchema>;

const AddUserForm: React.FC = () => {
     // Set up React Hook Form with Zod validation
     const form = useForm<FormData>({
          resolver: zodResolver(formSchema),
          defaultValues: {
               firstName: "",
               lastName: "",
               email: "",
               department: "",
               yearOfEnrollment: new Date().getFullYear(),
          },
     });

     // Handle form submission
     const onSubmit: SubmitHandler<FormData> = (data) => {
          console.log(data); // Handle the form data
     };

     return (
          <Form {...form}>
               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    {/* First Name Field */}
                    <FormField
                         control={form.control}
                         name="firstName"
                         render={({ field }) => (
                              <FormItem>
                                   <FormLabel>First Name</FormLabel>
                                   <FormControl>
                                        <Input placeholder="Enter your first name" {...field} />
                                   </FormControl>
                                   <FormMessage />
                              </FormItem>
                         )}
                    />

                    {/* Last Name Field */}
                    <FormField
                         control={form.control}
                         name="lastName"
                         render={({ field }) => (
                              <FormItem>
                                   <FormLabel>Last Name</FormLabel>
                                   <FormControl>
                                        <Input placeholder="Enter your last name" {...field} />
                                   </FormControl>
                                   <FormMessage />
                              </FormItem>
                         )}
                    />

                    {/* Email Field */}
                    <FormField
                         control={form.control}
                         name="email"
                         render={({ field }) => (
                              <FormItem>
                                   <FormLabel>Email</FormLabel>
                                   <FormControl>
                                        <Input placeholder="Enter your email" {...field} />
                                   </FormControl>
                                   <FormMessage />
                              </FormItem>
                         )}
                    />

                    {/* Department Field */}
                    <FormField
                         control={form.control}
                         name="department"
                         render={({ field }) => (
                              <FormItem>
                                   <FormLabel>Department</FormLabel>
                                   <FormControl>
                                        <Input placeholder="Enter your department" {...field} />
                                   </FormControl>
                                   <FormMessage />
                              </FormItem>
                         )}
                    />

                    {/* Year of Enrollment Field */}
                    <FormField
                         control={form.control}
                         name="yearOfEnrollment"
                         render={() => (
                              <FormItem>
                                   <FormLabel>Year of Enrollment</FormLabel>
                                   <FormControl>
                                        {/* <Input
                                             type="number"
                                             placeholder="Enter year of enrollment"
                                             {...field}
                                        /> */}
                                        <DatePicker />
                                   </FormControl>
                                   <FormMessage />
                              </FormItem>
                         )}
                    />

                    {/* Submit Button */}
                    <Button type="submit">Submit</Button>
               </form>
          </Form>
     );
};

export default AddUserForm;
