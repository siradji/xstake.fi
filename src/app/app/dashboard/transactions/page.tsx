'use client';
import { Button } from "@/app/components/ui/buttons";

import { ArrowLeft } from "lucide-react";
import { Transactions } from "../../components/dashboard/recent-transactions";

const TransactionsPage = () => {
  return (
    <div className="bg-primary-neutral-300 min-h-screen flex flex-col justify-center">
      <div className="px-4 md:px-8 py-16 mx-auto space-y-8">
        <div className="flex items-start justify-start"><Button size="sm" variant="secondary" onClick={() => window.location.href = '../dashboard'}> <ArrowLeft size={16} /> Back</Button></div>
        <div>
          <Transactions/>
        </div>
        
      </div>
    </div>
  )
};

export default TransactionsPage;