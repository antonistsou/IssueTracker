import React from 'react'

type Params = Promise<{ slug: string[] }>;
type SearchParams = Promise<{ sortOrder: string }>;

async function ProductPage(props: {
    params: Params;
    searchParams: SearchParams;
}) {
    const { slug } = await props.params;
    const { sortOrder } = await props.searchParams;

    return (
        <div>ProductPage
            {slug} {sortOrder}
        </div>
    )
}

// interface Props {
//     params: { slug: string[] };
//     searchParams: { sortOrder: string }
// }
// const ProductPage = ({ params: { slug }, searchParams: { sortOrder } }: Props) => {
//     return (
//         <div>ProductPage
//             {slug} {sortOrder}
//         </div>
//     )
// }

export default ProductPage