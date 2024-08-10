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
import { Button } from "../ui/button";

const Products = [
  {
    Product: "INV001",
    totalFeedback: 4.5,
    avgRating: 4.3,
    time: "2024-08-03",
  },
  {
    Product: "INV002",
    totalFeedback: 3.5,
    avgRating: 4.2,
    time: "2024-08-03",
  },
  {
    Product: "INV003",
    totalFeedback: 4.9,
    avgRating: 5,
    time: "2024-08-03",
  },
  {
    Product: "INV004",
    totalFeedback: 2.3,
    avgRating: 1,
    time: "2024-08-03",
  },
  {
    Product: "INV005",
    totalFeedback: 2.3,
    avgRating: 5,
    time: "2024-08-03",
  },
  {
    Product: "INV006",
    totalFeedback: 3.5,
    avgRating: 3.2,
    time: "2024-08-03",
  },
  {
    Product: "INV007",
    totalFeedback: 4.9,
    avgRating: 5,
    time: "2024-08-03",
  },
];

export function FormList() {
  return (
    <Table>
      <TableCaption>A list of your recent Feedback</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Products Name</TableHead>
          <TableHead>No. Of Feedbacks</TableHead>
          <TableHead>Avg Rating</TableHead>
          <TableHead className="text-center">Creation Time</TableHead>
          <TableHead className="text-center w-[100px]">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Products.map((Product) => (
          <TableRow key={Product.Product}>
            <TableCell className="font-medium">{Product.Product}</TableCell>
            <TableCell>{Product.totalFeedback}</TableCell>
            <TableCell>{Product.avgRating}</TableCell>
            <TableCell className="text-center">{Product.time}</TableCell>
            <TableCell className="text-right">
              <Button>Edit testimonial</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

// const Tags = ({ tags }: { avgRating: string[] }) => {
//   return (
//     <div className="flex gap-1 max-w-[100px]">
//       {tags.map((item, index) => {
//         return (
//           <span
//             className={`${item == "video" && "bg-blue-500"} ${
//               item == "text" && "bg-indigo-500"
//             }  ${
//               item == "image" && "bg-yellow-300"
//             } text-black rounded-2xl px-2`}
//             key={index}
//           >
//             {item}
//           </span>
//         );
//       })}
//     </div>
//   );
// };
