// Импортируем типы запроса и ответа из Next.js для middleware
import { NextRequest, NextResponse } from "next/server";

// Импортируем функцию, которая проверяет наличие access_token в cookies
import { checkCookie } from "./utils/manageCookie";

// Основная функция middleware, вызывается автоматически на сервере, если путь совпадает с `matcher`
export async function middleware(request: NextRequest) {
  console.log("Middleware invoked") // отладочный вывод — показывает, что middleware был вызван

  // Проверяем наличие access_token через нашу функцию
  const res = await checkCookie(request)
  console.log("res: ", res) // выводим результат (undefined или NextResponse)

  // Если токен есть (checkCookie вернул NextResponse) — пропускаем пользователя
  if (res)
    return res
  else 
    // Иначе редиректим на /login
    return NextResponse.redirect(new URL("/login", request.url))

  // === Альтернативный стиль (короткий однострочник)
  // return (await updateSession(request)) || NextResponse.redirect(new URL("/blog/login", request.url));
}

// Конфигурация: указываем, для каких путей работает middleware
// Если URL совпадает с `/user/edit/что-угодно`, middleware будет вызван
export const config = {
  matcher: '/user/edit/:path*',
}