# Standard notations and common functions

Standard notations and common functions

This section reviews standard mathematical functions and notations, emphasizing their relationships and applications in asymptotic analysis.

### Monotonicity:

* A function $f(n)$ is **monotonically increasing** if $m \geq n$ implies $f(m) \geq f(n)$.

- It's **monotonically decreasing** if $m \geq n$ implies $f(m) \leq f(n)$.

* **Strictly increasing**: $m < n$ implies $f(m) < f(n)$.

- **Strictly decreasing**: $m < n$ implies $f(m) > f(n)$.

### Floors and Ceilings:

* Floor of $x$, $\lfloor x \rfloor$, is the greatest integer less than or equal to $x$.

- Ceiling of $x$, $\lceil x \rceil$, is the least integer greater than or equal to $x$.

* Properties:

  * $x - 1 < \lfloor x \rfloor \leq x \leq \lceil x \rceil < x + 1$

  - $\lceil n/2 \rceil + \lfloor n/2 \rfloor = n$

  * For $x \geq 0$ and integers $a, b > 0$:

    * $\lceil x/a \rceil \cdot b = \lceil (x/ab) \rceil$

    - $\lfloor x/a \rfloor \cdot b = \lfloor (x/ab) \rfloor$

    * $\lceil a/b \rceil \geq a + (b - 1)/b$

    - $\lfloor a/b \rfloor \leq a - (b - 1)/b$

### Modular Arithmetic:

* $a \mod n$ is the remainder of $a/n$.

- $0 \leq a \mod n < n$.

* Equivalence: $a \equiv b , (\text{mod} , n)$ if $a$ and $b$ have the same remainder when divided by $n$.

### Polynomials:

* A polynomial of degree $d$ in $n$: $p(n) = \sum\_{i=0}^{d} a\_i n^i$, with $a\_d \neq 0$.

- Asymptotically positive: $a\_d > 0$ implies $p(n) = \Omega(n^d)$.

* Monotonicity: $n^a$ is monotonically increasing for $a \geq 0$, decreasing for $a \leq 0$.

- Polynomially bounded: $f(n) = O(n^k)$ for some constant $k$.

### Exponentials:

* Properties of exponentials ($a > 0$, $m, n$ are integers):

  * $a^0 = 1$, $a^1 = a$, $a^{-1} = 1/a$, $(a^m)^n = a^{mn}$, $a^{m+n} = a^m a^n$.

- Exponential growth outpaces polynomial: $\lim\_{n \to \infty} \frac{n^b}{a^n} = 0$ for $a > 1$, implying $n^b = o(a^n)$.

* Natural exponential function ($e \approx 2.71828$):

  * $e^x = \sum\_{i=0}^{\infty} \frac{x^i}{i!}$.

  - Inequalities: $e^x \geq 1 + x$, approximation $e^x \approx 1 + x$ for $x \to 0$.

### Logarithms:

* Notations:

  * $\lg n = \log\_2 n$, $\ln n = \log\_e n$, $\lg^k n = (\lg n)^k$, $\lg \lg n = \lg(\lg n)$.

- Properties:

  * $\log\_c (ab) = \log\_c a + \log\_c b$, $\log\_b a^n = n \log\_b a$, $\log\_b a = \frac{\log\_c a}{\log\_c b}$.

* Polylogarithmically bounded: $f(n) = O(\lg^k n)$ for some $k$.

- Growth comparison: $\lg^b n = o(n^a)$ for $a > 0$.

### Factorials:

* $n! = 1 \times 2 \times \ldots \times n$ for $n \geq 0$.

- Stirling’s approximation: $n! \approx \sqrt{2\pi n} \left( \frac{n}{e} \right)^n$.

* Asymptotic relations: $n! = o(n^n)$, $n! = \omega(2^n)$, $\lg(n!) = \Theta(n \lg n)$.

### Functional Iteration:

* $f^{(i)}(n)$ is the function $f$ applied iteratively $i$ times to $n$.

### Iterated Logarithm (Log Star):

* $\log^\* n$ is the number of times the logarithm function must be iteratively applied before the result is less than or equal to 1.

### Fibonacci Numbers:

* Defined by $F\_0 = 0$, $F\_1 = 1$, and $F\_i = F\_{i-1} + F\_{i-2}$ for $i \geq 2$.

- Related to the golden ratio $\phi = \frac{1 + \sqrt{5}}{2}$ and its conjugate.

* $F\_i$ can be expressed as $F\_i = \frac{\phi^i - \psi^i}{\sqrt{5}}$, where $\psi = \frac{1 - \sqrt{5}}{2}$.

These concepts form the foundation of many advanced topics in mathematics and computer science, especially in the analysis of algorithms and functions.
