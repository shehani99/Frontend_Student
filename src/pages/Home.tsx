import { Card, CardContent } from "@/components/ui/card";
import { Payment, columns } from "@/components/Table/columns";
import { DataTable } from "@/components/Table/data-table";
import { useState, useEffect } from "react";

async function getData(): Promise<Payment[]> {
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

export default function Home() {
  const [data, setData] = useState<Payment[]>([]);

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
        <div className="flex flex-col">
          <h1 className="text-red-300xl items-center text-center shadow-lg bg-blue-400">
            Student's Management System
          </h1>
          {/* <Button>Click me</Button> */}
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
