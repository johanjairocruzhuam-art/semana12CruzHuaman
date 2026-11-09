export default function Review({rating,comment,date,reviewerName,reviewerEmail} )
{
    return(
        <article className="review-item">
            <div className="review-meta">
                <span className="review-rating">{rating}</span>
                <span className="review-date">{date}</span>
            </div>

            <p className="review-comment">“{comment}”</p>

            <div className="review-author">
                <span>{reviewerName}</span>
                <span>{reviewerEmail}</span>
            </div>
        </article>
    )

}