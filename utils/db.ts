// Импортируем PrismaClient из библиотеки @prisma/client
import { PrismaClient } from '@prisma/client'

// Объявляем функцию, создающую новый экземпляр PrismaClient
const prismaClientSingleton = () => {
    return new PrismaClient()
}

// Расширяем глобальный объект globalThis, добавляя к нему типизированное свойство prismaGlobal
// Это нужно для сохранения одного экземпляра PrismaClient между перезагрузками модулей (в dev-среде)
declare const globalThis: {
    prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

// Используем уже существующий экземпляр PrismaClient, если он есть в globalThis.prismaGlobal,
// иначе создаем новый с помощью prismaClientSingleton
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

// Экспортируем экземпляр Prisma для использования в других частях приложения
export default prisma

// Если среда выполнения не production (т.е. dev), сохраняем экземпляр Prisma в globalThis,
// чтобы избежать повторного создания при каждом перезапуске модуля
if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma