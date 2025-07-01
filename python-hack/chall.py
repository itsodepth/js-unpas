import os
import binascii

def xor_encrypt(plaintext, key):
    ciphertext = bytearray()
    for i in range(len(plaintext)):
        ciphertext.append(plaintext[i] ^ key[i % len(key)])
    return ciphertext

flag_bytes = b"LKS{REDACTED}"

key = b"X0R_0RACLE"

encrypted = xor_encrypt(flag_bytes, key)

with open("../public/encrypted.hex", "w") as f:
    f.write(binascii.hexlify(encrypted).decode())