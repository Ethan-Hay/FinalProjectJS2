function Product(id,data){
    id = id ?? '';
    data = data ?? {};

    return{
        id: id,
        productName: data.productName ?? '',
        price: data.price ?? 0,
        category: data.category ?? '',
        image: data.image ?? ''
    }
}