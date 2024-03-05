using System;
using System.Diagnostics;
using System.Collections.Generic;

class Program
{
    //Add some comment as example

    static void Main(string[] args)
    {
        int[] coinDenominationsList = { 1, 4, 7, 9, 16, 43 };
        int targetAmount = 33;

        var watch = Stopwatch.StartNew();
        var result = MinCoinsBottomUpMemoTable(coinDenominationsList, targetAmount);
        watch.Stop();

        Console.WriteLine("Min number of coins needed: " + result.Item1);
        foreach (var coinCount in result.Item2)
        {
            Console.WriteLine("Coin denomination: " + coinCount.Key + ", Count: " + coinCount.Value);
        }
        Console.WriteLine("Time taken: " + watch.ElapsedMilliseconds + " ms");
    }
    static Tuple<int, Dictionary<int, int>> MinCoinsBottomUpMemoTable(int[] coinDenominationsList, int targetAmount)
    {
        int numberOfDenominations = coinDenominationsList.Length;
        int[,] memoTbl = new int[targetAmount + 1, numberOfDenominations + 1];
        int[,] solutionTbl = new int[targetAmount + 1, numberOfDenominations + 1];
        Dictionary<int, int> coinsUsed = new Dictionary<int, int>();

        // Initialize coinsUsed dictionary with all denominations set to zero counts
        foreach (var denomination in coinDenominationsList)
        {
            coinsUsed[denomination] = 0;
        }

        for (int currentAmount = 1; currentAmount <= targetAmount; currentAmount++) //loop through the rows
        {
            memoTbl[currentAmount, 0] = 1000000; //base case. Having no numberofcoins yields an undesirable amount. Impossible situation. 

            for (int denominationIndex = 1; denominationIndex <= numberOfDenominations; denominationIndex++)  // loop through the columns
            {
                int currentDenomination = coinDenominationsList[denominationIndex - 1];

                if (currentAmount < currentDenomination)
                {
                    memoTbl[currentAmount, denominationIndex] = memoTbl[currentAmount, denominationIndex - 1];
                    solutionTbl[currentAmount, denominationIndex] = 0;
                }
                else
                {
                    int maxPossibleCoinsOfCurrentDenomination = currentAmount / currentDenomination; //pj = y/cj. Or rows_value/currentj

                    int minCoins = 1000000;
                    int bestCoinCount = -1;

                    for (int coinCount = 0; coinCount <= maxPossibleCoinsOfCurrentDenomination; coinCount++)
                    {
                        int totalCoins = coinCount + memoTbl[currentAmount - coinCount * currentDenomination, denominationIndex - 1];
                        if (totalCoins < minCoins)
                        {
                            minCoins = totalCoins;
                            bestCoinCount = coinCount;
                        }
                    }

                    memoTbl[currentAmount, denominationIndex] = minCoins;
                    solutionTbl[currentAmount, denominationIndex] = bestCoinCount;
                }
            }
        }

        int remainingAmount = targetAmount;
        int currentDenominationIndex = numberOfDenominations;
       

        while (remainingAmount > 0 && currentDenominationIndex >= 0)
        {
            int coinCountUsed = solutionTbl[remainingAmount, currentDenominationIndex];
            //if (!coinsUsed.ContainsKey(coinDenominationsList[currentDenominationIndex - 1]))
            //{
            //    coinsUsed[coinDenominationsList[currentDenominationIndex - 1]] = 0;
            //}
            coinsUsed[coinDenominationsList[currentDenominationIndex = 1]] += coinCountUsed;
            remainingAmount -= coinCountUsed * coinDenominationsList[currentDenominationIndex - 1];
            currentDenominationIndex--;

        }
        return new Tuple<int, Dictionary<int, int>>(memoTbl[targetAmount, numberOfDenominations], coinsUsed);

    }

}

