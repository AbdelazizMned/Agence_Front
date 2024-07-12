import React from 'react'
import './css/RoomAdd.css'
import BookContainer from './BookContainer'

function RoomAdd() {
  return (
    <div className='addroom-parent'>
        <div className='addroom-container'>
            <p className='booking-header'>Choose your room and Formula</p>
            <div className='dyn-order'>
                <div className='order'>
                    <div className='room-sum'>
                        <div className='square'></div>
                        1x classic room with city or garden view
                    </div>
                    <div className='addons'>Bed and breakfast</div>
                    <div className='price'>
                        <div className='available'>
                            Available
                        </div>
                        <div className='price-val'>
                            725 $
                        </div>
                    </div>
                </div>
                <div className='order'>
                    <div className='room-sum'>
                        <div className='square'></div>
                        1x classic room with city or garden view
                    </div>
                    <div className='addons'></div>
                    <div className='price'>
                        <div className='available'>
                            Available
                        </div>
                        <div className='price-val'>
                            725 $
                        </div>
                    </div>
                </div>
            </div>
            <BookContainer />
        </div>
    </div>
  )
}

export default RoomAdd