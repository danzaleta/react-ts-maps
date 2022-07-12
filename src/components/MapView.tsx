import { useContext, useRef, useLayoutEffect } from "react"
import { PlacesContext } from "../context"
import { Map } from "mapbox-gl"

export const MapView = () => {
    const { isLoading, userLocation } = useContext(PlacesContext)
    const mapDiv = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        if (!isLoading) {
            const map = new Map({
                container: mapDiv.current!, // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: userLocation, // starting position [lng, lat]
                zoom: 14,
                projection: 'globe',
            } as any);
        }
    }, [isLoading])

    return (
        <>
            {isLoading
                ? <div>
                    Loading...
                </div>
                : <div ref={mapDiv} style={{
                    background: '#101e2c',
                    height: '100vh',
                    width: '100%',
                    position: 'fixed',
                    top: '0',
                    left: '0',
                }}>
                    {userLocation?.join(',')}
                </div>}
        </>
    )
}