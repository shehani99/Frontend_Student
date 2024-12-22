import { Card, CardContent } from "@/components/ui/card";
import { Student, columns } from "@/components/Table/columns";
import { DataTable } from "@/components/Table/data-table";
import { useState, useEffect } from "react";
import { ModeToggle } from "@/components/ui/mode-toggle";

async function getData(): Promise<Student[]> {
  return [
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      department: "Computer Science",
      yearOfEnrollment: 2021,
    },
    {
      id: "2",
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      department: "Mechanical Engineering",
      yearOfEnrollment: 2020,
    },
    {
      id: "3",
      firstName: "Alice",
      lastName: "Johnson",
      email: "alice.johnson@example.com",
      department: "Electrical Engineering",
      yearOfEnrollment: 2022,
    },
    {
      id: "4",
      firstName: "Bob",
      lastName: "Brown",
      email: "bob.brown@example.com",
      department: "Civil Engineering",
      yearOfEnrollment: 2019,
    },
    {
      id: "5",
      firstName: "Emily",
      lastName: "Davis",
      email: "emily.davis@example.com",
      department: "Information Technology",
      yearOfEnrollment: 2021,
    },
  ];
}

export default function Home() {
  const [data, setData] = useState<Student[]>([]);

  useEffect(() => {
    async function loadData() {
      const result = await getData();
      setData(result);
    }

    loadData();
  }, []);

  return (
    <>
      <div className="container">

        <h1 className=" flex items-center justify-center text-4xl mt-4">
          Student's Management System
        </h1>
        <div className="absolute top-4 right-4 mt-2">
          <ModeToggle />
        </div>


        <div className="container mt-5 pt-3">
          <Card>
            <CardContent>
              <div className="container mx-auto py-10">
                <DataTable columns={columns} data={data} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
