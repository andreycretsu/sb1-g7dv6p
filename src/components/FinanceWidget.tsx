import React from 'react';
import { CreditCard, ArrowUpRight, ArrowDownRight, DollarSign, TrendingUp } from 'lucide-react';

const FinanceWidget: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-900">Recruitment Budget</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add Funds
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">Total Budget</span>
            <DollarSign className="h-5 w-5 text-green-500" />
          </div>
          <p className="mt-2 text-2xl font-semibold">$250,000</p>
          <span className="text-sm text-green-600 flex items-center mt-2">
            <TrendingUp className="h-4 w-4 mr-1" />
            +12.5% from last month
          </span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">Spent</span>
            <ArrowUpRight className="h-5 w-5 text-red-500" />
          </div>
          <p className="mt-2 text-2xl font-semibold">$85,000</p>
          <div className="mt-2 bg-gray-200 h-2 rounded-full">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '34%' }}></div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">Available</span>
            <ArrowDownRight className="h-5 w-5 text-green-500" />
          </div>
          <p className="mt-2 text-2xl font-semibold">$165,000</p>
          <div className="mt-2 bg-gray-200 h-2 rounded-full">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '66%' }}></div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">Recent Transactions</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {[
            {
              name: 'LinkedIn Premium Subscription',
              amount: -299.99,
              date: 'Mar 15, 2024',
              type: 'Subscription'
            },
            {
              name: 'Candidate Referral Bonus',
              amount: -1000.00,
              date: 'Mar 14, 2024',
              type: 'Bonus'
            },
            {
              name: 'Job Board Posting',
              amount: -199.99,
              date: 'Mar 12, 2024',
              type: 'Marketing'
            }
          ].map((transaction, i) => (
            <div key={i} className="p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{transaction.name}</p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-red-600">${Math.abs(transaction.amount)}</p>
                  <p className="text-sm text-gray-500">{transaction.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinanceWidget;