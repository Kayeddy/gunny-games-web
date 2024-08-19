"use client";

import React, { useEffect, useState, useMemo } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import algosdk from "algosdk";
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

type AssetBalance = {
  address: string;
  amount: number;
};

export function Scoreboard() {
  const server = "https://mainnet-idx.algonode.cloud";
  const assetId = 1259645348;

  const indexerClient = useMemo(
    () => new algosdk.Indexer("", server, 443),
    [server]
  );

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [data, setData] = useState<ScoreboardItem[]>([]);
  const [page, setPage] = useState<number>(1);
  const [focused, setFocused] = useState<boolean>(false);
  const itemsPerPage = 5;
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const assetBalances = await indexerClient
          .lookupAssetBalances(assetId)
          .currencyLessThan(100000)
          .currencyGreaterThan(0)
          .limit(100)
          .do();

        const leaderboardData: ScoreboardItem[] = (
          assetBalances.balances as AssetBalance[]
        )
          .sort((a: AssetBalance, b: AssetBalance) => b.amount - a.amount)
          .map((balance: AssetBalance, index: number) => ({
            position: index + 1,
            address: balance.address,
            score: balance.amount,
          }));

        setData(leaderboardData);
      } catch (error) {
        console.error("Error fetching data from Algorand:", error);
      }
    };

    fetchDataFromAPI();
  }, [indexerClient, assetId]);

  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const filteredItems = currentItems
    .filter((item) =>
      item.address.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((item, index) => ({
      ...item,
      position: indexOfFirstItem + index + 1,
    }));

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <div className="relative w-full overflow-x-auto overflow-y-hidden shadow-md sm:rounded-lg">
      <div className="flex items-center justify-center w-full mb-4 lg:justify-start">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`p-4 border w-full rounded-md text-gray-800 focus:outline-none ${
            focused ? "border-[#5E31B8]" : "border-gray-300"
          }`}
          placeholder="Search your Wallet"
        />
      </div>
      <Table className="mt-4 text-white">
        <TableCaption>Top Scores</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Position</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Score</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredItems.length === 0 ? (
            <TableRow>
              <TableCell colSpan={3} className="text-white">
                There is no matching wallet
              </TableCell>
            </TableRow>
          ) : (
            filteredItems.map((item) => (
              <TableRow
                key={item.position}
                className="bg-gray-800 border-b border-gray-700 hover:bg-gray-600"
              >
                <TableCell>{item.position}</TableCell>
                <TableCell>
                  {isMobile
                    ? `${item.address.substring(0, 16)}...`
                    : item.address}
                </TableCell>
                <TableCell>{item.score}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      <Stack spacing={2} className="flex items-center justify-center p-2">
        <Pagination
          count={Math.ceil(data.length / itemsPerPage)}
          color="secondary"
          page={page}
          onChange={handlePageChange}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "white", // Set the color of the pagination numbers to white
            },
          }}
        />
      </Stack>
    </div>
  );
}
