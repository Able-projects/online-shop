import '../style/categories.css'
function CategoryCardItem(props) {
    const { data } = props
    return (
        <div className="category-card" style={{ backgroundImage: data.bgImg }}>
            <div>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <button>Shop now</button>
            </div>
        </div>
    )
}

export default CategoryCardItem