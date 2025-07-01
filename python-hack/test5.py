import os
import binascii

def xor_encrypt(plaintext, key):
    ciphertext = bytearray()
    for i in range(len(plaintext)):
        ciphertext.append(plaintext[i] ^ key[i % len(key)])
    return ciphertext

flag_bytes = b"LKS{REDACTED}" # Ganti jadi teks yg ingin di enkripsi

key = b"X0R_0RACLE" # Kunci yang harus disamakan dengan dekripsi

encrypted = xor_encrypt(flag_bytes, key) # Enkripsi menggunakan XOR Cipher

with open("encrypted.txt", "w") as f: # Hasil enkripsi simpan ke file txt
    f.write(binascii.hexlify(encrypted).decode())