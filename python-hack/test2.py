import base64

def vigenere_encrypt(text, key):
    result = ""
    key_index = 0
    for char in text:
        if char.isalpha():
            if char.isupper():
                char_code = ord(char) - ord('A')
                key_char = key[key_index % len(key)].upper()
                key_code = ord(key_char) - ord('A')
                result += chr((char_code + key_code) % 26 + ord('A'))
            else:
                char_code = ord(char) - ord('a')
                key_char = key[key_index % len(key)].lower()
                key_code = ord(key_char) - ord('a')
                result += chr((char_code + key_code) % 26 + ord('a'))
            key_index += 1
        else:
            result += char
    return result

flag = "LKS{REDACTED}" # Teks yang ingin di dekripsi
key = "DOUBLE"
vigenere_encrypted = vigenere_encrypt(flag, key) # Enkripsi menggunakan metode Vigenère Caesar
base64_encrypted = base64.b64encode(vigenere_encrypted.encode()).decode() # Encode hasil enkripsi ke Base64
print(f"Flag terenkripsi: {base64_encrypted}") # Hasil enkripsi

with open("../public/encrypted.txt", "w") as f: # Menyimpan enkripsi ke encrypted.txt
    f.write(base64_encrypted) 