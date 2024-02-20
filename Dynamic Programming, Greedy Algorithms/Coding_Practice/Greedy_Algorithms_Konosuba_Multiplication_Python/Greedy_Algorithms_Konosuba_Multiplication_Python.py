
#Functions to convert each number type, and reverse arrays to store least signaficant bit, and most signaficant bit in the correct order/re-order the array to provide correct expectation. 

def convert_to_binary(n: int) -> list:
    """
    Convert a non-negative integer to a list representing its binary representation.
    """
    assert n >= 0
    binary_digits = []
    while n > 0:
        binary_digits.insert(0, n % 2)  # Insert at the beginning instead of appending to avoid reverse opperations. 
        n //= 2
    return binary_digits or [0]

def convert_to_decimal(binary_list: list, is_reversed: bool = False) -> int:
    """
    Convert a binary representation (as a list of bits) to a decimal number.
    """
    if is_reversed:
        binary_list.reverse()
    sum = 0
    factor = 1
    for bit in binary_list:
        sum += bit * factor
        factor *= 2
    return sum

print(convert_to_binary(13))          # Output: [1, 1, 0, 1]. If appended and not inserted, without reverse option the output would be [1, 0, 1, 1]
print(convert_to_decimal([1, 1, 0, 1], is_reversed=True))  # Output: 13


def bitwise_add(bit_array_a, bit_array_b, carry_in_bit):
    if bit_array_a == 0:
        if bit_array_b == 0:
            return (carry_in_bit,0)
        else:# bit_a= 0, bit_b = 1
            return (1-carry_in_bit,carry_in_bit)
    else:#if vice versa, bit_a =1, bit_b=0
        if bit_array_b == 0:
            return (1 - carry_in_bit, carry_in_bit)
        else:#if both bits are 1
            return (carry_in_bit,1)

def add(a, b):
    # add bit strings a, b
    (n, m) = len(a), len(b)
    carry = 0
    c = []
    for i in range(max(m,n)):
        ai = a[i] if i < n else 0
        bi = b[i] if i < m else 0
        (ci, carry) = bitwise_add(ai, bi, carry)
        c.append(ci)
    if carry == 1:
        c.append(carry)
    return c

def int_to_binary_list(number):
    return [int(digit) for digit in bin(number)[2:]]

binary_num1 = int_to_binary_list(5)
binary_num2 = int_to_binary_list(5)
resulFromAdd = add(binary_num1, binary_num2)
resulFromAdd.reverse()
print(resulFromAdd)

def pad(binary_number, pad):
    """
    Pad a binary number with a specified number of leading zeros.
    """
    return [0] * pad + binary_number

def subtract(binary_num1, binary_num2):
    """
    Subtract binary_num2 from binary_num1 using two's complement.

    The two's complement method involves inverting the bits of binary_num2,
    adding 1 to it, and then adding the result to binary_num1.
    """
    length_num1 = len(binary_num1)
    length_complement_num = length_num1 - len(binary_num2)
    # Invert the bits of binary_num2 and pad the result with 1s to make
    # its length equal to binary_num1. This creates the two's complement.
    binary_complement = [1 - bit for bit in binary_num2] + [1] * length_complement_num
    # Add 1 to the two's complement to complete the two's complement process.
    binary_complement_incremented = add(binary_complement, [1])
    # Add binary_num1 and the two's complement of binary_num2.
    # This effectively performs the subtraction.
    result = add(binary_num1, binary_complement_incremented)
    # Return the result truncated to the length of binary_num1.
    # This handles any extra carry bit that might have been produced in the addition.
    return result[:length_num1]



print(subtract([1,1,1],[1])) # should be [0, 1, 1]
print(subtract([1,0,1], [0, 1])) # should be [1, 1, 0]
print(subtract([0, 0, 0, 1], [1, 1])) # should be [1, 0, 1, 0]
print(subtract([0, 1, 0, 1], [1, 0, 0, 1])) # should be [1, 0, 0, 0]
print(subtract([0, 1, 0, 1, 1, 1, 0, 1],[0]))

def grade_school_multiply(a, b):
    n, m = len(a), len(b)
    tmp = a
    res = [0]
    for bit in b:
        if bit == 1:
            res = add(res, tmp)
        tmp = [0]+tmp # shift tmp
    return res

def karatsuba_multiply(a,b):
    (length_num_a, length_num_b) = len(a), len(b)
    if length_num_a <= 2 or length_num_b <= 2:
        return grade_school_multiply(a,b) #if 2 numbers have 2 digits each, the grade school multiplication is faster than karatsuba
    else:
        mid1 = length_num_a//2
        a1 = a[0:mid1]
        a2 = a[mid1:]
        b1 = b[0:mid1]
        b2 = b[mid1:]
        # [a] = 2^{mid1} * [a2] + [a1]
        # [b] = 2^{mid1} * [b2] + [b1]
        # [a]* [b] = 2^{2*mid1} ([a2]*[b2]) + 2^mid1 ([a2]*[b1] + [a2]*[b1]) + [a1]*[b1]

        # 3 recursive calls to karatsuba_multiply
        r1 = karatsuba_multiply(a1, b1)
        r2 = karatsuba_multiply(a2, b2)
        r3 = karatsuba_multiply(add(a1, a2), add(b1, b2))
        # Do subtraction
        r4a = subtract(r3, r1)
        r4 = subtract(r4a, r2)

        # Do paddding
        s1 = pad(r2, 2*mid1)
        s2 = pad(r4, mid1)
        s3 = add(s1, s2)
        return add(s3, r1)

print(karatsuba_multiply([0, 0, 0, 1], [1, 0, 1])) # should be 0, 0, 0, 1, 0, 1
print(karatsuba_multiply([0, 0, 1], [1, 0, 1])) # should be 0, 0, 1, 0 , 1
    