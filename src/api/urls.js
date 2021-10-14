export const urls = {
    cities: () => '/db/city', // запрос на города
    cars: () => '/db/car', // запрос на машины
    address: () => '/db/point', // запрос на адреса выдачи машин
    category: () => '/db/category/', // запрос на категории авто
    categoryId: (selectedCategoryId) => (selectedCategoryId ? `/db/car?categoryId=${selectedCategoryId}` : '/db/car'), // запрос отфильтрованный список по категории
    orderStatus: () => '/db/orderStatus', // запрос на выдачу статуса заказа
    orderId: () => `/db/order/`,
}


