const ERROR_CODES = {
    'EMAIL_NOT_FOUND': "Pochta topilmadi!",
    'INVALID_PASSWORD': "Parol mos kelmaydi!",
    'auth': "Tizimga kiring!"
}

export function error(code){
    return ERROR_CODES[code] ?ERROR_CODES[code] : "Nomalum xatolik!"
}