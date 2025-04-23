// Экспортируем функцию по умолчанию, она асинхронная и принимает строку password
export default async function hashPassword(password: string) {

    // Используем встроенный Web Crypto API для создания хеша по алгоритму SHA-512
    // Сначала переводим строку пароля в байты с помощью TextEncoder
    const arrayBuffer = await crypto.subtle.digest(
        "SHA-512", 
        new TextEncoder().encode(password) // => Uint8Array
    )

    // Преобразуем полученный ArrayBuffer в Buffer и кодируем его в строку base64
    // Это удобно для хранения или передачи хеша
    return Buffer.from(arrayBuffer).toString("base64")
}