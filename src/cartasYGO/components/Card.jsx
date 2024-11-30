import React from 'react'

export const Card = ({id,name,card_images,desc,SiguienteCarta}) => {
  const img = card_images?card_images[0].image_url_cropped:'';

  return (
    <>
        <div className="row mt-2">
            <div className="col-12 d-flex justify-content-center">
                <div className="card" style={{ maxWidth: "400px" }}>
                <div className="card-body">
                    <div className="row">
                    <div className="col-4">
                        { <button className="btn btn-success btn-lg mb-2" onClick={SiguienteCarta}>
                        Siguiente
                        </button> }
                    </div>
                    <div className="col-8">
                        <h5 className="card-title d-flex justify-content-end">
                        <b>{name}</b>
                        </h5>
                    </div>
                    </div>
                    <img src={img} alt={id} className="img-fluid mb-3" />
                    <div className="card-body">
                    <b className="d-block">
                        {desc}
                    </b>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}
