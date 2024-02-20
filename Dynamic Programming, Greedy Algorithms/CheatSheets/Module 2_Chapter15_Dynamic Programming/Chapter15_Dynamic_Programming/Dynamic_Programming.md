# Module 2_Chapter15_Dynamic Programming

Module 2\_Chapter15\_Dynamic Programming

Dynamic programming is a method for solving complex problems by breaking them down into simpler subproblems. It is similar to the divide-and-conquer method, but is used when these subproblems overlap, sharing smaller subproblems. Unlike divide-and-conquer, dynamic programming avoids redundant work by solving each smaller subproblem just once and storing the results in a table.

This approach is particularly useful for optimization problems, where the goal is to find the best solution among many possible ones. An optimal solution is one that achieves the best possible outcome, be it minimum or maximum, and there might be multiple such solutions.

The development of a dynamic programming solution typically follows four steps:

1. Characterizing the structure of an optimal solution.

1) Recursively defining the value of an optimal solution.

1. Computing the value of an optimal solution, usually in a bottom-up manner.

1) Constructing an optimal solution from the computed values.

In some cases, only the value of the optimal solution is needed, not the solution itself, allowing the fourth step to be skipped. However, if the actual solution is required, additional information might be stored during the third step to facilitate its construction.



## The Rod Cutting Problem

The rod-cutting problem in dynamic programming is a classic example used to illustrate the application of this technique. The problem involves cutting steel rods into shorter lengths to maximize revenue. Each rod length has a predefined selling price, and the objective is to determine the maximum revenue obtainable by cutting and selling the pieces of a rod of length $n$.

Given a rod of length $n$ inches and a price table $p\_i$ for rod lengths $i = 1, 2, \ldots, n$, the goal is to find the maximum revenue $r\_n$. An interesting aspect of this problem is that sometimes the optimal solution may require no cutting at all, especially if the price $p\_n$ for a rod of full length $n$ is high enough.

For instance, consider a rod of length 4 inches. If cutting the rod into two 2-inch pieces yields a total revenue of $p\_2 + p\_2 = 5 + 5 = 10$, and this is the highest possible revenue, then this approach is considered optimal.

The number of ways to cut a rod of length $n$ is $2^{n-1}$, representing the binary choice of cutting or not cutting at each inch mark. The revenue $r\_n$ for a rod of length $n$ can be computed using the formula:

$$ r\_n = \max(p\_n, r\_1 + r\_{n-1}, r\_2 + r\_{n-2}, \ldots, r\_{n-1} + r\_1) $$

Here, $p\_n$ represents the revenue from not cutting the rod at all. The other terms represent the maximum revenue obtained by cutting the rod into two pieces of lengths $i$ and $n-i$ and then optimally cutting these pieces further.

This problem demonstrates the concept of optimal substructure, a key characteristic of problems suitable for dynamic programming. Optimal solutions to the overall problem incorporate optimal solutions to smaller subproblems, which can be solved independently. The approach involves considering every possible first cut of length $i$, followed by the optimal arrangement of the remaining length $n-i$.

In summary, the rod-cutting problem showcases how dynamic programming efficiently solves optimization problems by breaking them down into simpler, overlapping subproblems and building up solutions from these subproblems.



### Recursive Top-Down Implementation


The recursive top-down implementation of the rod-cutting problem is an approach that directly follows the dynamic programming principle. The procedure, named \`CUT-ROD\`, takes an array \`p\[1..n]\` of prices and an integer \`n\` as input, returning the maximum revenue possible for a rod of length \`n\`.

The implementation is straightforward:

```Plain&#x20;Text
1 if n == 0
2     return 0
3 q = -∞
4 for i = 1 to n
5     q = max(q, p[i] + CUT-ROD(p, n - i))
6 return q
```

If $n$ is $0$, the function returns $0$, as no revenue is possible from a rod of zero length.
The variable $q$ is initialized to negative infinity to ensure it's lower than any possible revenue.
The for loop (lines 4-5) iteratively computes the maximum revenue by considering all possible ways to cut the rod. It does this by choosing the maximum of $q$ and the sum of the price of a piece of length $i$ plus the revenue from a rod of length $n - i$.
Finally, the function returns the maximum revenue $q$.

However, this naive recursive approach has a significant drawback in terms of efficiency. As $n$ increases, the number of recursive calls grows exponentially, severely impacting the program's running time. For example, with $n = 40$, the program might take several minutes or even hours to complete. The reason is that CUT-ROD repeatedly solves the same subproblems.

The number of calls made to CUT-ROD with a parameter $n$ can be denoted as $T(n)$, representing the number of nodes in a subtree of the recursion tree with root labeled $n$. This count includes the initial call:

$$ T(n) = 1 + \sum\_{j=0}^{n-1} T(j) $$
$$ T(n) = 1 + \sum\_{j=0}^{n-1} T(j) $$

This equation indicates that the total number of calls is exponential in $n$:

$$ T(n) = 2^n $$
$$ T(n) = 2^n $$

Hence, the running time of CUT-ROD is exponential in $n$, explicitly considering all $2^{n-1}$ possible ways of cutting a rod of length $n$. This inefficiency arises from the redundant computation of the same subproblems in the recursive calls, which is a common issue with naive recursive implementations in dynamic programming.



### Using Dynamic Programming for optimal rod cutting&#xA;

Dynamic programming offers an efficient solution to the rod-cutting problem, transforming the naive recursive approach into a more practical algorithm. This is achieved by ensuring each subproblem is solved only once and storing its solution for future reference. This method exemplifies a time-memory trade-off, where additional memory is used to significantly reduce computation time. There are two main ways to implement this in dynamic programming: top-down with memoization and bottom-up.

#### Top-Down Approach with Memoization

In this approach, the procedure is written recursively but modified to save the result of each subproblem in an array or hash table. Before computing the value for a subproblem, it checks if this has already been done. If the solution is known, it returns the saved value; otherwise, it computes the value as usual.

##### Pseudocode for Top-Down Approach:

```Plain&#x20;Text
MEMOIZED-CUT-ROD(p, n)
1 let r[0..n] be a new array
2 for i = 0 to n
3     r[i] = -∞  #Sets each element in the array to -∞ to indicate that the maximum calculated yet.
4 return MEMOIZED-CUT-ROD-AUX(p, n, r)
```

```Plain&#x20;Text
MEMOIZED-CUT-ROD-AUX(p, n, r)
1 if r[n] ≥ 0
2     return r[n]
3 if n == 0
4     q = 0
5 else q = -∞
6 for i = 1 to n
7     q = max(q, p[i] + MEMOIZED-CUT-ROD-AUX(p, n - i, r))
8 r[n] = q
9 return q
```

The`MEMOIZED-CUT-ROD`initializes an array with unknown values (denoted by -∞), then calls the auxiliary function`MEMOIZED-CUT-ROD-AUX`, which does the actual computation and memoization.

### Bottom-Up Approach

This method sorts subproblems by size and solves them in increasing order. Since each subproblem's solution depends on smaller subproblems, their solutions are already computed and stored.

##### Pseudocode for Bottom-Up Approach:

```Plain&#x20;Text
BOTTOM-UP-CUT-ROD(p, n)
1 let r[0..n] be a new array
2 r[0] = 0
3 for j = 1 to n #j is rod length
4     q = -∞   #q is variable to store revenue
5     for i = 1 to j #First piece cut of the rod per iteration
6         q = max(q, p[i] + r[j - i])
7     r[j] = q #maximum revenue is stored here
8 return r[n]
```

### Efficiency and Running Time

Both the top-down and bottom-up approaches have the same asymptotic running time, though the bottom-up method often has better performance due to lower overhead from procedure calls. The running time for both approaches isO(n2)O(n2), owing to their nested loop structure. This quadratic time complexity is a significant improvement over the exponential time complexity of the naive recursive approach.



### Subproblem Graphs

Understanding the concept of subproblem graphs is crucial in dynamic programming. These graphs represent the relationships and dependencies among subproblems in a dynamic programming problem.

#### Key Concepts of Subproblem Graphs

1. **Representation**: A subproblem graph is a directed graph where each vertex represents a distinct subproblem in the dynamic programming problem.

1) **Edges**: There is a directed edge from vertex $x$ to vertex $y$ if the optimal solution for subproblem $x$ involves directly considering an optimal solution for subproblem $y$. This is often the case in top-down recursive approaches where a call to solve $x$ directly calls itself to solve $y$.

1. **Collapsed Recursion Tree**: The subproblem graph can be seen as a reduced version of the recursion tree used in top-down recursive methods. It collapses all nodes representing the same subproblem into a single vertex, maintaining directed edges from parent to child subproblems.

#### Application in Dynamic Programming Methods

* **Bottom-Up Approach**: In this method, the vertices of the subproblem graph are considered in a specific order. The algorithm solves subproblems $y$ adjacent to a given subproblem $x$ before solving $x$ itself. This order is akin to a reverse topological sort of the subproblem graph, ensuring that no subproblem is solved before all its dependent subproblems are solved.

- **Top-Down Approach with Memoization**: This can be viewed as performing a depth-first search on the subproblem graph. Each subproblem is solved, and its result is memoized. If the subproblem is encountered again, the memoized result is used instead of re-solving it.

#### Impact on Running Time

The size and structure of the subproblem graph directly influence the running time of a dynamic programming algorithm. The running time is essentially the sum of the times needed to solve each subproblem, typically proportional to the degree of each vertex in the subproblem graph (the number of outgoing edges from each subproblem).

Since each subproblem is solved only once, the total running time for dynamic programming is often linear in terms of the number of vertices and edges in the subproblem graph. This linearity is based on the common scenario where the computation time for each subproblem is linked to its degree in the graph.



### Reconstructing a solution

Dynamic programming solutions for the rod-cutting problem typically focus on finding the maximum revenue but do not inherently provide the actual solution in terms of the list of piece sizes. However, we can extend these solutions to also track the choices leading to the optimal value, enabling us to reconstruct the actual solution.

##### Extended Bottom-Up Approach

Here's how we can extend the `BOTTOM-UP-CUT-ROD` procedure to not only compute the maximum revenue ( r\_j ) for each rod size ( j ), but also the optimal size of the first piece to cut off, ( s\_j ):

##### Extended Bottom-Up Cut-Rod Pseudocode:

```Plain&#x20;Text
EXTENDED-BOTTOM-UP-CUT-ROD(p, n)
1 let r[0..n] and s[0..n] be new arrays
2 r[0] = 0
3 for j = 1 to n
4     q = -∞
5     for i = 1 to j
6         if q < p[i] + r[j - i]
7             q = p[i] + r[j - i]
8             s[j] = i
9     r[j] = q
10 return r and s
```

This procedure, similar to`BOTTOM-UP-CUT-ROD`, maintains an additional array`s`where`s[j]`stores the optimal size of the first piece when solving a subproblem of size`j`.

##### Reconstructing the Solution

To print the complete list of piece sizes for an optimal decomposition of a rod, we can use the following procedure:

##### Print Cut-Rod Solution Pseudocode:

```Plain&#x20;Text
PRINT-CUT-ROD-SOLUTION(p, n)
1 (r, s) = EXTENDED-BOTTOM-UP-CUT-ROD(p, n)
2 while n > 0
3     print s[n]
4     n = n - s[n]
```

When called with a rod size $n$, this procedure first computes the arrays $r$ and $s$ using `EXTENDED-BOTTOM-UP-CUT-ROD`. It then iteratively prints and subtracts the size of the first piece (as indicated by $s\[n]$) until the entire rod is accounted for.

##### Example Output

For instance, calling `EXTENDED-BOTTOM-UP-CUT-ROD(p, 10)` might produce arrays like this:

* $r\[i]$ (revenue): $0, 1, 5, 8, 10, 13, 17, 18, 22, 25, 30$

- $s\[i]$ (first piece size): $0, 1, 2, 3, 2, 2, 6, 1, 2, 3, 10$

A call to `PRINT-CUT-ROD-SOLUTION(p, 10)` would print $10$, indicating a single piece of length $10$ is optimal. For $n = 7$, it would print cuts $1$ and $6$, aligning with the first optimal decomposition for $r\_7$ described earlier.



### Excercises:

##### 1. Show that Equation (15.4) follows from Equation (15.3) and the initial condition $T(0)=1$

Equation (15.3) is defined as:
$$ T(n) = 1 + \sum\_{j=0}^{n-1} T(j) $$

This equation describes the total number of calls made to the CUT-ROD function when the input size is $n$. Here, the term $1$ accounts for the current call, and the summation term $\sum\_{j=0}^{n-1} T(j)$ represents the recursive calls made for smaller subproblems.

The initial condition is given as:
$$ T(0) = 1 $$

This indicates that if there are no cuts to be made (i.e., when the rod length is 0), there's only one call to the function (the current call itself).

Equation (15.4), which we need to show, is defined as:
$$ T(n) = 2^n $$

This equation suggests that the total number of calls to the CUT-ROD function is $2^n$, which exponentially increases with the size of the rod $n$.

To prove that Equation (15.4) follows from Equation (15.3) and the initial condition, we'll use induction.

###### Base Case

For $n=0$, by the initial condition, we have $T(0)=1$. This satisfies Equation (15.4) since $2^0=1$.

###### Inductive Step

Assume that Equation (15.4) holds for all values less than $n$. That is, assume $T(k)=2^k$ for all $k\<n$.

Now, consider $T(n)$. From Equation (15.3), we have:
$$ T(n) = 1 + \sum\_{j=0}^{n-1} T(j) $$

Substitute the inductive hypothesis ($T(k)=2^k$) into the summation:
$$ T(n) = 1 + \sum\_{j=0}^{n-1} 2^j $$

This sum is a geometric series where the sum of the first $n$ terms of $2^j$ (starting with $j=0$) is given by:
$$ \sum\_{j=0}^{n-1} 2^j = 2^0 + 2^1 + 2^2 + \ldots + 2^{n-1} $$
$$ = 2^n - 1 $$

Thus, we can rewrite $T(n)$ as:
$$ T(n) = 1 + (2^n - 1) $$
$$ T(n) = 2^n $$

Therefore, we have shown that Equation (15.4) follows from Equation (15.3) and the initial condition $T(0)=1$. This completes the proof.



##### 2. Show, by means of a counterexample, that the following “greedy” strategy does not always determine an optimal way to cut rods. Define the density of a rod of length $i$ to be $p\_i = \frac{p\_i}{i}$, that is, its value per inch. The greedy strategy for a rod of length $n$ cuts off a first piece of length $i$, where $1 \leq i \leq n$, having maximum density. It then continues by applying the greedy strategy to the remaining piece of length $n - i$.&#xA;

To demonstrate that the "greedy" strategy based on cutting rods for maximum density (value per inch, $p\_i / i$) does not always yield an optimal solution, we need to find a counterexample. This means finding a specific case where this strategy does not lead to the maximum possible revenue.

The greedy strategy in this context involves always cutting the rod at the point where the piece has the highest density (value per inch, $p\_i / i$) and then continuing to apply the same strategy to the remaining part of the rod.

###### Counterexample:

Let's consider a rod pricing scheme where:

* The price $p\_1$ for a 1-inch rod is $1.

- The price $p\_2$ for a 2-inch rod is $5.

* The price $p\_3$ for a 3-inch rod is $8.

- The price $p\_4$ for a 4-inch rod is $9.

First, let's calculate the densities:

* Density of a 1-inch rod: $p\_1 / 1 = 1 / 1 = $1 per inch.

- Density of a 2-inch rod: $p\_2 / 2 = 5 / 2 = $2.50 per inch.

* Density of a 3-inch rod: $p\_3 / 3 = 8 / 3 \approx $2.67 per inch.

- Density of a 4-inch rod: $p\_4 / 4 = 9 / 4 = $2.25 per inch.

Now, let's apply the greedy strategy to a 4-inch rod. According to the densities calculated, the first cut should be at 3 inches (since it has the highest density), leaving a 1-inch piece. This would give a total revenue of $8 (for the 3-inch piece) + $1 (for the 1-inch piece) = $9.

However, this is not the optimal solution. If we cut the 4-inch rod into two 2-inch pieces, the total revenue would be $5 (for the first 2-inch piece) + $5 (for the second 2-inch piece) = $10, which is greater than the revenue achieved by following the greedy strategy.



##### 3. Consider a modification of the rod-cutting problem in which, in addition to a price $p\_i$ for each rod, each cut incurs a fixed cost of $c$. The revenue associated with a solution is now the sum of the prices of the pieces minus the costs of making the cuts. To solve this modified problem, we can adapt the classic dynamic programming approach for rod cutting by incorporating the cost of each cut into our calculations.

###### Key Idea

For each cut made, we must subtract the costccfrom the revenue. This changes the recurrence relation used in the dynamic programming solution.

###### Dynamic Programming Algorithm

The dynamic programming algorithm can be based on the bottom-up approach, similar to the standard rod-cutting problem, but with modifications to incorporate the cut cost.

###### Pseudocode

```Plain&#x20;Text
MODIFIED-CUT-ROD(p, n, c)
1 let r[0..n] be a new array
2 r[0] = 0
3 for j = 1 to n
4     q = -∞
5     for i = 1 to j
6         if i < j
7             q = max(q, p[i] + r[j - i] - c)
8         else
9             q = max(q, p[i])
10    r[j] = q
11 return r[n]
```

##### 4. Modify the`MEMOIZED-CUT-ROD`procedure to return not only the optimal revenue but also the actual solution (i.e., the lengths of the pieces).

###### Modified Memoized Cut-Rod Algorithm

The algorithm now includes an additional array`s`to store the size of the first piece in the optimal solution for each subproblem.

###### Pseudocode

```Plain&#x20;Text
PRINT-CUT-SOLUTION(p, n, c)
1 (r, s) = MEMOIZED-CUT-ROD(p, n, c)
2 while n > 0
3     print s[n]
4     n = n - s[n]
```

##### 5. The Fibonacci numbers are defined by recurrence (3.22). Give an O.n/-time&#xA;dynamic-programming algorithm to compute the nth Fibonacci number. Draw the&#xA;subproblem graph. How many vertices and edges are in the graph?

To create a dynamic programming algorithm for computing the $n$th Fibonacci number in $O(n)$ time, we can use a bottom-up approach. This approach iteratively computes Fibonacci numbers from the base cases up to the desired number, avoiding redundant calculations inherent in the naive recursive approach.

The Fibonacci numbers are defined by the recurrence relation:

* $F(0) = 0, F(1) = 1$

- $F(n) = F(n-1) + F(n-2)$ for $n \geq 2$

###### Dynamic Programming Algorithm (Bottom-Up Approach)

###### Pseudocode

```Plain&#x20;Text
FIBONACCI(n)
1 if n == 0
2     return 0
3 else if n == 1
4     return 1
5 let fib[0..n] be a new array
6 fib[0] = 0
7 fib[1] = 1
8 for i = 2 to n
9     fib[i] = fib[i - 1] + fib[i - 2]
10 return fib[n]
```

![](assets/S-KIZzIruueOv7VGqKyBMtmJvWagXhk86LjOdYBKL7M=.blob)

* There are $n+1$ vertices in the graph.

- Each vertex $F(i) $ for $i>=2 $ has edges to  $F(i-1) + F(n-2)$. So, there are 2 edges for each of these vertices. For $n >= 2 $, there are 2 x (n - 1) edges in total (since $F(0) $ and $F(1) $ do not have outgoing edges. 

## Matrix Chain Multiplication 

The matrix-chain multiplication problem in dynamic programming involves finding the most efficient way to multiply a sequence of matrices. Given a chain of matrices $A\_1, A\_2, \ldots, A\_n$, the goal is to compute the product $A\_1A\_2\ldots A\_n$ while minimizing the number of scalar multiplications.

Matrix multiplication is associative, allowing multiple ways to parenthesize the product without changing the result. However, the cost, in terms of scalar multiplications, can vary significantly based on the chosen parenthesization. For instance, different ways to parenthesize a product of four matrices $A\_1A\_2A\_3A\_4$ can lead to varying computational costs.


```Plain&#x20;Text
MATRIX-MULTIPLY(A, B)
1. if A:columns ≠ B:rows
2.     error "incompatible dimensions"
3. else let C be a new A:rows x B:columns matrix
4. for i = 1 to A:rows
5.     for j = 1 to B:columns
6.         c_ij = 0
7.         for k = 1 to A:columns
8.             c_ij = c_ij + a_ik * b_kj
9. return C

