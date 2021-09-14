import React from 'react'
import NumberFormat from 'react-number-format'
import imageCylinder from '../../../../assets/icons/gas.svg'
import './product.styles.scss'

const Product = props => {
    return (
        <div className="product">
            <div className="body">
                <div className="row">
                    <div className="col">
                        <img alt="Gas Cylinder" src={imageCylinder} />
                        <div>
                            <h4>{props.name}</h4>
                            <p>{props.description}</p>
                        </div>
                    </div>
                    <div className="col">
                        <input type="number" value={props.quantity} onChange={props.onChange}/>
                    </div>
                    <div className="col">
                        <strong><NumberFormat value={props.price} displayType={'text'} thousandSeparator={true} prefix={'N'} renderText={value => value} /></strong>
                    </div>
                    <div className="col">
                        <strong>
                            {
                                props.quantity > 0 ? <NumberFormat value={props.quantity * props.price} displayType={'text'} thousandSeparator={true} prefix={'N'} renderText={value => value} /> : ""
                            }
                        </strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product