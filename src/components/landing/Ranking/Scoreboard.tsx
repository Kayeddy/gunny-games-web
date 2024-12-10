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
import CircularProgress from "@mui/material/CircularProgress";

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
  const assetId = 2247034585;

  const indexerClient = useMemo(
    () => new algosdk.Indexer("", server, 443),
    [server]
  );

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [data, setData] = useState<ScoreboardItem[]>([]);
  const [filteredData, setFilteredData] = useState<ScoreboardItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // To handle loading state
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 5;
  const [focused, setFocused] = useState<boolean>(false);
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
      setLoading(true); // Start loading
      try {
        const assetBalances = await indexerClient
          .lookupAssetBalances(assetId)
          .currencyLessThan(100000)
          .currencyGreaterThan(0)
          // .limit(100)
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
        setFilteredData(leaderboardData); // Initially set filteredData to full data
      } catch (error) {
        console.error("Error fetching data from Algorand:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchDataFromAPI();
  }, [indexerClient, assetId]);

  useEffect(() => {
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      const filtered = data.filter((item) =>
        item.address.toLowerCase().includes(term)
      );
      setFilteredData(filtered); // Update filtered data based on search term
      setPage(1); // Reset to page 1 after filtering
    } else {
      setFilteredData(data); // Reset to full data if no search term
    }
  }, [searchTerm, data]);

  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const highlightMatch = (address: string, searchTerm: string) => {
    const lowerAddress = address.toLowerCase();
    const lowerSearchTerm = searchTerm.toLowerCase();
    const index = lowerAddress.indexOf(lowerSearchTerm);
    if (index === -1 || !searchTerm) {
      return <span>{address}</span>;
    }
    return (
      <span>
        {address.substring(0, index)}
        <span className="bg-yellow-300 text-black">
          {address.substring(index, index + searchTerm.length)}
        </span>
        {address.substring(index + searchTerm.length)}
      </span>
    );
  };

  return (
    <div className="relative w-[90%] overflow-x-auto overflow-y-hidden shadow-md sm:rounded-lg lg:w-full">
      <div className="mb-4 flex w-full items-center justify-center lg:justify-start">
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

      {loading ? (
        <div className="flex items-center justify-center">
          <CircularProgress color="secondary" />
        </div>
      ) : (
        <>
          <Table className="relative mt-4 text-white">
            <TableCaption>{searchTerm ? "Search Results" : "Top Scores"}</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Position</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentItems.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3} className="text-white">
                    There is no matching wallet
                  </TableCell>
                </TableRow>
              ) : (
                <>
                  {currentItems.map((item) => (
                    <TableRow
                      key={item.position}
                      className={`border-b border-gray-700 font-sen ${
                        item.position === 1
                          ? "bg-[#5c5be5] text-white"
                          : item.position % 2 === 0
                          ? "bg-gray-800"
                          : "bg-gray-700"
                      }`}
                    >
                      <TableCell className="text-xl font-bold">
                        {item.position}
                      </TableCell>
                      <TableCell>
                        {highlightMatch(item.address, searchTerm)}
                      </TableCell>
                      <TableCell className="font-bold">{item.score}</TableCell>
                    </TableRow>
                  ))}
                </>
              )}
            </TableBody>
          </Table>

          {filteredData.length > itemsPerPage && (
            <Stack spacing={2} className="flex items-center justify-center p-2">
              <Pagination
                count={Math.ceil(filteredData.length / itemsPerPage)}
                color="secondary"
                page={page}
                onChange={handlePageChange}
                sx={{
                  "& .MuiPaginationItem-root": {
                    color: "white",
                    cursor: "pointer", // Ensure clickability
                  },
                }}
              />
            </Stack>
          )}
        </>
      )}
    </div>
  );
}
