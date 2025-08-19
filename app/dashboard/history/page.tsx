"use client";
import { useEffect, useState } from "react";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";
import { Check, Copy, CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface HISTORY{
  id:Number,
  formData:string,
  aiResponse: string,
  templateSlug:string,
  createdBy:string,
  createdAt:string,
}

export default function HistoryPage() {
  const [historyData, setHistoryData] = useState<any[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const { user } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      if (!user?.primaryEmailAddress?.emailAddress) return;

      try {
        const result = await db
          .select()
          .from(AIOutput)
          .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress))
          .orderBy(AIOutput.createdAt);

        setHistoryData(result);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };

    fetchData();
  }, [user]);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);

    // Change icon back after 2 seconds
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  return (
    <div className="bg-white m-3 p-2">
      <h3 className="text-2xl font-bold text-purple-600">📜 History</h3>
      <p className="text-gray-500">Your Previously Generated Ai Content</p>

      {historyData.length === 0 ? (
        <p className="text-gray-500">No history found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 shadow-lg rounded-lg">
            <thead className="bg-gray-200 text-blue-900">
              <tr>
                <th className="p-3 text-left">Template</th>
                <th className="p-3 text-left">Form-Data</th>
                <th className="p-3 text-left">Ai-Response</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Words</th>
                <th className="p-3 text-left">Copy</th>
              </tr>
            </thead>
            <tbody>
              {historyData.map((item, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-purple-50 transition"
                >
                  <td className="p-3 font-semibold text-md text-gray-700 ">
                    {item.templateSlug}
                  </td>

                   <td className="p-3 text-sm text-gray-600">{item.formData}</td>

                  <td className="p-3 text-sm text-gray-800 truncate max-w-xs">
                    {item.aiResponse}
                  </td>
                  <td className="p-3 text-sm text-gray-600 ">{item.createdAt}</td>

                  <td className="p-3 text-sm text-gray-800 truncate max-w-xs">
                    <span className="text-gray-500 ml-2">
                      ({item.aiResponse?.trim().split(/\s+/).length})
                    </span>
                  </td>
                  
                  <td className="p-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(item.aiResponse, index)}
                      className="flex items-center gap-2"
                    >
                      {copiedIndex === index ? (
                        <>
                          <Check size={16} className="text-green-600" />
                        </>
                      ) : (
                        <>
                          <Copy size={16} />
                        </>
                      )}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
