# Chapter04_Section06_Extended Learning_Complex Numbers

Chapter04\_Section06\_Extended Learning\_Complex Numbers

### Absolute Complex Numbers (Magnitude of Complex Numbers):

* A complex number is usually written in the form $z = a + bi$, where $a$ and $b$ are real numbers, and $i$ is the imaginary unit with the property $i^2 = -1$.

- The absolute value (or magnitude) of a complex number $z$, denoted as $|z|$, is the distance of the complex number from the origin in the complex plane. It's calculated as $|z| = \sqrt{a^2 + b^2}$.

### What are some identities with complex numbers?

Identities are equations that are always true, regardless of the values substituted for the variables. They are especially useful in simplifying expressions and solving problems in the context of complex numbers. Some of the common identities with complex numbers are:

1. $i^2 = -1 $

1) $i^3 = -i $

1. $i^4 = 1 $

1) $(a + bi)^2 = a^2 + 2abi - b^2 $

1. $(a + bi)^3 = a^3 + 3a^2bi - 3ab^2 -b^3i  $

1) $(a + bi)^4 = a^4 + 4a^2bi - 6a^2b^2 -4ab^3i + b^4  $

1. **Complex Conjugate**:

   * For a complex number $z = a + bi$, its conjugate is $\bar{z} = a - bi$.

   - This identity reflects a complex number across the real axis.

1) **Modulus or Absolute Value**:

   * The modulus of $z = a + bi$ is $|z| = \sqrt{a^2 + b^2}$.

   - Represents the distance of the complex number from the origin.

1. **Product of a Number and Its Conjugate**:

   * $z \cdot \bar{z} = (a + bi)(a - bi) = a^2 + b^2$.

   - The product equals the square of the modulus of $z$.

1) **Euler's Formula**:

   * $e^{i\theta} = \cos \theta + i\sin \theta$.

   - Relates complex exponentials to trigonometric functions.

These identities are instrumental in simplifying complex numbers and deriving their properties, such as modulus, argument, and polar form.

#### Angles and Radians:

* An angle measures the rotation from one ray to another originating from the same point. Angles can be measured in degrees or radians.

- A radian is an alternative way of measuring angles based on arc lengths. One radian is the angle created by bending the radius of a circle around its circumference. There are $2\pi$ radians in a full circle, which is equivalent to 360 degrees. Therefore, 1 radian is about 57.3 degrees.

* Radians are often used in mathematics and sciences because they simplify many formulas, especially in trigonometry and calculus.

#### Sine, Cosine, and Tangent in Relation to Angles and Complex Numbers:

* **Sine (sin)**: In a right-angled triangle, sine of an angle is the ratio of the length of the opposite side to the length of the hypotenuse. In the unit circle, sine of an angle $\theta$ is the y-coordinate of the point where the terminal side of the angle intersects the circle.

- **Cosine (cos)**: Cosine of an angle in a right-angled triangle is the ratio of the length of the adjacent side to the length of the hypotenuse. In the unit circle, cosine of an angle $\theta$ is the x-coordinate of the point where the terminal side of the angle intersects the circle.

* **Tangent (tan)**: Tangent of an angle in a right-angled triangle is the ratio of the sine to the cosine of that angle, or equivalently, the ratio of the opposite side to the adjacent side.

#### Usage in Complex Numbers:

* When representing a complex number in polar form (using magnitude and angle), the relationships are:

  * $z = |z| (\cos \theta + i \sin \theta)$, where $\theta$ is the angle formed with the positive x-axis (real axis).

  - The angle $\theta$ is also known as the argument of the complex number.

#### When to Use Sine, Cosine, and Tangent:

* **Sine and Cosine** are primarily used when dealing with right-angled triangles or functions involving periodicity and oscillations (like waves). $\cos\theta = \frac{x}{r} $ and $\sin\theta = \frac{y}{r} $

- **Tangent** is used in situations where you need to relate the opposite and adjacent sides of a right-angled triangle or in certain aspects of slope analysis. $\theta = \arctan\frac{y}{x} $

* In complex analysis, these functions are crucial for converting complex numbers between rectangular and polar forms and for understanding the behavior of complex functions.

![](assets/BGqp9O8JBNoaxrY2hOJZCDtOuqEShzy_NfRe7hWkwnA=.blob)

