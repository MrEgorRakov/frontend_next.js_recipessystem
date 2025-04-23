// Указывает, что код будет выполняться на сервере (используется в Next.js 13+ с серверными компонентами)
"use server"

// Импортируем функции для создания и проверки JWT из библиотеки 'jose'
import { SignJWT, jwtVerify } from "jose";

// Импортируем объект cookies для управления куками в Next.js
import { cookies } from "next/headers";

// Импортируем NextResponse для работы с ответами на сервере
import {  NextResponse } from "next/server";

// Получаем секретный ключ из переменных окружения
const secretKey = process.env.SECRET;
if (!secretKey) throw new Error("JWT_SECRET is not set");  // Если ключа нет — выбрасываем ошибку

// Кодируем секрет в Uint8Array, нужный для библиотеки jose
const key = new TextEncoder().encode(secretKey);

// Время жизни токена по умолчанию: 300 секунд (5 минут)
const TIMEOUT = 300

// Функция для создания JWT токена из переданного payload
export async function encrypt(payload: Record<string, unknown>) {  
    try {
        return await new SignJWT(payload) // создаём новый JWT с payload
            .setProtectedHeader({ alg: "HS256" }) // указываем алгоритм подписи
            .setIssuedAt() // добавляем отметку времени создания
            .setExpirationTime(`${TIMEOUT} sec from now`) // устанавливаем время истечения
            .sign(key); // подписываем токен секретным ключом
    }
    catch (e) {
        console.log("Error in encrypt: ", e); // если ошибка — логируем
    } 
    return ""; // если не получилось — возвращаем пустую строку
}

// Функция для расшифровки и верификации JWT
export async function decrypt(input: string): Promise<Record<string, unknown>> {
    const { payload } = await jwtVerify(input, key, {
        algorithms: ["HS256"], // используем тот же алгоритм, что при создании
    });
    console.log("payload: 111 ", payload); // выводим расшифрованный payload
    return payload;
}

// Интерфейс для входных данных пользователя
interface UserInput {
    id: string;
    email: string;
    name: string;
}

// Функция логина — создаёт токен, кладёт его в куки
export async function loginUser(userInput: UserInput, remember: boolean) {
    const { id, email, name } = userInput; 
    let timeout = TIMEOUT // по умолчанию — 5 минут
    if (remember)
        timeout = 24 * 60 * 60; // если "запомнить" — токен на сутки

    const expires = new Date(Date.now() + timeout * 1000); // дата истечения токена
    const session = await encrypt({ id, email, name, expires }); // создаём токен

    // сохраняем токен в куки
    (await cookies()).set("access_token", session, { expires, httpOnly: true });
    console.log("after Session  : ", session)
    return { message: "Login Success" } // возвращаем результат
}

// Функция логаута — удаляет токен из кук
export async function logoutUser() {
    (await cookies()).delete('access_token') // удаляем куку
    return { message: "Logout Success" } // возвращаем результат
}

// Получение сессии из кук, если токен есть — расшифровываем
export async function getSession() {
    const session = (await cookies()).get('access_token')?.value
    if (!session) return null; // если токена нет — возвращаем null
    return await decrypt(session); // иначе возвращаем расшифрованный payload
}

// Обновление сессии (например, при каждом запросе)
export async function updateSession() {
    const session = (await cookies()).get('access_token')?.value
    if (!session) return; // если токена нет — ничего не делаем

    // Расшифровываем текущую сессию
    const parsed = await decrypt(session);

    // Обновляем срок действия
    parsed.expires = new Date(Date.now() + TIMEOUT * 1000);

    const res = NextResponse.next(); // создаём стандартный ответ
    res.cookies.set({
        name: "access_session", // можно также перезаписать старую куку
        value: await encrypt(parsed), // создаём новый токен
        httpOnly: true, // доступен только на сервере
        expires: parsed.expires as Date, // указываем время истечения
    });

    return res; // возвращаем ответ
}