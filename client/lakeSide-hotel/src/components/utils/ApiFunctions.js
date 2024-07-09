import axios from 'axios'
import { Form } from 'react-bootstrap'

export const api = axios.create({
    baseURL : "http://localhost:8080"
})

export async function addRoom(photo, roomType, roomPrice) {
    const formData = new FormData()
    formData.append("photo",photo)
    formData.append("roomType",roomType)
    formData.append("roomPrice",roomPrice)
    
    const response = await api.post("/rooms/add/new-room",formData)
    if(response.status === 201) {
        return true
    }else {
        return false
    }
}

export async function getRoomTypes() {
    try {
        const response = await api.get("/rooms/room/types")
        return response.data
    } catch (error) {
        throw new Error("Error fetching room types")
    }
}

export async function getAllRooms(){
    try {
        const result = await api.get("/rooms/all-rooms")
        console.log(result.data);
        return result.data
    } catch (error) {
        throw new Error("Error fetching rooms")
    }
}

export async function deleteRoom(roomId) {
    try {
        const result = await api.delete(`rooms/delete/room/${roomId}`)
        return result.data
    } catch (error) {
        throw new Error(`Error deleting room ${error.message}`)
    }
}

export async function updateRoom(roomId, roomData) {
    const formData = new FormData()
    formData.append("roomType", roomData.roomType)
    formData.append("roomPrice", roomData.roomPrice)
    formData.append("photo", roomData.photo)
    const response = await api.put(`rooms/update/${roomId}`, formData)
    return response
}

export async function getRoomById(roomId) {
    try {
        const result = await api.get(`/rooms/room/${roomId}`)
        return result.data
    } catch (error) {
        throw new Error(`Error fetching room ${error.message}`)
    }
}

export async function bookRoom(roomId, booking) {
    try {
        const response = await api.post(`bookings/room/${roomId}/booking`, booking)
        return response.data
    } catch (error) {
        if(error.response && error.response.data) {
            throw new Error(error.response.data)
        }else {
            throw new Error(`Error booking room: ${error.message}`)
        }
    }
}

export async function getAllBookings() {
    try {
        const result = await api.get("/bookings/all-bookings")
        return result.data
    } catch (error) {
        throw new Error(`Error fetching bookings: ${error.message}`)
    }
}

export async function getBookingByConfirmationCode(confirmationCode) {
    try {
        const result = await api.get(`bookings/confirmation/${confirmationCode}`)
        return result.data
    } catch (error) {
        if(error.response && error.response.data) {
            throw new Error(error.response.data)
        }else {
            throw new Error(`Error finding booking: ${error.message}`)
        }
    }
}

export async function cancelBooking(bookingId) {
    try {
        const result = await api.delete(`bookings/booking/${bookingId}/delete`)
        return result.data
    }catch (error) {
        throw new Error(`Error cancelling bookings: ${error.message}`)
    }
}