```

The cost of multiplying two matrices depends on their dimensions. If $A$ is a $p \times q$ matrix and $B$ is a $q \times r$ matrix, the resultant matrix $C$ is a $p \times r$ matrix, and the multiplication cost is $pqr$ scalar multiplications. The MATRIX-MULTIPLY(A, B) pseudocode outlines the standard algorithm for multiplying two matrices, where the compatibility (i.e., the number of columns in $A$ equals the number of rows in $B$) is a prerequisite.

For example, consider a chain of three matrices with dimensions $10 \times 100$, $100 \times 5$, and $5 \times 50$. Different parenthesizations, such as $(A\_1A\_2)A\_3$ and $A\_1(A\_2A\_3)$, can lead to vastly different costs (7500 vs. 75,000 scalar multiplications).

The matrix-chain multiplication problem is thus stated as: given a chain of $n$ matrices where matrix $A\_i$ has dimensions $p\_{i-1} \times p\_i$, find the parenthesization that minimizes the scalar multiplications. The objective is not to perform the multiplication but to determine the most cost-effective order of multiplication. Efficiently solving this problem can lead to significant time savings in actual matrix multiplication tasks.



### Counting the number of parenthesizations

To understand why exhaustively checking every possible way of parenthesizing a sequence of matrices is inefficient, we consider the concept of counting the number of different parenthesizations. The number of ways to parenthesize a sequence of $n$ matrices is denoted as $P(n)$. For a single matrix ($n=1$), there's only one way to parenthesize. However, when $n \geq 2$, the situation becomes more complex.

The recurrence relation to calculate $P(n)$ is:
$$
\begin{cases}
1 & \text{if } n = 1 \\
\sum\_{k=1}^{n-1} P(k) \times P(n-k) & \text{if } n \geq 2
\end{cases}
$$

This recurrence reflects that for each $n \geq 2$, the parenthesization of a matrix chain can be split into two subproducts at various points, each of which can be parenthesized in $P(k)$ and $P(n-k)$ ways, respectively.

The solution to this recurrence grows exponentially with $n$, akin to the Catalan numbers, which are known to grow as approximately $\Theta\left(\frac{4^n}{n^{3/2}}\right)$. This exponential growth implies that the total number of possible parenthesizations is also exponential in $n$. Therefore, a brute-force method that checks every possible parenthesization to find the optimal one is highly inefficient for larger values of $n$, as it would require an impractical amount of computation even for moderately sized matrices. This complexity underscores the need for a more efficient approach like dynamic programming to solve the matrix-chain multiplication problem.



### Applying Dynamic Programming

To solve the matrix-chain multiplication problem efficiently using 
dynamic programming, we'll employ a structured four-step approach:

1\. Characterize the structure of an optimal solution.
2\. Recursively define the value of an optimal solution.
3\. Compute the value of an optimal solution.
4\. Construct an optimal solution from computed information.



In the first step of applying dynamic programming to the matrix-chain multiplication problem, the focus is on discovering the problem's optimal substructure. This understanding is essential for building an optimal solution from the solutions of smaller subproblems. The process can be summarized as follows:

* **Notation and Substructure Identification**:

  * Adopt the notation $A\_{i::j}$ to represent the matrix resulting from the product $A\_iA\_{i+1}\ldots A\_j$.

  - For a nontrivial case $(i < j)$, split the product between $A\_k$ and $A\_{k+1}$ for some $k$ in the range $i \leq k < j$.

- **Cost of Parenthesization**:

  * The cost to parenthesize the product $A\_{i::j}$ includes the costs of computing $A\_{i::k}$, $A\_{k+1::j}$, and the cost of their subsequent multiplication.

* **Optimal Substructure**:

  * If the optimal parenthesization of $A\_{i::j}$ splits between $A\_k$ and $A\_{k+1}$, then the parenthesization of $A\_{i::k}$ and $A\_{k+1::j}$ within this optimal solution must also be optimal.

- **Constructing Optimal Solutions**:

  * Build an optimal solution to the matrix-chain multiplication by optimally solving two subproblems: $A\_{i::k}$ and $A\_{k+1::j}$.

  - Ensure all possible split points $k$ are considered to guarantee finding the optimal solution.

#### In step 2, we define the cost of an optimal solution recursively:

* **Defining Subproblems**:

  * Define subproblems as finding the minimum cost of parenthesizing $A\_{i::j}$ for $1 \leq i \leq j \leq n$.

- **Recursive Cost Definition**:

  * Let $m\[i,j]$ represent the minimum number of scalar multiplications needed for $A\_{i::j}$. The full problem solution is $m\[1,n]$.

  - If $i = j$, it's a single matrix, so $m\[i,i] = 0$.

  * For $i < j$, use the optimal substructure to compute $m\[i,j] = m\[i,k] + m\[k+1,j] + p\_{i-1} \times p\_k \times p\_j$ for all $i \leq k < j$.

* **Auxiliary Information**:

  * Define $s\[i,j]$ to record the split point $k$ that gave the optimal cost for computing $m\[i,j]$.

#### Step 3: Computing the Optimal Costs

##### Objective

The goal in this step is to find the minimum number of scalar multiplications needed to compute the matrix product $A\_1A\_2\ldots A\_n$. This is achieved by systematically solving smaller subproblems and using their solutions to solve larger ones.

##### Methodology

The approach used is a tabular, bottom-up method. This means we iteratively fill in a table, where each entry represents the minimum cost (in terms of scalar multiplications) for multiplying a subsequence of the matrices.

##### Tables Used

Two tables are utilized:

* **m Table**: This table stores the minimum cost of multiplying matrices for different subsequences. Specifically, $m\[i,j]$ represents the minimum cost of multiplying the matrix chain from $A\_i$ to $A\_j$.

- **s Table**: This table keeps track of the splitting point that resulted in the minimum cost for each subsequence. The entry $s\[i,j]$ indicates where to split the matrix chain between $A\_i$ and $A\_j$ for the minimum cost.

##### Process

1. **Initialization**: First, initialize the $m$ table by setting the diagonal elements $m\[i,i]$ to 0 for all $i$. This reflects that there is no cost to multiplying a single matrix.

1) **Chain Length Iteration**: The algorithm then considers chains of increasing length. For each chain length $l$ (starting from 2, as the length 1 case is already handled), it calculates the minimum cost of multiplying each subchain of that length.

1. **Determining Minimum Cost**:

   * For each subchain of length $l$, identify the start and end points ($i$ and $j$) of the subchain.

   - Compute $m\[i,j]$ by trying every possible splitting point $k$ between $i$ and $j$. For each $k$, the cost is the sum of the cost of multiplying the left subchain ($m\[i,k]$), the cost of multiplying the right subchain ($m\[k+1,j]$), and the cost of multiplying these two resulting matrices together.

   * The cost of multiplying two matrices is calculated as $p\_{i-1} \times p\_k \times p\_j$ (assuming the matrix $A\_i$ has dimensions $p\_{i-1} \times p\_i$).

   - The minimum of these costs for all $k$ is set as $m\[i,j]$, and the corresponding $k$ is recorded in $s\[i,j]$.

1) **Completing the Table**: Repeat the above process for all chain lengths and all subsequences of each length. By the end, $m\[1,n]$ will contain the minimum cost for the entire chain of matrices.

##### Running Time

The running time of this algorithm is $O(n^3)$. This cubic time complexity comes from the three nested loops: over chain lengths, over starting points of chains, and over possible splitting points.



#### Step 4: Constructing an Optimal Solution

##### Objective

After finding the minimum cost of multiplying the entire matrix chain, the objective of Step 4 is to determine the actual sequence of matrix multiplications that yields this minimum cost.

##### Using the `s` Table

The `s` table, which was filled in Step 3, plays a crucial role here. It records the optimal splitting points for each subchain of matrices. For any subchain $A\_i$ to $A\_j$, the entry `s[i, j]` indicates the position $k$ where the product should be split to achieve the minimum cost.

##### Procedure for Constructing the Optimal Solution

1. **Recursive Approach**:

   * The optimal solution can be constructed using a recursive approach.

   - Start with the entire chain $A\_1, A\_2, \ldots, A\_n$ and look up `s[1, n]` to find the optimal split point $k$ for this chain.

   * This split divides the problem into two smaller subproblems: optimally multiplying the subchain $A\_1, \ldots, A\_k$ and $A\_{k+1}, \ldots, A\_n$.

1) **Divide and Conquer**:

   * Apply the same approach recursively to each of these subchains.

   - For each subchain $A\_i, \ldots, A\_j$, look up `s[i, j]` to find the best place to split this subchain.

   * Continue this recursive splitting until the subchains have only one matrix (where no further multiplication is needed).

1. **Constructing Parenthesization**:

   * The process effectively builds the fully parenthesized product that indicates the order of matrix multiplications.

   - The parenthesization can be represented explicitly using parentheses or described in a sequence of steps.

1) **Implementation**:

   * This can be implemented as a recursive procedure or function, often named something like `PRINT-OPTIMAL-PARENS(s, i, j)`.

   - The base case for the recursion is when $i = j$, meaning only one matrix is in the subchain, so no multiplication is needed.

   * For $i < j$, recursively apply the procedure to the subchains determined by `s[i, j]`.

##### Example

If `s[1, n]` gives a split at $k$, the optimal parenthesization might look like `((A_1A_2...A_k)(A_{k+1}...A_n))`. The procedure would then recursively find the optimal splits for the subchains `(A_1A_2...A_k)` and `(A_{k+1}...A_n)`.

&#x20;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
