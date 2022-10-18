export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: { rate: number; count: number };
};

export const isProduct = (arg: unknown): arg is Product => {
    const p = arg as Product;

    return (
        typeof p?.id === 'number' &&
        typeof p?.title === 'string' &&
        typeof p?.price === 'number' &&
        typeof p?.description === 'string' &&
        typeof p?.category === 'string' &&
        typeof p?.image === 'string' &&
        typeof p?.rating.rate === 'number' &&
        typeof p?.rating.count === 'number'
    );
};

export const isProducts = (arg: unknown[]): arg is Product[] =>
    !arg.some((arg) => !isProduct(arg));
