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

const Donation = [
  {
    name: "INV001",

    totalAmount: "$250.00",
    time: "2024-08-03",
  },
  {
    name: "INV002",

    totalAmount: "$150.00",
    time: "2024-08-03",
  },
  {
    name: "INV003",

    totalAmount: "$350.00",
    time: "2024-08-03",
  },
  {
    name: "INV004",

    totalAmount: "$450.00",
    time: "2024-08-03",
  },
  {
    name: "INV005",

    totalAmount: "$550.00",
    time: "2024-08-03",
  },
  {
    name: "INV006",

    totalAmount: "$200.00",
    time: "2024-08-03",
  },
  {
    name: "INV007",

    totalAmount: "$300.00",
    time: "2024-08-03",
  },
];

export function RecentSupports() {
  return (
    <Table>
      <TableCaption>A list of your recent Donation.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Name</TableHead>

          <TableHead>Amoutn</TableHead>
          <TableHead className="text-right w-[200px]">Time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Donation.map((name) => (
          <TableRow key={name.name}>
            <TableCell className="font-medium">{name.name}</TableCell>

            <TableCell>{name.totalAmount}</TableCell>
            <TableCell className="text-right">{name.time}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
