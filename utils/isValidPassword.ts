// Импортируем функцию hashPassword, которая хеширует строку (в твоём случае — пароль)
import hashPassword from './hashPassword'

// Экспортируем асинхронную функцию по умолчанию
// Она принимает два аргумента: введённый пользователем пароль и уже сохранённый хеш пароля
export default async function isValidPassword(password: string, hashedPassword: string) {

    // Для отладки: выводим хеш введённого пароля в консоль
    console.log("Hash: ", await hashPassword(password))

    // Хешируем введённый пароль и сравниваем его с сохранённым хешем
    // Если совпадают — пароль правильный, возвращаем true
    // Если нет — возвращаем false
    return await hashPassword(password) === hashedPassword 
}