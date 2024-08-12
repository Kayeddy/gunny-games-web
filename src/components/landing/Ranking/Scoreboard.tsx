import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type ScoreboardItem = {
  position: number;
  address: string;
  score: number;
  [key: string]: any; // Allows for additional fields
};

const scoreboardData: ScoreboardItem[] = [
  {
    position: 1,
    address: "123 Main St, Springfield",
    score: 95,
  },
  {
    position: 2,
    address: "456 Elm St, Shelbyville",
    score: 88,
  },
  {
    position: 3,
    address: "789 Oak St, Ogdenville",
    score: 76,
  },
  {
    position: 4,
    address: "101 Maple St, Capital City",
    score: 89,
  },
];

export function Scoreboard({
  data = scoreboardData,
}: {
  data?: ScoreboardItem[];
}) {
  return (
    <Table className="text-white">
      <TableCaption>Top Scores</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Position</TableHead>
          <TableHead>Address</TableHead>
          <TableHead>Score</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.position}</TableCell>
            <TableCell>{item.address}</TableCell>
            <TableCell>{item.score}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
