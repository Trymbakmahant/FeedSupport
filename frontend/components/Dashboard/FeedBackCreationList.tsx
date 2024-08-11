"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useFetchForms from "@/hooks/useFetchCreatedForms";
import { spawn } from "child_process";
import { useState } from "react";
import { Button } from "../ui/button";

export function FeedBackCreationList() {
  const [search, setSearch] = useState<string>("");
  const { forms, loading, error } = useFetchForms(search);

  if (forms && forms.length == 0) {
    return (
      <div className="h-[400px]  justify-center flex items-center w-full">
        <div className="flex gap-4 items-center flex-col">
          <span>Hey You {`don't`} have any Form </span>
          <Button className="w-fit">Create Now</Button>
        </div>
      </div>
    );
  }
  return (
    <Table>
      <TableCaption>A list of your Created FeedBack Form</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Form Name</TableHead>
          <TableHead>Rating Type</TableHead>
          <TableHead>No. Of Quetion</TableHead>
          <TableHead className="text-right"> Creation Time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {forms &&
          forms.map((Product: any) => (
            <TableRow key={Product.ProductName}>
              <TableCell className="font-medium">
                {Product.ProductName}
              </TableCell>
              <TableCell> {Product.Rating ? "Stars" : "Emoji"}</TableCell>
              <TableCell className="text-center">
                {Product.Questions.length}{" "}
              </TableCell>
              <TableCell className="text-right">{Product.createdAt}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
