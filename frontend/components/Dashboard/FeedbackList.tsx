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
import { spawn } from "child_process";

const Products = [
  {
    Product: "INV001",
    rating: 4.5,
    tags: ["video", "image"],
    time: "2024-08-03",
  },
  {
    Product: "INV002",
    rating: 3.5,
    tags: ["text"],
    time: "2024-08-03",
  },
  {
    Product: "INV003",
    rating: 4.9,
    tags: ["text", "video", "image"],
    time: "2024-08-03",
  },
  {
    Product: "INV004",
    rating: 2.3,
    tags: ["text", "video"],
    time: "2024-08-03",
  },
  {
    Product: "INV005",
    rating: 2.3,
    tags: ["text", "video", "image"],
    time: "2024-08-03",
  },
  {
    Product: "INV006",
    rating: 3.5,
    tags: ["text", "image"],
    time: "2024-08-03",
  },
  {
    Product: "INV007",
    rating: 4.9,
    tags: ["text", "video", "image"],
    time: "2024-08-03",
  },
];

export function FeedbackList() {
  return (
    <Table>
      <TableCaption>A list of your recent Feedback</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Product</TableHead>
          <TableHead>Rating</TableHead>
          <TableHead>Tags</TableHead>
          <TableHead className="text-right">Time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Products.map((Product) => (
          <TableRow
            key={Product.Product}
            className={`${Product.rating < 2.5 && "bg-red-200"} ${
              Product.rating > 2.5 && Product.rating < 4 && "bg-orange-200"
            } ${Product.rating > 4 && "bg-green-200"} text-black`}
          >
            <TableCell className="font-medium">{Product.Product}</TableCell>
            <TableCell>{Product.rating}</TableCell>
            <TableCell>
              <Tags tags={Product.tags} />
            </TableCell>
            <TableCell className="text-right">{Product.time}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex gap-1 max-w-[100px]">
      {tags.map((item, index) => {
        return (
          <span
            className={`${item == "video" && "bg-blue-500"} ${
              item == "text" && "bg-indigo-500"
            }  ${
              item == "image" && "bg-yellow-300"
            } text-black rounded-2xl px-2`}
            key={index}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
};
