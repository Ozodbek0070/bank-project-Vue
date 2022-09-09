// const formatter = new Intl.NumberFormat('ru-Ru', {style:"currency", currency:'RUB'})

const formatter = new Intl.NumberFormat('uz', {style: "currency", currency: 'UZS'})

export function currency(value){
    return formatter.format(value)
}