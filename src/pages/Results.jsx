
import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend 
} from "recharts";
import { ChartBar, ChartPie, Database } from 'lucide-react';

const Results = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [totalVotes, setTotalVotes] = useState(0);
  const [votesData, setVotesData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulated vote data - in a real app this would come from an API
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const data = [
        { name: "Candidate A", party: "Progressive Party", votes: 156, color: "#7E69AB" },
        { name: "Candidate B", party: "Conservative Union", votes: 142, color: "#0EA5E9" },
        { name: "Candidate C", party: "Central Alliance", votes: 104, color: "#14b8a6" },
        { name: "Candidate D", party: "Reform Movement", votes: 89, color: "#6366f1" },
      ];
      
      setVotesData(data);
      setTotalVotes(data.reduce((sum, candidate) => sum + candidate.votes, 0));
      setLoading(false);
    }, 1000);
  }, []);

  // Calculate percentage for each candidate
  const dataWithPercentage = votesData.map(candidate => ({
    ...candidate,
    percentage: ((candidate.votes / totalVotes) * 100).toFixed(1)
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar userAuthenticated={true} />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Live Voting Results</h1>
            <p className="mt-2 text-gray-600">
              Real-time, transparent election results secured by blockchain technology
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-purple"></div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Total Votes Cast</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{totalVotes}</div>
                    <div className="text-xs text-gray-500 mt-1">Secured by blockchain technology</div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Leading Candidate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{votesData[0]?.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{votesData[0]?.votes} votes ({dataWithPercentage[0]?.percentage}%)</div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Last Block</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm font-medium truncate">0x{Math.random().toString(16).substring(2, 10)}</div>
                    <div className="text-xs text-gray-500 mt-1">Last updated: {new Date().toLocaleTimeString()}</div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <div className="flex flex-wrap border-b">
                  <button
                    className={`px-4 py-2 font-medium text-sm mr-4 ${
                      activeTab === 'overview' 
                        ? 'text-brand-purple border-b-2 border-brand-purple' 
                        : 'text-gray-600 hover:text-brand-purple'
                    }`}
                    onClick={() => setActiveTab('overview')}
                  >
                    <div className="flex items-center">
                      <ChartBar className="mr-2 h-4 w-4" />
                      Overview
                    </div>
                  </button>
                  <button
                    className={`px-4 py-2 font-medium text-sm mr-4 ${
                      activeTab === 'distribution' 
                        ? 'text-brand-purple border-b-2 border-brand-purple' 
                        : 'text-gray-600 hover:text-brand-purple'
                    }`}
                    onClick={() => setActiveTab('distribution')}
                  >
                    <div className="flex items-center">
                      <ChartPie className="mr-2 h-4 w-4" />
                      Distribution
                    </div>
                  </button>
                  <button
                    className={`px-4 py-2 font-medium text-sm ${
                      activeTab === 'blockchain' 
                        ? 'text-brand-purple border-b-2 border-brand-purple' 
                        : 'text-gray-600 hover:text-brand-purple'
                    }`}
                    onClick={() => setActiveTab('blockchain')}
                  >
                    <div className="flex items-center">
                      <Database className="mr-2 h-4 w-4" />
                      Blockchain Data
                    </div>
                  </button>
                </div>

                <div className="pt-6">
                  {activeTab === 'overview' && (
                    <div>
                      <h3 className="font-medium text-lg mb-4">Vote Distribution by Candidate</h3>
                      <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={dataWithPercentage}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip formatter={(value) => [`${value} votes`, 'Votes']} />
                            <Bar dataKey="votes" name="Votes" radius={[4, 4, 0, 0]}>
                              {dataWithPercentage.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>

                      <div className="mt-6">
                        <h4 className="font-medium text-gray-900 mb-2">Detailed Results</h4>
                        <div className="overflow-x-auto">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Rank
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Candidate
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Party
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Votes
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Percentage
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {dataWithPercentage.map((candidate, index) => (
                                <tr key={index} className={index === 0 ? "bg-brand-purple/5" : ""}>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {index + 1}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                      <div className="h-3 w-3 rounded-full mr-2" style={{ backgroundColor: candidate.color }}></div>
                                      <div className="text-sm font-medium text-gray-900">{candidate.name}</div>
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {candidate.party}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                                    {candidate.votes}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                                    {candidate.percentage}%
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'distribution' && (
                    <div>
                      <h3 className="font-medium text-lg mb-4">Vote Distribution Percentage</h3>
                      <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={dataWithPercentage}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="votes"
                              nameKey="name"
                              label={({ name, percentage }) => `${name}: ${percentage}%`}
                            >
                              {dataWithPercentage.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                            <Tooltip formatter={(value, name, props) => [`${value} votes (${props.payload.percentage}%)`, props.payload.name]} />
                            <Legend />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  )}

                  {activeTab === 'blockchain' && (
                    <div>
                      <h3 className="font-medium text-lg mb-4">Recent Blockchain Transactions</h3>
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Block
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Transaction Hash
                              </th>
                              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Timestamp
                              </th>
                              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {[...Array(5)].map((_, index) => (
                              <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-500">
                                  #{(12345 - index).toString().padStart(6, '0')}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-500">
                                  0x{Math.random().toString(16).substring(2, 34)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                                  {new Date(Date.now() - index * 60000).toLocaleTimeString()}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    Confirmed
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-brand-purple/5 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Database className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Blockchain Verification</h3>
                    <p className="mt-1 text-gray-600 text-sm">
                      All voting data is securely recorded on our blockchain network. 
                      Each vote is cryptographically sealed and cannot be tampered with, 
                      ensuring complete transparency and security in the electoral process.
                    </p>
                    <a 
                      href="#blockchain-explorer" 
                      className="mt-2 inline-flex items-center text-brand-purple text-sm font-medium hover:underline"
                    >
                      View in blockchain explorer
                      <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Results;
