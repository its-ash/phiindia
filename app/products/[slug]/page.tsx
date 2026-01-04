import { products } from '../data';
import ProductClient from './ProductClient';

export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    return <ProductClient params={params} />;
}
