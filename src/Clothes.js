function Clothes({itemForSale}) {
    return(
        <div className="products">
            {itemForSale.map((element => {
                const {id, name, price, image} = element;
                return(
                    <div className="product-card" key={id}>
                        <img src={image} alt="clothes" width="350px" height="470px"/>
                    <div className="product-info">
                        <h3>{name}</h3>
                        <h4>{price}</h4>
                    </div>
                    </div>
                )
            }))}
        </div>
    )
}

export default Clothes;
