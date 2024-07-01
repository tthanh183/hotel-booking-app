import React, { useEffect, useState } from 'react'
import {Link} from 'react-dom'
import {getAllRooms} from '../utils/ApiFunctions'
import { Carousel, Container } from 'react-bootstrap'
const RoomCarousel = () => {
    const [rooms, setRooms] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getAllRooms().then((data) => {
            setRooms(data)
            setIsLoading(false)
        }).catch((error) => {
            setErrorMessage(error.message)
            setIsLoading(false)
        })
    }, [])

    if(isLoading) {
        return <div className='mt-5'>Loading rooms...</div>
    }
    if(errorMessage) {
        return <div className='text-danger mb-5 mt-5'>Error : {errorMessage}</div>

    }
  return (
    <section className='bg-light mb-5 mt-5'>
        <Link to={"/browse-all-rooms"} className="hotel-color text-center">
            Browse all rooms
        </Link>

        <Container>
            <Carousel indicators={false}>
                {[...Array(Math.ceil(rooms.length / 4))].map((_,index) => (
                    <Carousel.Item key={index}>
                        <Row>
                            {rooms.slice(index * 4, index * 4 + 4).map((room) => (
                                <Col key={room.id} className>
                                </Col>
                            ))}  
                        </Row>        
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    </section>
  )
}

export default RoomCarousel