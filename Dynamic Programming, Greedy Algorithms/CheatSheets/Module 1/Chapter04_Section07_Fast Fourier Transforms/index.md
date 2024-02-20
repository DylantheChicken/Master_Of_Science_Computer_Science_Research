# Chapter04_Section07_Fast Fourier Transforms

Chapter04\_Section07\_Fast Fourier Transforms

# In-Depth Report on Fast Fourier Transforms (FFT)

## Introduction

The Fast Fourier Transform (FFT) is a fundamental tool in digital signal processing, providing a way to analyze the frequency content of signals. Its applications span numerous fields including audio processing, image analysis, telecommunications, and spectral analysis.

## Core Concepts

* **Fourier Transform (FT):** Converts a signal from the time domain to the frequency domain. It's represented by the formula:
  $$ F(\omega) = \int\_{-\infty}^{\infty} f(t) e^{-j\omega t} dt $$
  where ( f(t) ) is the signal in time domain, ( F(\omega) ) in frequency domain, ( \omega ) is the frequency, and ( j ) is the imaginary unit.

- **Discrete Fourier Transform (DFT):** For digital signals, FT is discretized as DFT:
  $$ X\[k] = \sum\_{n=0}^{N-1} x\[n] e^{-j(2\pi/N)kn} $$
  where ( X\[k] ) is the frequency domain representation, ( x\[n] ) is the time-domain signal, and ( N ) is the number of samples.

## Fast Fourier Transform (FFT)

FFT significantly reduces the computational complexity of DFT from ( O(N^2) ) to ( O(N \log N) ).

## Steps in Calculating FFT

1. **Decomposition:** The signal is divided into smaller parts.

1) **Recursive DFTs:** Smaller DFTs are computed and combined using the 'butterfly' operations.

1. **Bit Reversal:** Input sequence might be reordered for specific FFT algorithms.



### Examples

```python
import cmath
z1 = complex(1, 2) # the number 1 + 2j
z2 = complex(-1, 1) # the complex number -1 + j
(r2, ang2) = cmath.polar(z2)
print(f'z2 in polar coordinates: modulus = {r2}, phase = {ang2}')
z3 = 1/z2 # take 1/z2
print(f'z3 = {z3}')
(r3, ang3) = cmath.polar(z3)
print(f'z3 in polar coordinates: modulus = {r3}, phase = {ang3}')
# Python simply allows you to write complex numbers using 
# j as the imaginary root of -1.
z4 = 1.0 - 2.1j
print(z4)
```

Let's write a function to get us all the roots of unity for a given ( n ). Note that these roots are given by:

$$ \omega\_{kn} = \cos\left(\frac{2\pi k}{n}\right) + j \sin\left(\frac{2\pi k}{n}\right) $$



```python
import math
def get_roots_of_unity(n):
    assert n >= 2
    angles = [2.0 * math.pi * k/n for k in range(n)]
    lst = [math.cos(ang) + math.sin(ang)*1j for ang in angles]
    return lst
```

Given a sequence of data points
$a\_0, a\_1, \ldots, a\_{n-1}$,
Its discrete Fourier transform is a sequence of $n$ complex numbers:
$A\_0, \ldots, A\_{n-1}$,
wherein
$$ A\_k = a\_0 + a\_1 \omega\_{kn} + a\_2 (\omega\_{kn})^2 + \cdots + a\_{n-1} (\omega\_{kn})^{n-1} $$
where $\omega\_n = \cos\left(\frac{2\pi}{n}\right) + j\sin\left(\frac{2\pi}{n}\right)$.

A simple way to remember this is to think of the polynomial
$$ a(z) = a\_0 + a\_1 z + a\_2 z^2 + \cdots + a\_{n-1} z^{n-1} $$
Then, $A\_k$ is simply the polynomial $a(z)$ evaluated at $z = \omega\_{kn}$, i.e, $A\_k = a(\omega\_{kn})$.

