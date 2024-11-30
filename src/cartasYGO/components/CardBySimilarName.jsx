import React from 'react'

export const CardBySimilarName = ({id,name,card_images,desc,humanReadableCardType}) => {
    const img = card_images?card_images[0].image_url_cropped:'';

  return (
    <>
        <div className="row mt-2">
            <div className="col-12 d-flex justify-content-center">
                <div className="card" style={{ maxWidth: "400px" }}>
                <div className="card-body">
                    <div className="row">
                   
                    <div className="">
                        <h5 className="card-title d-flex justify-content-end">
                        <b>{name}</b>
                        </h5>
                    </div>
                    </div>
                    <img src={img} alt={id} className="img-fluid mb-3" />
                    <div className="card-body">
                        <h5>{humanReadableCardType}</h5>
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
