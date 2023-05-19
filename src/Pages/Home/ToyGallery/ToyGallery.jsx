
import  { useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
import { photos } from "./Photos";
const ToyGallery = () => {
   const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = useCallback(() => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    }, []);

    return (
        <div className="mt-10">
            <h2 className="text-center text-5xl font-bold mb-4 gFont bg-gradient-to-r from-black via-gray-600 to-slate-300 text-transparent bg-clip-text p-5 ">Toys Pictures</h2> <hr className="border-black w-1/2 mx-auto mb-5 py-3" />
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen && (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map((photo) => ({
                                ...photo,
                                srcset: photo.srcSet,
                                caption: photo.title,
                            }))}
                        />
                    </Modal>
                )}
            </ModalGateway>
        </div>
    );
};

export default ToyGallery;