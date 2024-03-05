
import IPython.display as ipd
import requests
import matplotlib.pyplot as plt
url='https://home.cs.colorado.edu/~srirams/courses/coursera-ds-alg-2021/Bach_Air_from_Suite_3.wav'
r = requests.get(url, allow_redirects=True)
open('Bach_Air_from_Suite_3.wav', 'wb').write(r.content)
ipd.Audio('Bach_Air_from_Suite_3.wav') # load a local WAV file

from scipy.io.wavfile import read, write
# We can load the wav file as a sequence of amplitudes over time.
(rate,sound_data)= read('Bach_Air_from_Suite_3.wav')
print(sound_data.shape)
plt.plot([j/rate for j in range(sound_data.shape[0])], sound_data[:,0])
plt.xlabel('Time')
plt.ylabel('Amplitude')
plt.title('Channel 0')
plt.figure()

plt.plot([j/rate for j in range(sound_data.shape[0])], sound_data[:,1])
plt.xlabel('Time')
plt.ylabel('Amplitude')
plt.title('Channel 1')
plt.show()

from numpy.fft import fft, ifft,fftfreq
from numpy import linspace
N = len(sound_data)
sound_fft = fft(sound_data[:,0])
frequencies = fftfreq(N, 1/rate)
plt.plot(frequencies[:N//2], [abs(x) for x in sound_fft[:N//2]])
plt.title('FFT of signal')
plt.xlabel('Frequencies (Hz)')
plt.ylabel('Amplitude/Energy')
plt.show()


from numpy import int16
def select_freq_range(lo, hi, frequencies, fft_spectrum):
    assert len(frequencies) == len(fft_spectrum)
    res = []
    for (f,v) in zip(frequencies, fft_spectrum):
        if f == 0.0: # always keep the 0 hertz component
            res.append(v)
            continue 
        if lo <= f <= hi or -hi <= f <= -lo:
            res.append(v)
        else:
            res.append(0.0+0.0j) #remove frequencies by setting their amplitudes to zero
    return res

def constitute_wave_file_from_fft(fft_spec, rate, filename):
    ifft_dat = ifft(fft_spec)
    write(filename+'.wav',  rate, ifft_dat.astype(int16))
    
upto_200_hz = select_freq_range(0, 200, frequencies, sound_fft)
constitute_wave_file_from_fft(upto_200_hz, rate, 'bach_upto_200hz')
ipd.Audio('bach_upto_200hz.wav') # you will be able to hear the bass if you have your volume turned up high.

plt.figure(figsize=(12, 6))
plt.plot(frequencies[:N//2], [abs(x) for x in upto_200_hz[:N//2]])
plt.xlabel('Frequencies (Hz)')
plt.ylabel('Amplitude/Energy')
plt.title('FFT Result - Up to 200 Hz')
plt.xlim(0,250)
plt.show()


upto_1000_hz = select_freq_range(0, 1000, frequencies, sound_fft)
constitute_wave_file_from_fft(upto_1000_hz, rate, 'bach_upto_1000hz')
ipd.Audio('bach_upto_1000hz.wav') # you will clearly hear the bass and lower frquencies of the violin.

plt.figure(figsize=(12, 6))
plt.plot(frequencies[:N//2], [abs(x) for x in upto_1000_hz[:N//2]])
plt.xlabel('Frequencies (Hz)')
plt.ylabel('Amplitude/Energy')
plt.title('FFT Result - Up to 1000 Hz')
plt.xlim(0,1100)
plt.show()

between_1000_and_3000_hz = select_freq_range(1000, 3000, frequencies, sound_fft)
constitute_wave_file_from_fft(between_1000_and_3000_hz, rate, 'bach_1000_to_3000hz')
ipd.Audio('bach_1000_to_3000hz.wav') # You will hear the violin

plt.figure(figsize=(12, 6))
plt.plot(frequencies[:N//2], [abs(x) for x in between_1000_and_3000_hz[:N//2]])
plt.xlabel('Frequencies (Hz)')
plt.ylabel('Amplitude/Energy')
plt.title('FFT Result - Between 1000 and 3000 Hz')
plt.xlim(900,3100)
plt.show()

beyond_3000_hz = select_freq_range(3000, 15000, frequencies, sound_fft)
constitute_wave_file_from_fft(beyond_3000_hz, rate, 'bach_3000hz+')
ipd.Audio('bach_3000hz+.wav') # The more "cat scratch" frequencies of the violin will be heard.

plt.figure(figsize=(12, 6))
plt.plot(frequencies[:N//2], [abs(x) for x in beyond_3000_hz[:N//2]])
plt.xlabel('Frequencies (Hz)')
plt.ylabel('Amplitude/Energy')
plt.title('FFT Result - beyond_3000_Hz')
plt.xlim(3000,5000)
plt.show()