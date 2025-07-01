import os
import binascii

def xor_decrypt(ciphertext, key):
    plaintext = bytearray()
    for i in range(len(ciphertext)):
        plaintext.append(ciphertext[i] ^ key[i % len(key)])
    return plaintext

# Kode Hex yang akan di dekripsi
encrypted_hex_string = "147b01244862331c3b742c580d2d0322727738763c6f396c490d703013332d5c3c6c4266232f7f38" 

encrypted_bytes = binascii.unhexlify(encrypted_hex_string)

key = b"X0R_0RACLE" # Kunci dari enkripsinya (HARUS SAMA)
decrypted_bytes = xor_decrypt(encrypted_bytes, key) # Dekripsi menggunakan XOR Cipher
flag = decrypted_bytes.decode() # Konversi hasil dekripsi ke string

print(f"Flag yang Ditemukan: {flag}")