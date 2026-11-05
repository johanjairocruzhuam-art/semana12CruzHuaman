import Review from "./Reviews";

export default function CardProducto({id,category,title, stock, imageUrl,reviews} )
{
    return(
        <article className="product-card">
    <div className="product-image">
        <img src={imageUrl} alt={title} />
    </div>

    <div className="product-info">
        <span className="product-category">{category}</span>

        <h3>{title}</h3> 

        <div className="product-stock">
            <span>Stock</span>
            <strong>{stock}</strong>
        </div>
    </div>
    <section>
        {reviews.map(e=><Review
            rating={e.rating}
            comment={e.comment}
            date={e.date}
            reviewerName={e.reviewerName}
            reviewerEmail={e.reviewerEmail}
        />
        )}
    </section>
    </article>
    )}