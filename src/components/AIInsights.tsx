import React from 'react';
import { Brain, TrendingUp, Users, MessageSquare } from 'lucide-react';

const AIInsights: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="ios-card p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-gray-900">Market Analysis</h3>
          <TrendingUp className="h-4 w-4 text-blue-600" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-500">Average Frontend Dev Salary</span>
            <span className="font-medium">$120,000</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-500">YoY Growth</span>
            <span className="font-medium text-green-600">+5.2%</span>
          </div>
        </div>
      </div>

      <div className="ios-card p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-gray-900">AI Recommendations</h3>
          <Brain className="h-4 w-4 text-blue-600" />
        </div>
        <div className="space-y-2">
          {[
            "Strong culture fit potential",
            "Technical skills match: 95%",
            "Similar to top performers"
          ].map((insight, i) => (
            <div key={i} className="text-xs text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
              {insight}
            </div>
          ))}
        </div>
      </div>

      <div className="ios-card p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-gray-900">Interview Questions</h3>
          <MessageSquare className="h-4 w-4 text-blue-600" />
        </div>
        <div className="space-y-2">
          {[
            "Describe your design process",
            "How do you handle feedback?",
            "Recent challenging project?"
          ].map((question, i) => (
            <div key={i} className="flex items-start space-x-2">
              <div className="h-4 w-4 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 text-xs">
                {i + 1}
              </div>
              <p className="text-xs text-gray-600">{question}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIInsights;