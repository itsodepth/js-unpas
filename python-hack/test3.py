import numpy as np

# Masukkan kode terenkripsi disini
data = b'\x00\x00\x02?\x00\x00\x02\xd0\x00\x00\x03\x98\x00\x00\x02\r\x00\x00\x02F\x00\x00\x03\\\x00\x00\x01\xac\x00\x00\x02\x03\x00\x00\x02\xe8\x00\x00\x01\xff\x00\x00\x02-\x00\x00\x040\x00\x00\x02\x8a\x00\x00\x02\xdf\x00\x00\x04&\x00\x00\x02q\x00\x00\x02\xaa\x00\x00\x03f\x00\x00\x01\xc7\x00\x00\x02\t\x00\x00\x03\x98\x00\x00\x01\xed\x00\x00\x02\x1c\x00\x00\x03\xfa\x00\x00\x02\x97\x00\x00\x03\x01\x00\x00\x04\x14\x00\x00\x02C\x00\x00\x02\xfb\x00\x00\x03\x86\x00\x00\x01\xce\x00\x00\x02\x19\x00\x00\x03\xbe\x00\x00\x02\x9b\x00\x00\x02\xf8\x00\x00\x03\xda'

# Matriks dekripsi (invers dari matriks yang terenkripsi)
decrypt_matrix = np.linalg.inv(np.array([[2,1,3],[1,2,4],[4,4,2]], dtype=float))

# Konversi byte dari variabel data menjadi integer
values = [int.from_bytes(data[i:i+4], 'big') for i in range(0, len(data), 4)]

# Inisialisasi array untuk menyimpan hasil dekripsi
decrypted = []

# Looping dekripsi sampai data byte habis
for i in range(0, len(values), 3):
    if i + 2 < len(values):
        vector = np.array([values[i], values[i+1], values[i+2]])
        result = np.round(np.dot(decrypt_matrix, vector)).astype(int)
        decrypted.extend(result)

# Konversi ke teks yang bisa dibaca
text = ''.join(chr(v) if 0 <= v <= 127 else f'[{v}]' for v in decrypted)
print(f"Flag yang Ditemukan: {text}")