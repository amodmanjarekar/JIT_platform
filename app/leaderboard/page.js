/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9TzMP5gn6u2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function LeaderboardPage() {
  const player_list = [
    "John Doe",
    "Jane Smith",
    "Bob Johnson",
    "Alice Williams",
    "Tom Davis",
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 md:px-6">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold">Top Players Leaderboard</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Check out the current rankings of the best players in the game.
        </p>
      </div>
      <div className="overflow-x-auto mt-8">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="px-4 py-3 text-left font-medium text-gray-700 dark:text-gray-300">
                Rank
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-700 dark:text-gray-300">
                Player
              </th>
              <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300">
                Score
              </th>
            </tr>
          </thead>
          <tbody>
            {player_list.map((player_name, index) => {
              return (
                <>
                  <tr className={index % 2 != 0 ? "bg-gray-100" : "bg-white"}>
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">
                      {index + 1}
                    </td>
                    <td className="px-4 py-3 text-gray-900 dark:text-gray-100">
                      {player_name}
                    </td>
                    <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">
                      10,987
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
