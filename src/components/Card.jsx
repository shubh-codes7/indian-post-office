export default function Card({post}){
    return(
        <div className="card">
            <p><strong>Name:</strong> {post.Name}</p>
            <p><strong>Branch Type:</strong> {post.BranchType}</p>
            <p><strong>Delivery Status:</strong> {post.DeliveryStatus}</p>
            <p><strong>District:</strong> {post.District}</p>
            <p><strong>Division:</strong> {post.Division}</p>
        </div>
    )
}