Here's a graphical representation showing how to find the angle of a vector using sine, cosine, and tangent:

* The **blue arrow** represents a vector in the 2D plane, originating from the origin and pointing towards the coordinates (3, 4).

- The **green dotted line** along the X-axis represents the adjacent side of the angle, related to the cosine of the angle. In this case, it's the X-component of the vector, corresponding to $\cos(\theta)$.

* The **red dotted line** along the Y-axis represents the opposite side of the angle, related to the sine of the angle. This is the Y-component of the vector, corresponding to $\sin(\theta)$.

- The angle $\theta$ of the vector can be found using the arctangent function, which is the ratio of the sine (opposite side) to the cosine (adjacent side). In this example, the angle $\theta$ is calculated as $\arctan\left(\frac{\text{opposite}}{\text{adjacent}}\right)$ or $\arctan\left(\frac{4}{3}\right)$, which results in an angle of approximately 53.13°.

* Rectangular Form of $Z = r(\cos(\theta)+i.\sin(\theta)) = re^{i\theta}$

- The annotations show the values of sine, cosine, and the angle in degrees. This type of graphical representation is commonly used in physics and engineering to understand vector orientations and angles.

To convert an angle from degrees to radians, you use the fact that $360^\circ$ is equivalent to $2\pi$ radians. Here's a step-by-step guide using the example of the angle $\theta$ for the complex number $z=5+7i$, which we calculated to be approximately $0.951$ radians:

##### Understand the Basic Relationship between Degrees and Radians

![](assets/TrC8UvnFZMDXTw5Daj8REARNwa--tP1bXPwcTq13CNU=.blob)

* $360^\circ$ is equivalent to $2\pi$ radians.

- Therefore, $1^\circ$ is equivalent to $\frac{2\pi}{360}$ radians, or $\frac{\pi}{180}$ radians.



### Different Forms of Complex Numbers:

#### Rectangular Form

* The rectangular form of a complex number is $a + bi$, combining real part $a$ and imaginary part $bi$.

- Useful for addition and subtraction of complex numbers.

* Easily plotted on the complex plane using real and imaginary parts as coordinates.

#### Polar Form

* Polar form uses magnitude $r$ (distance from origin) and angle $\theta$ (angle with positive real axis).

- Expressed as $r(\cos \theta + i\sin \theta)$.

* Facilitates multiplication and division of complex numbers, where magnitudes multiply and angles add.

#### Exponential Form

* Similar to polar form but more compact, written as $re^{i\theta}$.

- Based on Euler's formula: $e^{i\theta} = \cos \theta + i\sin \theta$.

* Simplifies multiplicative operations, adhering to the properties of exponents.

These forms allow for different operations and visualizations of complex numbers, each useful in various mathematical contexts.





### Complex Multiplication in Polar Form

When we multiply two complex numbers in polar form, we multiply their magnitudes (absolute values) and add their angles (arguments). This can be visualized effectively on the complex plane.

#### Multiplication Rule:

* Given two complex numbers in polar form,

  * $z\_1 = r\_1(\cos \theta\_1 + i\sin \theta\_1)$ and

  - $z\_2 = r\_2(\cos \theta\_2 + i\sin \theta\_2)$,

- The product $z\_1 \times z\_2$ is given by:

  * **Magnitude**: Multiply the magnitudes $r\_1$ and $r\_2$.

  - **Angle**: Add the angles $\theta\_1$ and $\theta\_2$.

#### Visualization on the Complex Plane:

* When you multiply every point on the complex plane by a fixed complex number

  * $z = r(\cos \theta + i\sin \theta)$,

  - **Scaling**: Each point on the plane is scaled (stretched or shrunk) by a factor of $r$, the magnitude of $z$.

  * **Rotation**: Each point is also rotated by an angle of $\theta$, the angle of $z$.

#### Example of Multiplication Effect:

* If you multiply every point on the complex plane by a complex number $z$ with a magnitude greater than 1 (e.g., $r = 2$) and an angle (e.g., $\theta = 30^\circ$),

  * The plane will be scaled up by a factor of 2 (each point moves twice as far from the origin).

  - The plane will be rotated by $30^\circ$.

