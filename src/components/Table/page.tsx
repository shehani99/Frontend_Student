import { Student, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Student[]> {
  // Fetch data from your API here.
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

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
