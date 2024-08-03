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

const Products = [
  {
    Product: "INV001",
    totalFeedback: 4.5,
    tags: ["video", "image"],
    time: "2024-08-03",
  },
  {
    Product: "INV002",
    totalFeedback: 3.5,
    tags: ["text"],
    time: "2024-08-03",
  },
  {
    Product: "INV003",
    totalFeedback: 4.9,
    tags: ["text", "video", "image"],
    time: "2024-08-03",
  },
  {
    Product: "INV004",
    totalFeedback: 2.3,
    tags: ["text", "video"],
    time: "2024-08-03",
  },
  {
    Product: "INV005",
    totalFeedback: 2.3,
    tags: ["text", "video", "image"],
    time: "2024-08-03",
  },
  {
    Product: "INV006",
    totalFeedback: 3.5,
    tags: ["text", "image"],
    time: "2024-08-03",
  },
  {
    Product: "INV007",
    totalFeedback: 4.9,
    tags: ["text", "video", "image"],
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
          <TableHead>Tags</TableHead>
          <TableHead className="text-right">Creation Time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Products.map((Product) => (
          <TableRow key={Product.Product}>
            <TableCell className="font-medium">{Product.Product}</TableCell>
            <TableCell>{Product.totalFeedback}</TableCell>
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