In summary, complex multiplication in polar form, particularly visualized on the complex plane, demonstrates both a scaling and rotational effect based on the magnitude and angle of the complex number used for multiplication.



### Complex Division

When we divide every number on the complex plane by a complex number, the process is essentially the inverse of multiplication. Let's consider a complex number with an angle $\theta$ and absolute value $r$.

#### Division Process:

* Division by a complex number rotates and scales every point on the complex plane.

- If the complex number has an angle $\theta$ and absolute value $r$, then:

  * **Rotation**: Each point on the plane is rotated by $-\theta$ (opposite direction of multiplication).

  - **Scaling**: Each point is scaled by a factor of $\frac{1}{r}$, which means shrinking by a factor of $r$.

#### Visualization on the Complex Plane:

* When you divide every point on the complex plane by a fixed complex number, $z = r(\cos \theta + i\sin \theta)$,

  * The plane undergoes a counter-rotation by $\theta$.

  - The plane is scaled down by the reciprocal of the magnitude of $z$, which is $\frac{1}{r}$.

In summary, complex division, visualized on the complex plane, results in both a counter-rotational effect and a scaling effect (shrinking) based on the magnitude and angle of the complex number used for division.



### Relating the Visualization of Complex Division with the Formula

To compute the division of two complex numbers, particularly in the context of visualizing this operation on the complex plane, we can consider an example where we divide by a complex number and its relation to multiplying by the complex conjugate.

#### Computing Complex Division:

* To compute $\frac{z\_1}{z\_2}$, where, for instance, $z\_1 = a + bi$ and $z\_2 = c + di$, we multiply both the numerator and denominator by the complex conjugate of $z\_2$, which is $c - di$.

- In mathematical terms, dividing by $z\_2 = c + di$ is the same as multiplying by its conjugate $\frac{1}{c + di} = \frac{c - di}{c^2 + d^2}$.

#### Visual Understanding:

* Suppose $z\_2$ has an angle $\theta$ and absolute value $r$. To divide by $z\_2$, we must rotate by $-\theta$ and scale by $\frac{1}{r}$.

- The conjugate of $z\_2$, denoted as $\bar{z\_2}$, has the opposite angle from $z\_2$. Multiplying by $\bar{z\_2}$ will rotate by $-\theta$, as required.

* However, multiplying by $\bar{z\_2}$ scales everything by a factor of $r^2$ (since $|\bar{z\_2}| = r^2$), which is in the opposite direction of what is needed for division. To correct this, we divide by $r^2$.

In summary, to divide by a complex number on the complex plane, we rotate by the negative of the number's angle and scale by the reciprocal of its magnitude. This process is equivalent to multiplying by the number's conjugate and then adjusting the scale accordingly.





#### Practice Set 2: Powers of Complex Numbers in Polar Form

##### Example 1: Evaluate $(1 - i)^5$

###### Step 1: Convert to Polar Form

* Given complex number: $z = 1 - i$

- Convert $z$ to polar form. In polar form, $z = r(\cos \theta + i\sin \theta)$, where $r$ is the magnitude and $\theta$ is the argument.

* Calculate the magnitude $r = |z| = \sqrt{a^2 + b^2}$, where $a = 1$ and $b = -1$.

- Find the argument $\theta$. Since $z$ is in the fourth quadrant, $\theta = \arctan\left(\frac{b}{a}\right) = -\frac{\pi}{4}$ (considering the quadrant).

Thus, $z = \sqrt{2}\left(\cos\left(-\frac{\pi}{4}\right) + i\sin\left(-\frac{\pi}{4}\right)\right)$.

###### Step 2: Use the Power Rule

* To find $z^5$, use the power rule: $z^n = r^n(\cos(n\theta) + i\sin(n\theta))$.

- Calculate $(1 - i)^5 = \left(\sqrt{2}\right)^5\left(\cos\left(5 \times -\frac{\pi}{4}\right) + i\sin\left(5 \times -\frac{\pi}{4}\right)\right)$.

The final calculation gives us:

* Real part: Approximately $-4.0$

- Imaginary part: Approximately $4.0$

Therefore, $(1 - i)^5$ is approximately $-4 + 4i$.



### General Rules for Powers and Roots of Complex Numbers

* **Modulus (Absolute Value)**: For a power, multiply the moduli; for a root, take the nth root of the modulus.

