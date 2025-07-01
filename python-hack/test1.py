import base64

def vigenere_decrypt(cipher_text, key):
    result = ""
    key_index = 0
    for char in cipher_text:
        if char.isalpha():
            if char.isupper():
                char_code = ord(char) - ord('A')
                key_char = key[key_index % len(key)].upper()
                key_code = ord(key_char) - ord('A')
                result += chr((char_code - key_code + 26) % 26 + ord('A'))
            else:
                char_code = ord(char) - ord('a')
                key_char = key[key_index % len(key)].lower()
                key_code = ord(key_char) - ord('a')
                result += chr((char_code - key_code + 26) % 26 + ord('a'))
            key_index += 1
        else:
            result += char
    return result

base64_encrypted = "T1lNe3cxcjNyM3UzX2sxbmlfbTR3MzY0XzF2X2hsMWR2Y30=" # Kode Base64 yang akan di dekripsi
vigenere_ciphertext = base64.b64decode(base64_encrypted).decode() # Fungsi untuk melakukan decode Base64
key = "DOUBLE"
decrypted_flag = vigenere_decrypt(vigenere_ciphertext, key) # Dekripsi menggunakan metode Vigenère Caesar

print("Hasil dekripsi flag:", decrypted_flag)
