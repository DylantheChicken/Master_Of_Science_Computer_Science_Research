using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.NetworkInformation;

class Program
{
    static List<int> ConvertToBinary(int n)
    {
        if (n < 0) throw new ArgumentException("Number must be non-negative");
        var binary = new List<int>();
        if (n == 0) return new List<int> { 0 };

        while (n > 0)
        {
            binary.Add(n % 2);
            n /= 2;
        }
        return binary;
    }

    static int ConvertToDecimal(List<int> binary)
    {
        int sum = 0;
        int factor = 1;
        foreach (int bit in binary)
        {
            sum += bit * factor;
            factor *= 2;
        }
        return sum;
    }

    public static (int, int) Addition_Of_Binary_Bits_Function(int bitArrayA, int bitArrayB, int carryInBit)
    {
        if (bitArrayA == 0)
        {
            if (bitArrayB == 0)
            {
                return (carryInBit, 0);
            }
            else // bitA = 0, bitB = 1
            {
                return (1 - carryInBit, carryInBit);
            }
        }
        else //if vice versa, bitA=1
        {
            if (bitArrayB==0)
            {
                return (1 - carryInBit, carryInBit);
            }
            else //if both bits are 1
            {
                return (carryInBit, 1);
            }
        }
    }

    public static List<int> Addition_Of_Arrays_Function(List<int> a, List<int> b)
    {
        int lengthOfA = a.Count, lengthOfB = b.Count;
        int carry_Over_Bit = 0;
        var NewArray = new List<int>();
        for (int i = 0; i < Math.Max(lengthOfA, lengthOfB); i++)
        {
            int subarray_Of_A = i < lengthOfA ? a[i] : 0;
            int subarray_Of_B = i < lengthOfB ? b[i] : 0;
            var (subarray_Of_C, new_Carry_Over_Bit) = Addition_Of_Binary_Bits_Function(subarray_Of_A, subarray_Of_B, carry_Over_Bit);
            carry_Over_Bit = new_Carry_Over_Bit;
            NewArray.Add(subarray_Of_C);
        }
        if (carry_Over_Bit == 1)
        {
            NewArray.Add(carry_Over_Bit);
        }
        return NewArray;
    }

    public static List<int> IntToBinaryList(int number)
    {
        return Convert.ToString(number, 2).Select(digit => int.Parse(digit.ToString())).ToList();
    }

    public static List<int> Pad(List<int> binaryNumber, int pad)
    {
        return Enumerable.Repeat(0, pad).Concat(binaryNumber).ToList();
    }

    public static List<int> Subtract(List<int> binaryNum1, List<int> binaryNum2)
    {
        // Stores the length of the first binary number list.
        int lengthNum1 = binaryNum1.Count;

        // Calculates the length difference between the two binary number lists.
        int lengthComplementNum = lengthNum1 - binaryNum2.Count;

        // Creates the complement of the second binary number by inverting each bit and
        // padding the result to the length of the first binary number.
        var binaryComplement = binaryNum2.Select(bit => 1 - bit)
                                          .Concat(Enumerable.Repeat(1, lengthComplementNum))
                                          .ToList();

        // Adds 1 to the binary complement to complete the two's complement process.
        var binaryComplementIncremented = Addition_Of_Arrays_Function(binaryComplement, new List<int> { 1 });

        // Adds the first binary number and the two's complement of the second binary number.
        // This effectively performs the subtraction.
        var result = Addition_Of_Arrays_Function(binaryNum1, binaryComplementIncremented);

        // Returns the result truncated to the length of the first binary number.
        // This handles any extra carry bit that might have been produced in the addition.
        return result.Take(lengthNum1).ToList();
    }

    public static List<int> Grade_School_Multiplication_Function(List<int> a, List<int> b)
    {
        int lengthOfA = a.Count, lengthOfB = b.Count;
        var tmp = new List<int>(a);
        var resultant = new List<int> { 0 };

        foreach (var bit in b) 
        { 
            if (bit == 1)
            {
                resultant = Addition_Of_Arrays_Function(resultant, tmp);
            }
            tmp.Insert(0, 0);
        }
        return resultant;
    }

    public static List<int> Karatsuba_Multiply_Function(List<int> a, List<int> b)
    {
        int lengthOfA = a.Count, lengthOfB = b.Count;
        if (lengthOfA <= 2 || lengthOfB <= 2)
        {
            return Grade_School_Multiplication_Function(a, b);
        }
        else
        {
            int mid1 = lengthOfA / 2;
            var a1 = a.Take(mid1).ToList();
            var a2 = a.Take(mid1).ToList();
            var b1 = b.Take(mid1).ToList();
            var b2 = b.Take(mid1).ToList();

            var r1 = Karatsuba_Multiply_Function(a1, a2);//r1 (most significant bits)
            var r2 = Karatsuba_Multiply_Function(a2, b2);//r2 (least significant bits)

            //r3 is the product of (a1 + a2) and (b1 + b2). We first add a1 to a2 and b1 to b2, then multiply the sums.
            var r3 = Karatsuba_Multiply_Function(Addition_Of_Arrays_Function(a1, a2), Addition_Of_Arrays_Function(b1, b2));

            //We subtract r1 and r2 from r3 to get r4. This is based on the principle
            //that (a1 + a2) * (b1 + b2) - a1*b1 - a2*b2 = a1*b2 + a2*b1.
            var r4a = Subtract(r3, r1);
            var r4 = Subtract(r4a, r2);

            //r2 is padded with zeros (equivalent to multiplying by 2^(2*mid1)) to align it with the most significant bits
            //, and r4 is padded with zeros(equivalent to multiplying by 2 ^ mid1) to align it with the middle bits.
            var s1 = Pad(r2, 2 * mid1);
            var s2 = Pad(r4, mid1);


            var s3 = Addition_Of_Arrays_Function(s1, s2); //s3 (middle bits)
            //Finally, we add r1 to s3. This completes the Karatsuba multiplication by combining all parts: 
            //r1 (most significant bits), s3 (middle bits), and r2 (least significant bits)


            return Addition_Of_Arrays_Function(s3, r1);
        }
    }

        static void Main()
    {
        var binary = ConvertToBinary(10);
        Console.WriteLine("[" + string.Join(",", binary) + "]");
        int decimalNumber = ConvertToDecimal(binary);
        Console.WriteLine(decimalNumber);
    }
}