- **Argument (Angle)**: For a power, multiply the arguments; for a root, divide the argument by n.

#### Finding Modulus for the nth Root

* Given a complex number $z=re^{i\theta}$, its nth root's modulus is $\sqrt\[n]{r}$.

#### Solving for the Argument

* Denote the argument of a solution as $\phi$.

- For the nth root, the argument of each solution is $\frac{\theta + 2k\pi}{n}$, where $k$ is an integer from 0 to $n-1$.

* This accounts for the multiple solutions (roots) in complex numbers.

#### Example: Solving $z^n = w$

* If we know $w$ and want to find $z$, we take the nth root of the modulus of $w$, and the argument of $z$ is any value $\phi$ for which $\frac{\theta + 2k\pi}{n}$ is equal to the argument of $w$ plus a multiple of $2\pi$.

#### Applying the Hints to Find Solutions

* **Hint 1 (Finding Modulus)**: If $w = re^{i\theta}$, then $|z| = \sqrt\[n]{r}$.

- **Hint 2 (Solving for Argument)**: The argument of $z$ can be found by solving $\phi = \frac{\theta + 2k\pi}{n}$ for $k = 0, 1, \ldots, n-1$.

* **Answer**: The additional complex solutions are the various combinations of the modulus and arguments found for each integer $k$ within the specified range.



To solve the equation $z^4 = 81$ for complex number $z$, we use the polar form representation of complex numbers and the properties of roots in the complex plane. Here's a step-by-step guide:

##### Step 1: Express the Right-Hand Side in Polar Form

* The number 81 can be written in polar form. Since 81 is a positive real number, its angle (argument) is 0 or multiples of $2\pi$, and its modulus (absolute value) is 81.

- Polar form: $81 = 81 \times (\cos(0) + i\sin(0))$ or $81 = 81e^{0i}$.

##### Step 2: Find the Modulus of $z$

* The modulus of $z$ is the fourth root of the modulus of 81.

- $|z| = \sqrt\[4]{81} = 3$ (since $81 = 3^4$).

##### Step 3: Find the Argument of $z$

* The argument of $z$ is one-fourth of the argument of 81.

- Since the argument of 81 is 0 (or any integer multiple of $2\pi$), the arguments for $z$ can be $\frac{0 + 2k\pi}{4}$, where $k$ is an integer.

* This yields four possible angles for $z$: $0, \frac{\pi}{2}, \pi, \frac{3\pi}{2}$ (or $0, 90^\circ, 180^\circ, 270^\circ$).

##### Step 4: Write the Solutions

* The solutions for $z$ are then the combination of the modulus 3 and each of the four angles.

- Using Euler's formula ($e^{i\theta} = \cos(\theta) + i\sin(\theta)$), the solutions are:

  * $z\_1 = 3e^{0i} = 3$

  - $z\_2 = 3e^{i\frac{\pi}{2}} = 3i$

  * $z\_3 = 3e^{i\pi} = -3$

  - $z\_4 = 3e^{i\frac{3\pi}{2}} = -3i$



### What is the Fundamental Theorem of Algebra?

The fundamental theorem of algebra is a very important and beautiful result that tells us something amazing about complex numbers and polynomials.

The fundamental theorem of algebra states that every polynomial of degree $n$, where $n$ is a positive whole number, has exactly $n$ complex roots, or solutions. A root of a polynomial is a value that makes the polynomial equal to zero, like $x = 2$ for $x^2 - 4$. A complex root is a root that is a complex number, like $x = i$ for $x^2 + 1$.

The fundamental theorem of algebra is amazing because it tells us that complex numbers are essential for solving any polynomial equation, no matter how complicated or simple it is. It also tells us that complex numbers are complete, meaning that there is no other type of number that we need to invent to find the roots of any polynomial.

It also tells us that if a complex number is a root of a polynomial, then so is its complex conjugate. For example, if $a + bi$ is a root of $f(x)$, then so is $a - bi$.

The fundamental theorem of algebra has many applications in mathematics, science, engineering, and art, where polynomials are used to model and study various phenomena and patterns. For example, polynomials can be used to describe the shape of curves, the motion of objects, the behavior of waves, the distribution of data, the encryption of information, and the creation of fractals.