```python
def compute_fourier_coeffs_naive(seq):
# Brute force computation
n = len(seq)
fft_seq = [] 
w = 1.0
#n roots of unity formula
wn = math.cos(2.0 * math.pi/n) + math.sin(2.0 * math.pi/n)*1j
# Compute each co-efficient
for j in range(n):
  Aj = 0
  wj = 1.0
  #Compute the sum
  for k in range (n):
    Aj = Aj + wj*seq[k]
    wj = wj * w
  fft_seq.append(Aj)
  w = w * wn
  This algorithm takes time complexity of O(n^2)
return fft_seq
 
#Example case
seq = [1.0, -1.0, 1.0, 1.0, 1.0, -1.0,1.0, 1.0]
print(compute_fourier_coeffs_naive(seq))
```

Now lets try another approach, using divide and conquer to reduce time complexity. We will apply D\&C to the FFT idea. 


```python
def fft(seq):
# this code only works when the length of sequence is a power of two.
# for arbitrary sequence lengths, we need a more carefully designed 
# divide and conquer scheme such as the so called "FFTW" (fast 
# fourier transform in the West) scheme
# proposed by Cooley and Tukey.

#base case
if len(seq) == 1:
  return seq 
  #Time complexity O(1)
else:
  n = len(seq)
  assert n%2 ==0 #requirement so ensure its a power of 2. 

  # Divide and Conquer on FFT needs to split arrays into odd and even   # polynomials. 
  seq_even = [seq[2*j] for j in range (n//2)]#even
  seq_odd = [seq[2*j+1]] for j in range(n//2)]#odd
  s1 = fft(seq_even) # recursively call fft function
  s2 = fft(seq_odd) # recursively call fft function
  #prepare emtpy result array
  fft_result [0]*n
  w = 1.0
  #calculate nth root of unity
  wn = (math.cos(2.0 * math.pi /n) + math.sin(2.0 * math.pi/n)*1j) 
  #Combine step
  for k in range(n//2):
    fft_result[k] = (s1[k] + w * s2[k]) 
#combinees results of even-indexed elements ('s1') and odd-indexed elements('s2') at frequency bin 'k'
    fft_result[k+n//2] = (s1[k] - w * s2[k]) 
#This operation combines the FFT results at frequency bin k in fft_result for the second half of the frequency range. It's like subtracting the contributions of even and odd components.
    w = w * wn 
#The complex exponential factor is used to rotate the contributions of s2. With eacheration of the loop w is multiplied by wn, causing a phase shift or rotation.
  return fft_result
  

```

![](assets/IgI7oagOKHRAiphtRRMZmEbUcxbAQle7XLZj89sxynM=.blob)

Inverse FFT is similar to FFT, except we use the conjegate. 
In the context of Fourier transforms and complex numbers, the notation $\overline{\omega\_n}$ typically refers to the complex conjugate of $\omega\_n$. Given that $\omega\_n$ is defined as $\omega\_n = \cos\left(\frac{2\pi}{n}\right) + j\sin\left(\frac{2\pi}{n}\right)$ in Fourier analysis, the complex conjugate $\overline{\omega\_n}$ is:

$$ \overline{\omega\_n} = \cos\left(\frac{2\pi}{n}\right) - j\sin\left(\frac{2\pi}{n}\right) $$

The complex conjugate is obtained by changing the sign of the imaginary part of the complex number. In the context of the Discrete Fourier Transform (DFT) and the Fast Fourier Transform (FFT), $\omega\_n$ represents the $n$-th root of unity, and its conjugate $\overline{\omega\_n}$ is often used in various computations, particularly in the Inverse Fourier Transform.

```python
def inverse_fft(seq):
  # base case
  if len(seq) == 1:
    return seq
  else:
    n = len(seq)
    assert n%2 == 0
  # Divide and Conquer on FFT needs to split arrays into odd and even   # polynomials. 
  seq_even = [seq[2*j] for j in range (n//2)]#even
  seq_odd = [seq[2*j+1]] for j in range(n//2)]#odd
  s1 = fft(seq_even) # recursively call fft function
  s2 = fft(seq_odd) # recursively call fft function
  # prepare emtpy result array
  fft_result [0]*n
  w = 1.0
  # calculate nth root of unity
  # This is the complex conjugate of wn
        wn = math.cos(2.0 * math.pi /n) - math.sin(2.0 * math.pi/n)*1j
        for k in range(n//2):
            # the multiplication by 0.5 is important here
            fft_ret[k] = 0.5* (s1[k] + w * s2[k])
            fft_ret[k+n//2] = 0.5 * (s1[k] - w * s2[k])
            w = w * wn
        return fft_ret
```
