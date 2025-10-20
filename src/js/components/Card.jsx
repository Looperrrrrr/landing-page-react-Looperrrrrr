function Card ({imageUrl, title, description, button}) {
    return (
        <div className="card pers-bg-gray pers-shadow" style={{width: "18rem"}}>
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text flex-grow-1">{description}</p>
                <div className="mt-5">
                    <a href="#" className="btn btn-primary d-flex justify-content-center">{button}</a>
                </div>
            </div>
        </div>
    );
}

export default Card; 