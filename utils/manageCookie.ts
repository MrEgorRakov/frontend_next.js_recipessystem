// Указываем, что модуль выполняется на серверной стороне в Next.js (используется в App Router)
'use server'

// Импорт функции redirect для перенаправления внутри серверного компонента
import { redirect } from 'next/navigation'

// Импорт cookies API из Next.js для работы с куками на сервере
import { cookies } from "next/headers"

// Импорт типов и утилит для работы с HTTP-запросами и ответами
import { NextRequest, NextResponse } from "next/server";

// Импорт функции расшифровки токена из loginUser.ts
import { decrypt } from './loginUser';

// Получает JWT-токен из куки (если есть)
export const token = async () => {
    return (await cookies()).get('access_token')?.value // возвращает значение токена или undefined
}

// Удаляет токен из кук (разлогинивает пользователя) и делает редирект на /login
export const logout = async () => {
    (await cookies()).delete('access_token'); // удаляет access_token
    redirect('/login') // перенаправляет на страницу логина
}

// Получает имя пользователя из токена, если он существует
export async function getUserNameFromToken() {
    try {
        const sessionToken = await token();   // получаем токен
        if (!sessionToken) return null;       // если его нет — возвращаем null
        const payload = await decrypt(sessionToken); // расшифровываем токен
        console.log("payload: ", payload);    // отладка
        return payload.username as string     // возвращаем username (если есть в payload)
    } catch (e) {
        console.error("Failed to get user name from token:", e); // если ошибка — логируем
        return null; // и возвращаем null
    }
}

// Проверяет наличие токена в cookies запроса
// Используется, например, в middleware для защиты маршрутов
export async function checkCookie(request: NextRequest) {
    const access_token = request.cookies.get("access_token")?.value; // извлекаем токен из запроса
    if (!access_token) return; // если токена нет — ничего не возвращаем (можно добавить редирект или 401)
    return NextResponse.next(); // иначе продолжаем обработку запроса
}